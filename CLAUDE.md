# Fliperama da Matemática — contexto do projeto

Dona do projeto: profª Katyeli Oliveira (Matemática, E.E. Anna Cuevas Guimarães). Uso: estudo para o SARESP (6º ao 9º ano) e socialização do curso Multiplica (SEDUC-SP).

## O que existe
- `index.html` — app único (HTML+CSS+JS inline), mobile-first, em português do Brasil. Está publicado também como Artifact no Claude.
- Estrutura: `THEMES` (temas), `GAMES` (jogos), telas `home/menu/pick/pickLevel/play/nextQ/ans/over`.
- Jogos: Tabuada Turbo, Continhas Sem Fim, Quiz SARESP, Que Número Sou Eu?, Memória, Verdade ou Mentira, Qual é o Intruso?, Damas, Cofrinho Matemático.
- Quiz SARESP: 200 questões (50 por ano) nos 4 níveis (abaixo do básico, básico, adequado, avançado), baseadas em `docs/descritor_SARESP.pdf`. As figuras são SVG gerados em JS (`FIG`).
- `banco-saresp/` — cópia do banco e das figuras extraídos do `index.html`: `bank.js` (`SD` = descritores, `SB` = questões `{a:ano,d:descritor,l:nível 0-3,q,o:opções,c:índice certo,e:explicação,f:figura}`) e `fig.js` (`FIG`, desenhos SVG). A fonte de verdade é o próprio `index.html`; ao editar o banco, mantenha 50 questões por ano, 12/13/13/12 por nível, todo descritor com ao menos uma questão, sem repetidas, 4 opções distintas, e confira cada resposta.

## Regras que a professora exige
1. Nada pode piscar ou tremer de forma brusca (alunos sensíveis). Existe "Modo calmo" (`body.fx-calm`) e respeito a `prefers-reduced-motion`. Não recrie a tela inteira a cada toque: atualize só o que mudou.
2. Grids de celular: `grid-template-columns:repeat(N,minmax(0,1fr))`, nunca `repeat(N,1fr)`.
3. Nunca reutilize nome de classe CSS para elementos diferentes (prefixo `fx-`).
4. Botões segurados: `touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none`.
5. Testar em ~412px de largura (Playwright/Chromium). Teste com clique real de mouse, não só `.click()` em JS.
6. Não inventar códigos de habilidade BNCC nem dados. Usar só os descritores do PDF.
7. Perfil do aluno (nome + emoji) e recordes ficam em `localStorage`.

## Pendência principal
Igualar a plataforma ao jogo da família (site de referência: https://jogosmilena.felipe-conhariki.workers.dev; repositório privado, não clonar). Ver `docs/prompt-igualar-ao-jogo-da-familia.txt` e `docs/prompt-trocar-motor-passo-a-passo.txt`.
- Falta: menu com 4 categorias, mais jogos, jogos 3D (Three.js sob demanda, com fallback se WebGL falhar), PWA (manifest + service worker), xadrez, dominó, tetris etc.
- NÃO apagar o conteúdo de matemática (quiz SARESP, temas, textos). Igualar só a plataforma.
- Um jogo 3D por vez; testar antes de seguir.

## Fora desta pasta
Documento do Multiplica (PPTX de 161 MB) e o repositório GitHub KatyeliOliveira/FliperamaMatematica (público, estava vazio). Publicar o `index.html` nele quando quiser.
