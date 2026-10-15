/* Salas online de 4 letras para os jogos.
   Cada sala e um Durable Object que so repassa mensagens entre quem entrou (ate 4 pessoas).
   O resto do site continua sendo servido como arquivos estaticos (binding ASSETS). */

const CODE_RE = /^[A-Z2-9]{4}$/;
const MAX_MSG = 256 * 1024;

export class Room {
  constructor(state, env) {
    this.state = state;
    this.env = env;
  }

  members() {
    return this.state.getWebSockets().map((ws) => ({ ws, a: ws.deserializeAttachment() || {} }));
  }

  send(ws, obj) {
    try { ws.send(JSON.stringify(obj)); } catch (e) { /* conexao ja caiu */ }
  }

  async fetch(request) {
    if (request.headers.get('Upgrade') !== 'websocket') {
      return new Response('Use WebSocket', { status: 426 });
    }
    const url = new URL(request.url);
    const wantHost = url.searchParams.get('host') === '1';
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    const list = this.members();

    const reject = (m) => {
      server.accept();
      server.send(JSON.stringify({ t: 'err', m }));
      server.close(1000, m);
      return new Response(null, { status: 101, webSocket: client });
    };

    let max = 2, game = (url.searchParams.get('game') || 'jogo').slice(0, 24);
    if (wantHost) {
      if (list.length > 0) return reject('Essa sala já existe');
      max = Math.max(2, Math.min(4, parseInt(url.searchParams.get('max') || '2', 10) || 2));
    } else {
      const host = list.find((x) => x.a.host);
      if (!host) return reject('Sala não encontrada');
      max = host.a.max || 2;
      game = host.a.game || game;
      if (list.length >= max) return reject('Sala cheia');
    }

    const used = new Set(list.map((x) => x.a.id));
    let id = 0;
    while (used.has(id)) id++;

    this.state.acceptWebSocket(server);
    server.serializeAttachment({ id, host: wantHost, max, game });
    this.send(server, { t: 'hello', id, host: wantHost, max, game, peers: list.map((x) => x.a.id) });
    for (const x of list) this.send(x.ws, { t: 'join', id });
    return new Response(null, { status: 101, webSocket: client });
  }

  webSocketMessage(ws, message) {
    if (typeof message !== 'string' || message.length > MAX_MSG) return;
    let m;
    try { m = JSON.parse(message); } catch (e) { return; }
    const me = ws.deserializeAttachment() || {};
    if (m.t === 'ping') { this.send(ws, { t: 'pong', n: m.n }); return; }
    if (m.t !== 'msg') return;
    const out = JSON.stringify({ t: 'msg', from: me.id, d: m.d });
    for (const x of this.members()) {
      if (x.ws === ws) continue;
      if (m.to != null && x.a.id !== m.to) continue;
      try { x.ws.send(out); } catch (e) { /* ignora */ }
    }
  }

  webSocketClose(ws) {
    const me = ws.deserializeAttachment() || {};
    for (const x of this.members()) {
      if (x.ws === ws) continue;
      this.send(x.ws, { t: 'leave', id: me.id, host: !!me.host });
    }
    try { ws.close(1000, 'ok'); } catch (e) { /* ignora */ }
  }

  webSocketError(ws) {
    this.webSocketClose(ws);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const m = url.pathname.match(/^\/ws\/([A-Za-z0-9]{4})$/);
    if (m) {
      const code = m[1].toUpperCase();
      if (!CODE_RE.test(code)) return new Response('Codigo invalido', { status: 400 });
      const stub = env.ROOMS.get(env.ROOMS.idFromName(code));
      return stub.fetch(request);
    }
    return new Response('Salas do Fliperama da Matematica', { status: 200 });
  },
};
