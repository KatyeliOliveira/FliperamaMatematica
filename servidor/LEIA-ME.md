# Servidor das salas (opcional)

O "Jogar com amigo" (Xadrez, Dama e Duelo do Quiz SARESP) usa salas com código de 4 letras. O site do GitHub Pages não tem servidor, então as salas precisam de um **Worker do Cloudflare**.

Por padrão o jogo usa o Worker do jogo da família (`NET_SERVER` no `index.html`). Se você quiser o seu próprio servidor, faça uma vez:

1. Instale o Node.js (https://nodejs.org).
2. Abra um terminal nesta pasta (`servidor`) e rode:
   ```
   npx wrangler login
   npx wrangler deploy
   ```
3. No final aparece um endereço como `https://fliperama-salas.SEU-USUARIO.workers.dev`.
4. No `index.html`, troque a linha `const NET_SERVER='wss://...'` por `wss://fliperama-salas.SEU-USUARIO.workers.dev` (o mesmo endereço, começando com `wss://`).
5. Faça commit e push. O GitHub Pages atualiza sozinho.

O servidor só repassa as mensagens entre os jogadores (jogadas e respostas). Ele não guarda nome, nota nem dados pessoais. A sala existe só enquanto alguém está conectado.
