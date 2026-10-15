# Jornada Matemática — Projeto para a Socialização do Programa Multiplica 2026.2

> ⚠️ **Aviso importante sobre as fontes**: o "Documento Orientador" que você enviou trata da **Socialização de Prática** do curso de formação Multiplica (EFAPE/SEDUC-SP) — o relato individual do professor sobre uma prática aplicada em aula, com portfólio + fotos + vídeo opcional + pitch ao vivo. Ele **não** menciona Alura Start, SARESP, BNCC ou premiação de jogos de alunos. Este documento usa os **critérios reais** do arquivo enviado (citados nas seções 2 e 10) e trata seu projeto de jogo como **a prática pedagógica a ser relatada**. Onde cito habilidades BNCC, uso apenas códigos que confirmei (ex. EF06MA01, EF07MA05); os demais aparecem descritos por competência — confirme o código exato no Currículo Paulista/BNCC antes de usá-los oficialmente.

---

## 1. Análise do documento do Multiplica

| Elemento | O que o documento diz |
|---|---|
| Natureza | Socialização final de uma prática de sala de aula baseada no curso Multiplica — não é um projeto de estudantes concorrendo entre si |
| Formato de entrega | Portfólio (modelo em PowerPoint, PDF ou PPTX) preenchido na plataforma AVAEFAPE, entre **21/09 e 16/10/2026**, envio único |
| Evidências obrigatórias | 3 a 6 fotos (jpg/jpeg/png) |
| Evidência opcional (mas exigida para concorrer ao prêmio) | 1 vídeo de 1 a 4 minutos (mp4) |
| Consentimento | Termo de uso de imagem quando estudantes forem identificáveis, ou rostos borrados |
| Uso de IA | Deve ser declarado expressamente se usada na elaboração dos materiais; produção deve ser autoral e individual |
| Avaliação | 6 critérios do portfólio (nota 0/1/5/10, média final) + 2 rubricas de vídeo (Fase 1 eliminatória, Fase 2 premiação) |
| Socialização com a turma | Pitch presencial: 10 min de abertura + tempo dividido entre cursistas (2,5 a 4 min cada, conforme o tamanho da turma) |
| Consequência | Nota entra na Avaliação de Desempenho Individual 2026; entrega é requisito para certificação junto com 75% de frequência |

## 2. Principais critérios da premiação (extraídos do documento)

**Rubrica do portfólio** (nota final = média dos 6 critérios):
1. Contextualização e Identificação
2. Alinhamento Curricular e Intencionalidade
3. Conteúdos e Coerência da Narrativa
4. Resultados e Reflexão Crítica
5. Relevância e Qualidade das Evidências
6. Alinhamento e Mediação Pedagógica

**Rubrica do vídeo – Fase 2 (premiação)**: Identificação (dados pessoais/escola) · Conteúdo Pedagógico (habilidade e aprendizagem essencial) · Evidência de Prática (intencionalidade pedagógica e estratégias) · Narrativa/Storytelling · Evidências concretas do percurso · Diferencial de desempate (reflexão crítica sobre resultados).

## 3. Oportunidades identificadas

- O projeto do jogo é rico o bastante para **preencher naturalmente os 6 critérios**: há contexto claro (dificuldades em Matemática do 6º ano), intencionalidade curricular explícita, uma narrativa com início-meio-fim (investigação → criação → aplicação), resultados mensuráveis (uso por outras turmas) e muitas evidências visuais (protótipos, telas, alunos programando).
- Como o vídeo só é obrigatório para concorrer ao prêmio, vale a pena gravá-lo: o projeto tem apelo visual forte (alunos programando, tela do jogo, colegas jogando).
- Como a socialização com a turma é uma fala curta (2,5–4 min), vale preparar um roteiro enxuto e não o mesmo material do portfólio.

## 4. Conceito do projeto

**Prática pedagógica a ser relatada**: durante as aulas de **Tecnologia e Inovação**, os estudantes do 6º ano investigaram dificuldades de aprendizagem em Matemática pensando na preparação para o **SARESP**, planejaram e programaram — em **Scratch, via Alura Start** — um jogo/quiz digital de perguntas contextualizadas, usando **Inteligência Artificial como ferramenta de apoio** (para gerar ideias, redigir prompts, revisar questões e testar o jogo), testaram com colegas de outras séries e aprimoraram o produto. A professora mediou o processo pedagógico, curricular e o uso crítico da IA.

**Onde o projeto foi desenvolvido de fato**: o jogo em si deve ser construído em **Scratch** (ambiente usado no Alura Start), não em código de programação textual — é o que a turma já domina e é o que dá autoria real aos alunos. Em Scratch, sons de acerto/erro, animações de personagens e trocas de tela (por "backdrops"/telões) são recursos nativos, fáceis de os próprios alunos adicionarem, e resolvem justamente o pedido de deixar o jogo "colorido, animado e com sons".

**Alinhamento com as pautas do curso**: essa prática combina diretamente as duas pautas já trabalhadas no Multiplica — **Alura Start/Scratch** (a ferramenta de criação) e **IA no dia a dia** (usada com os alunos desde a geração de ideias até a escrita de prompts e os testes) — o que fortalece o critério "Alinhamento Curricular e Intencionalidade" do documento.

### Como estruturar isso em Scratch (roteiro técnico para a turma)
- **Telas** → um "backdrop" (cenário) para cada etapa: início, seleção de ano/área/nível, pergunta, resultado.
- **Variáveis** → `pontos`, `acertos`, `erros`, `nivel_atual`.
- **Perguntas e alternativas** → usar o bloco "pergunte e espere" ou botões (sprites clicáveis) com os textos das questões criadas pelos alunos.
- **Verificação da resposta** → bloco `se/então/senão` comparando a resposta escolhida com a correta.
- **Som de acerto/erro** → blocos de som (categoria "Som") tocando ao acertar/errar — os próprios alunos podem gravar ou escolher sons da biblioteca do Scratch.
- **Animação** → blocos de aparência (mudar cor, "próximo figurino", efeitos de crescer/pular) no sprite ao acertar ou errar.
- **Dificuldade adaptativa simples** → variável `nivel_atual` que sobe/desce conforme acertos/erros seguidos, controlando quais perguntas aparecem.
- **Uso da IA no processo** → os alunos podem usar uma IA para: gerar ideias de enunciados contextualizados, revisar a redação das perguntas, sugerir sons/efeitos e ajudar a identificar erros de lógica nos blocos — desde que **cada uso seja registrado e declarado** (ver seção 27-A).

## 5. Nome do jogo

Opções: **Jornada Matemática** · Mathlética · Rota dos Números · Desafio+ · Level Up Matemática · Quebra-Cabeça Numérico · Missão Cálculo · Matemundo.
**Escolhido: Jornada Matemática** — remete a progresso, trilha de aprendizagem e é fácil de explicar em uma fala curta.

## 6. Objetivo geral

Desenvolver, com protagonismo dos estudantes do 6º ano, um recurso digital interativo de Matemática que integre aprendizagem contextualizada, pensamento computacional e uso pedagógico da tecnologia, aplicável a diferentes turmas do Ensino Fundamental II.

## 7. Objetivos específicos

- Mobilizar conteúdos matemáticos por meio de situações-problema contextualizadas.
- Desenvolver raciocínio lógico e pensamento computacional na criação do jogo.
- Promover autonomia e protagonismo estudantil no planejamento e na programação.
- Estimular colaboração entre pares nas etapas de criação e teste.
- Transformar o erro em oportunidade de aprendizagem, com feedback explicativo.
- Produzir um recurso reutilizável por outras turmas e professores.

## 8. Público-alvo

Desenvolvido **pelos** estudantes do 6º ano; utilizado **por** estudantes do 6º ao 9º ano, com níveis de dificuldade ajustáveis (Aprender / Praticar / Desafio).

## 9. Habilidades trabalhadas (a confirmar códigos exatos no Currículo Paulista)

| Ano | Área | Habilidade (descrição) | Como o jogo trabalha |
|---|---|---|---|
| 6º | Números | Comparar, ordenar, ler e escrever números naturais e racionais (decimais) — **EF06MA01** (confirmado) | Perguntas de ordenação/comparação com feedback explicativo |
| 6º | Resolução de Problemas | Resolver problemas com as quatro operações | Situações contextualizadas (compras, distribuição de materiais) |
| 7º | Números | Resolver um mesmo problema com diferentes estratégias — **EF07MA05** (confirmado) | Nível "Desafio" aceita mais de um caminho de resolução |
| 7º–8º | Álgebra | Expressões numéricas e algébricas, equações do 1º grau | Fase de "chefão" com equações contextualizadas |
| 8º–9º | Geometria/Grandezas | Perímetro, área, volume | Missões com plantas de sala, embalagens |
| 6º–9º | Estatística e Probabilidade | Leitura de gráficos e tabelas, noção de probabilidade | Desafios com gráficos simples e situações de chance |
| 6º–9º | Educação Financeira | Porcentagem, descontos, juros simples | Missões de "loja" e "orçamento" |

## 10. Relação com os critérios reais do Multiplica (mapa direto)

| Critério do documento | Como o projeto atende | Evidência a apresentar |
|---|---|---|
| Contextualização e Identificação | Relato claro de quem, onde, com qual turma e por que a prática nasceu (dificuldade real em Matemática) | Slide de identificação + relato da investigação inicial |
| Alinhamento Curricular e Intencionalidade | Habilidades explicitadas por ano/área, ligadas às pautas do Multiplica sobre tecnologia/programação | Tabela de habilidades (seção 9) no portfólio |
| Conteúdos e Coerência da Narrativa | Sequência didática com início (investigação), meio (criação/programação) e fim (aplicação/socialização) | Roteiro da seção 16 (sequência didática) |
| Resultados e Reflexão Crítica | Comparação antes/depois, depoimentos, análise do que funcionou e do que precisou ser ajustado | Prints de erros corrigidos, depoimentos, dados de uso |
| Relevância e Qualidade das Evidências | Fotos nítidas dos alunos programando e jogando, com legendas | 3 a 6 fotos + vídeo de 1 a 4 min |
| Alinhamento e Mediação Pedagógica | Registro explícito do papel da professora como mediadora (não autora do jogo) | Relatos de intervenções e decisões conduzidas pelos alunos |

## 11. Mecânica do jogo

O jogador escolhe **Ano (6º–9º) → Área (Números, Geometria, Álgebra, Estatística, Financeira) → Nível (Aprender/Praticar/Desafio)**. Responde perguntas contextualizadas de múltipla escolha, acumula pontos e progresso, pode usar o botão "Me Ajude" antes de responder, e recebe feedback explicativo ao errar, nunca apenas "errado".

## 12. Estrutura das fases

Fases por nível de dificuldade dentro de cada área; a cada acerto o estudante avança uma "estação" na trilha; a cada 3 estações há um "desafio relâmpago" (tempo) e ao final da área um "chefão matemático" (problema de duas etapas).

## 13. Sistema de ajuda e feedback

Botão **💡 Me Ajude** revela, em ordem: dica → conceito → exemplo semelhante → estratégia → resolução comentada (só se o aluno pedir tudo). Erros geram explicação passo a passo ("Vamos pensar juntos...") em vez de apenas indicar que está errado.

## 14. Como os alunos do 6º ano participarão da criação

Eles investigam as próprias dificuldades, pesquisam referências de jogos, definem regras e desafios, escrevem e validam as questões matemáticas, programam no Alura Start, testam com colegas de outras turmas, identificam e corrigem erros, e apresentam o processo na socialização — a professora atua como mediadora, não como autora.

## 15. Sequência didática do projeto

| Etapa | Objetivo | Atividade dos alunos | Papel da professora | Produto/evidência |
|---|---|---|---|---|
| 1. Investigação | Identificar dificuldades reais | Discussão e levantamento de erros comuns | Provoca perguntas, não dá respostas prontas | Lista de dificuldades, registro em áudio/foto |
| 2. Pesquisa | Referenciar bons jogos educativos | Analisam jogos existentes | Cura exemplos, media discussão | Mapa mental dos elementos analisados |
| 3. Planejamento | Definir regras e estrutura | Desenham fluxo do jogo em papel | Orienta viabilidade técnica | Storyboard/planejamento escrito |
| 4. Matemática | Criar e validar questões | Escrevem e resolvem as próprias perguntas | Revisa correção matemática | Banco de questões dos alunos |
| 5. Programação | Construir no Alura Start | Codificam telas, lógica e pontuação | Apoia dúvidas técnicas | Capturas de tela do código |
| 6. Testagem | Verificar funcionamento | Outros alunos jogam e anotam falhas | Observa e registra | Lista de bugs encontrados |
| 7. Identificação de erros | Diagnosticar problemas | Classificam erros (matemática/programação/usabilidade) | Ajuda a categorizar | Registro de erros |
| 8. Aprimoramento | Corrigir e melhorar | Reprogramam trechos, reescrevem enunciados | Acompanha decisões | Nova versão do jogo |
| 9. Aplicação | Testar em escala | Turmas de outras séries jogam | Coleta feedback estruturado | Dados de uso, depoimentos |
| 10. Socialização | Comunicar o processo | Alunos explicam o projeto | Conduz a apresentação | Roteiro e slides finais |

## 16. Conceitos de programação no Alura Start

| Conceito | Aprendizagem associada |
|---|---|
| Variável | Armazenar pontuação e respostas → pensamento computacional + Matemática |
| Condicional (se/então) | Verificar resposta certa/errada → tomada de decisão |
| Evento (clique/botão) | Interação do usuário → lógica de interface |
| Operadores | Comparar respostas numéricas → Matemática aplicada |
| Repetição/loop | Repetir estrutura de perguntas → organização e eficiência |
| Pontuação/contador | Acompanhar progresso → feedback e automonitoramento |

## 17. Acessibilidade

Linguagem simples e curta; textos com contraste adequado e fonte ampliável; poucos elementos por tela; feedback duplo (visual + textual); níveis de dificuldade que acolhem defasagens; opção de leitura das perguntas em voz alta (recurso do navegador/leitor de tela), quando tecnicamente viável no Alura Start.

## 18. Critérios de avaliação (participação dos estudantes)

| Nível | Engajamento | Colaboração | Contribuição técnica/matemática | Reflexão sobre erros |
|---|---|---|---|---|
| Avançado | Participa ativamente de todas as etapas | Ajuda colegas e negocia ideias | Cria questões e contribui na programação | Analisa criticamente os próprios erros |
| Adequado | Participa da maioria das etapas | Colabora quando solicitado | Contribui em parte das tarefas | Reconhece erros com apoio |
| Em desenvolvimento | Participação pontual | Pouca interação com o grupo | Contribuição mínima | Dificuldade em identificar erros |

## 19. Rubrica do jogo (produto final)

| Critério | Atende plenamente | Atende parcialmente | Não atende |
|---|---|---|---|
| Qualidade matemática | Questões corretas e contextualizadas | Questões corretas mas pouco contextualizadas | Erros matemáticos presentes |
| Usabilidade | Navegação clara em todos os níveis | Alguma confusão pontual | Difícil de usar |
| Feedback pedagógico | Explica o raciocínio ao errar | Explica parcialmente | Apenas indica "errado" |
| Acessibilidade | Contempla múltiplos critérios da seção 17 | Contempla parte deles | Não considera acessibilidade |
| Adequação a diferentes séries | Funciona do 6º ao 9º | Funciona em parte das séries | Restrito a uma série |

## 20. Evidências para a socialização

| Evidência | Por que registrar | O que demonstra |
|---|---|---|
| Fotos dos alunos planejando/programando | Mostra protagonismo real, não só o produto final | Critério "Relevância e Qualidade das Evidências" |
| Vídeo curto (1–4 min) do processo + jogo em uso | Necessário para concorrer ao prêmio | Critérios de vídeo (Narrativa, Evidências do Percurso) |
| Registros escritos dos alunos (planejamento, questões criadas) | Evidencia intencionalidade e autoria estudantil | "Alinhamento Curricular e Intencionalidade" |
| Prints de erros e correções no código/jogo | Mostra o ciclo de melhoria contínua | "Resultados e Reflexão Crítica" |
| Depoimentos curtos de estudantes (com termo de uso de imagem, se identificáveis) | Dá voz aos estudantes sobre o que aprenderam | "Alinhamento e Mediação Pedagógica" |
| Dados simples de aplicação (nº de turmas, feedback dos colegas) | Evidencia impacto além da turma criadora | "Resultados e Reflexão Crítica" |

## 21. Como demonstrar impacto

Comparar percepção dos alunos antes/depois (uma pergunta simples "o que era difícil em Matemática" repetida ao final), registrar quantas turmas usaram o jogo e recolher 2–3 depoimentos objetivos sobre o que aprenderam — sem inflar números não coletados.

## 22. Diferenciais para a socialização

- Protagonismo estudantil documentado etapa a etapa (não apenas o produto final).
- Uso pedagógico real da tecnologia (programação, não só consumo de jogo pronto).
- Erro tratado como parte do processo de aprendizagem, tanto na Matemática quanto na programação.
- Potencial de reaplicação por outros professores e séries.

## 23. Roteiro da apresentação da professora (pitch de 2,5–4 min, conforme o documento)

1. **(20s) Identificação**: nome, URE, escola, tema do Multiplica.
2. **(30s) Problema**: dificuldade real observada em Matemática no 6º ano.
3. **(40s) Prática**: como surgiu a ideia do jogo e o papel do Alura Start.
4. **(40s) Protagonismo**: o que os alunos decidiram e criaram sozinhos.
5. **(40s) Resultados**: como o jogo foi usado por outras turmas e o que mudou.
6. **(30s) Aprendizado da experiência**: o que você, professora, aprendeu mediando o processo.
*(Para a versão de portfólio/vídeo de até 4 min, adicione 30–60s de encerramento com continuidade/próximos passos.)*

## 24. Roteiro para os alunos explicarem o projeto

- "Percebemos que muita gente da nossa turma tinha dificuldade em [conteúdo]."
- "Por isso decidimos criar um jogo para ajudar a praticar de um jeito diferente."
- "A ideia surgiu quando..."
- "Para programar, usamos o Alura Start e aprendemos a usar [conceito, ex.: condicional]."
- "A parte mais difícil foi..."
- "Resolvemos assim..."
- "Aprendemos que..."
- "Outros alunos podem jogar assim: [explicação rápida]."

## 25. Protótipo funcional

Construído como página interativa publicada — ver link ao final da conversa. Contém: tela inicial, seleção de ano/área/nível, perguntas contextualizadas, botão "Me Ajude", feedback pedagógico ao errar, pontuação, progresso e tela de conclusão com opção de jogar novamente.

## 26. Sugestões de melhorias futuras

- Ampliar o banco de questões com contribuições de outras turmas.
- Adicionar registro de progresso do aluno entre sessões (hoje o protótipo reinicia a cada visita).
- Incluir leitura em voz alta das perguntas para acessibilidade.
- Envolver os alunos na criação de um "modo criador de perguntas" dentro do próprio jogo.

## 27. Pontos em aberto — o que só você pode confirmar

- Códigos BNCC exatos por habilidade (indiquei descrição; confirme no Currículo Paulista).
- Se sua turma já usou Alura Start antes (afeta o cronograma real da sequência didática).
- Se pretende gravar o vídeo (obrigatório apenas para concorrer ao Prêmio de Boas Práticas — sem ele, o portfólio ainda é válido para certificação).
- Termos de uso de imagem dos estudantes, caso apareçam identificáveis em fotos/vídeo.

### 27-A. Declaração obrigatória do uso de IA

O documento do Multiplica exige (seção "Especificações de envio das evidências") que qualquer uso de IA na elaboração dos materiais seja **indicado expressamente**, com o momento em que foi usada. Sugestão de texto para o portfólio:

> "A turma utilizou uma ferramenta de Inteligência Artificial como apoio pedagógico durante o desenvolvimento do jogo: para gerar ideias iniciais de enunciados matemáticos contextualizados, para auxiliar na escrita e revisão dos prompts/roteiros do jogo em Scratch, e para apoiar a identificação de erros de lógica durante os testes. As decisões finais de conteúdo, regras e programação foram tomadas pelos próprios estudantes, com mediação da professora."

Isso, além de atender à exigência do edital, reforça o critério "Alinhamento e Mediação Pedagógica" (mostra controle pedagógico sobre a ferramenta) e conecta diretamente com a pauta "IA no dia a dia" do curso.
