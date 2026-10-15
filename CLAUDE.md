# Fliperama da Matemática — contexto do projeto

Dona do projeto: profª Katyeli Oliveira (Matemática, E.E. Anna Cuevas Guimarães). Uso: estudo para o SARESP (6º ao 9º ano) e socialização do curso Multiplica (SEDUC-SP).

## Escopo (regra principal)
- **Só jogos de matemática e de preparação para o SARESP.** Nada fora disso: nada de personagens, Uno, Stick Fight, Cat Escape, Mundo Aberto, Pinball, Tetris, Dança, Labirinto, Ateliê, Casinha ou jogos de ação.
- Xadrez e Damas ficam porque a professora considera raciocínio matemático.
- A referência visual é o jogo da família (site https://jogosmilena.felipe-conhariki.workers.dev, repositório privado Conhariki). Copia-se **layout, cartões, relevo, cenas 3D e PWA**, nunca o conteúdo.

## Publicação
- Repositório: https://github.com/KatyeliOliveira/FliperamaMatematica (branch `main`, público).
- Site: https://katyelioliveira.github.io/FliperamaMatematica/ (GitHub Pages, fonte = `main`, raiz).
- Fluxo: editar `index.html` → testar → `git commit` → `git push origin main`. Pages atualiza sozinho.
- Login do GitHub já feito na máquina (`gh auth status`).

## O que existe
- `index.html` — app único (HTML+CSS+JS inline), mobile-first, em português do Brasil.
- `manifest.json`, `sw.js` (cache `fliperama-matematica-v1`), `icon.svg` — PWA instalável.
- `banco-saresp/` — cópia do banco e das figuras extraídos do `index.html`: `bank.js` (`SD` = descritores, `SB` = questões `{a:ano,d:descritor,l:nível 0-3,q,o:opções,c:índice certo,e:explicação,f:figura}`) e `fig.js` (`FIG`). A fonte de verdade é o próprio `index.html`.
- `docs/` — descritores do SARESP (PDF) e documentos de apoio.

### Estrutura do `index.html`
- `THEMES` (tema único, "Fliperama da Matemática") com `games` (ids dos jogos).
- `GAMES` (dados de cada jogo: `emoji`, `name`, `desc`, `init`, `next`).
- `MENU_CATS` / `MENU_CAT_OF` / `GAME_COL`: categorias e cores dos cartões do menu.
- Motor 3D: `loadThree()` (Three.js r128 do cdnjs, sob demanda), `webglOK()`, `make3D(host, camZ, shadow, ratio)` (cena, luz, sombra, `hooks` por quadro, `pick` por toque), `textTex()` (texto como textura, com ajuste de tamanho), `disposeMesh()`, `layout3D()` (posição dos blocos de resposta).
- Jogos 3D (todos têm versão 2D de reserva se o WebGL falhar):
  - `play3D` → Tabuada, Continhas, Quiz SARESP, Que Número, Verdade ou Mentira, Qual é o Intruso (enunciado em DOM, respostas em blocos 3D).
  - `memory3D` → Jogo da Memória (cartas 3D que giram).
  - `cofrinho3D` → Cofrinho Matemático (trilha 3D, peão e dado 3D; perguntas em blocos 3D).
  - `damas3D` → Damas (tabuleiro 3D com sombra; IA com níveis).
  - `xadrez3D` → Xadrez (regras e IA do motor de referência, lógica pura; promoção com escolha da peça; IA com níveis).
- Níveis de dificuldade: `DIFF` e `escolhaNivel()` (Xadrez e Damas: Fácil, Médio, Difícil).
- Quiz SARESP: 200 questões (50 por ano) nos 4 níveis, baseadas em `docs/descritor_SARESP.pdf`. As figuras são SVG gerados em JS (`FIG`).

## Regras que a professora exige
1. Nada pode piscar ou tremer de forma brusca (alunos sensíveis). Existe "Modo calmo" (`body.fx-calm`) e respeito a `prefers-reduced-motion`. Animações contínuas ficam desligadas no modo calmo; giros de carta e de dado são suaves, e no modo calmo são instantâneos (`isCalm()`). Não recrie a tela inteira a cada toque: atualize só o que mudou.
2. Grids de celular: `grid-template-columns:repeat(N,minmax(0,1fr))`, nunca `repeat(N,1fr)`.
3. Nunca reutilize nome de classe CSS para elementos diferentes (prefixo `fx-`).
4. Botões segurados: `touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none`.
5. Testar em ~412px de largura (Chromium), com clique real de mouse, não só `.click()` em JS.
6. Não inventar códigos de habilidade BNCC nem dados. Usar só os descritores do PDF do SARESP.
7. Perfil do aluno (nome + emoji) e recordes ficam em `localStorage`. Todo acesso a `localStorage` fica em try/catch.
8. Um jogo 3D por vez; testar antes de seguir.

## Pendências
- Testar em um celular de verdade (o teste foi feito em navegador de desktop com emulação de 412 px).
- Dar mais profundidade às telas de jogo (cenas 3D de fundo), mantendo o modo calmo.
- Conferir o PWA instalado no celular (o service worker foi verificado no endereço publicado).
