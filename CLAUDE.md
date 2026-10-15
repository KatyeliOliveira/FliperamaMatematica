# Fliperama da Matemática — contexto do projeto

Dona do projeto: profª Katyeli Oliveira (Matemática, E.E. Anna Cuevas Guimarães). Uso: estudo para o SARESP (6º ao 9º ano) e socialização do curso Multiplica (SEDUC-SP).

## Escopo (regra principal)
- **Só jogos de matemática e de preparação para o SARESP.** Nada fora disso: nada de personagens de anime, Stick Fight, Cat Escape, Mundo Aberto, Pinball, Tetris, Dança, Labirinto, Ateliê, Casinha, avatar ou jogos de ação.
- Xadrez, Dama, Dominó, Última Carta (UNO), Jogo da velha, Resta 1 e Cofrinho ficam porque a professora os considera raciocínio matemático.
- A base técnica e visual é o **jogo da família** (pasta `D:\jogos-personagens-main`; site https://jogosmilena.felipe-conhariki.workers.dev; repositório privado Conhariki). Copia-se **o motor** (layout, cartões, relevo, painéis, jogos, 3D do xadrez, PWA), nunca o conteúdo dos personagens.

## Publicação
- Repositório: https://github.com/KatyeliOliveira/FliperamaMatematica (branch `main`, público).
- Site: https://katyelioliveira.github.io/FliperamaMatematica/ (GitHub Pages, fonte = `main`, raiz).
- Fluxo: editar `index.html` → testar → `git commit` → `git push origin main`. Pages atualiza sozinho.
- **Jogar com amigo (salas de 4 letras):** Xadrez, Dama e Duelo do Quiz SARESP. O GitHub Pages não tem servidor, então as salas usam um Worker do Cloudflare, apontado por `NET_SERVER` no `index.html` (por padrão, o Worker do jogo da família). Para ter o seu próprio, veja `servidor/LEIA-ME.md` (publicar com `npx wrangler deploy` e trocar `NET_SERVER`). Código das salas: `netConnect`, `netLobbyScreen` (copiados do motor de referência).
- **Não há nuvem de progresso** (era do Worker de referência; foi removida). O progresso fica em `localStorage` e pode ser salvo por código ou arquivo.

## O que existe
- `index.html` — app único (HTML+CSS+JS inline), mobile-first, em português do Brasil. Foi montado a partir do `index.html` do jogo de referência: o motor foi mantido, o tema e o conteúdo são de matemática.
- `manifest.json`, `sw.js` (cache `fliperama-matematica-v2`; aumente o número ao publicar mudanças grandes), `icon.svg` — PWA instalável.
- `banco-saresp/` — banco do SARESP e figuras (`bank.js`: `SD` = descritores, `SB` = questões `{a:ano,d:descritor,l:nível 0-3,q,o:opções,c:índice certo,e:explicação,f:figura}`; `fig.js`: `FIG`, desenhos SVG). **Os dois arquivos são copiados para dentro do `index.html`**; ao mudar o banco, atualize os dois lugares. Regras: 50 questões por ano, 12/13/13/12 por nível, todo descritor com ao menos uma questão, sem repetidas, 4 opções distintas, confira cada resposta.
- `docs/` — descritores do SARESP (PDF) e documentos de apoio.

### Estrutura do `index.html`
- `THEMES.mat`: único tema (paleta roxa, mascotes, palavras, perguntas, verdadeiro/falso, intrusos). `mk()` cria os mascotes (`CH`). Não há seletor de tema.
- Conteúdo de matemática: `mathOpts`, `quizPool`, `tfPool`, `raceQuestion`, `mathIntruders`, `mathPairs`, `mkNums`, `millionBank`. São os pontos onde o motor busca perguntas; para mudar o conteúdo, mexa neles.
- `buildGames()`: lista dos jogos do menu. `MENU_CATS`/`MENU_CAT_OF`: categorias (Quiz e Palavras, Tabuleiro e Cartas, Criar e Explorar).
- Quiz SARESP: `quiz()` (ano e nível) → `quizRun(cfg)` (motor do Quiz de referência com progresso, sequência de acertos, 50/50, Pular, figuras, explicação e descritores para revisar). `saPool(ano,lv)` monta as questões.
- Outros jogos (motor de referência, conteúdo de matemática): Que número sou eu? (`whoIs`, números de `mkNums`), Corrida das contas (`race`), Verdade ou mentira (`trueFalse`), Qual é o intruso? (`intruder`), Rumo ao Milhão (`million`), Forca, Caça-palavras, Embaralhadas, Cruzadinha, Memória (pares de `mathPairs`), Jogo da velha, Dominó, Última Carta (`cards`, o UNO), Bingo das contas (`bingo`, cartela de `mathBingo`), Cofrinho (`savingsBoard`), Resta 1, Xadrez (3D com Three.js sob demanda: `chess3dCreate`), Dama, Pixel Art das Contas.
- Níveis Fácil, Médio e Difícil no Xadrez e na Dama: `aiLevel()`/`setAiLevel()`/`aiLevelUI()` (guardado em `localStorage` como `lv_xadrez` e `lv_dama`); `chessAiMove` usa `CHESS_LV`, `damaAiMove` tem busca de 3 jogadas no Difícil.
- `servidor/` — `worker.js` e `wrangler.jsonc` para publicar só as salas no Cloudflare (opcional).
- Painéis comuns: `panel()` (cabeçalho do jogo), `winPanel()` (resultado com estrelas), `go()` (troca de tela), `SFX`/`tone()` (sons), `confetti()`.

## Regras que a professora exige
1. Nada pode piscar ou tremer de forma brusca (alunos sensíveis). Respeitar `prefers-reduced-motion`. Não recrie a tela inteira a cada toque: atualize só o que mudou.
2. Grids de celular: `grid-template-columns:repeat(N,minmax(0,1fr))`, nunca `repeat(N,1fr)`.
3. Não reutilize nome de classe CSS para elementos diferentes.
4. Botões segurados: `touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none`.
5. Testar em ~412px de largura (Chromium), com clique real de mouse, não só `.click()` em JS.
6. Não inventar códigos de habilidade BNCC nem dados. Usar só os descritores do PDF do SARESP.
7. Perfil do aluno (nome + avatar), estrelas e recordes ficam em `localStorage`. Todo acesso a `localStorage` fica em try/catch.
8. Um jogo novo por vez; testar antes de seguir.

## Atenção ao editar
- Scripts de PowerShell 5.1 leem `.ps1` sem BOM como ANSI: **acentos e emojis dentro de `.ps1` saem corrompidos**. Para texto com acento, use a ferramenta de edição ou grave o texto em arquivo UTF-8 e leia com `ReadAllText(...,UTF8)`.
- Antes de commitar, confira a sintaxe do `<script>`: extraia o último bloco `<script>` e rode `node --check`.

## Pendências
- Testar em um celular de verdade (o teste foi feito em navegador de desktop com emulação de 412 px).
- Matemática dentro dos jogos de mesa: Última Carta (cartas mostram contas; combina o resultado, `ucExpr`), Dominó (modo "contas", padrão; `EXPR`), Cofrinho (duas casas de "Desafio de matemática"; acerto rende 3 moedas).
- Testar o "Com amigo" em dois aparelhos de verdade (foi testado com duas abas do navegador).
- Conferir o PWA instalado no celular.
