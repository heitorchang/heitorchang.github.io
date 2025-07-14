# Prefácio {#secp}

[TOC]

# A estranha história deste livro {#secp_1}

Em janeiro de 1999, eu estava preparando a ensinar um curso introdutório de programação em Java. Eu o tinha ensinado três vezes e estava ficando frustrado. A taxa de fracasso no curso estava muito alta, e até para alunos sucedidos, o nível geral de realizações estava muito baixo.

Um dos problemas que vi era os livros. Eram muito grandes, com demais detalhes desnecessários sobre Java, e faltavam orientações de alto nível sobre como programar. E todos eles sofriam do "efeito do alçapão": começavam fáceis, proseguiam gradualmente, e cerca do capítulo 5, o alçapão se abria. Os alunos se sobrecarregariam de material novo, muito rapidamente, e eu passaria o resto do semestre recolhendo os pedaços.

Duas semanas antes do primeiro dia de aulas, eu resolvi escrever meu próprio livro. Meus objetivos foram:

* Deixá-lo curto. É melhor que os alunos lessem dez páginas do que náo ler 50 páginas.

* Ficar atento ao vocabulário. Tentei minimizar o jargão e definir cada termo ao seu primeiro uso.

* Construir gradativamente. Para evitar alçapões, separei os temas mais difíceis e os separei em sequências de pequenos passos.

* Focar em programar, não na linguagem de programação. Inclui o menor subconjunto útil de Java e deixei o resto de lado.

Precisei de um título, então por capricho, escolhi *Como pensar como um cientista da computação*.

Minha primeira versão foi rudimentar, mas funcionou. Os alunos fizeram a leitura, e entenderam suficiente para que eu pudesse passar o tempo das aulas explicando assuntos difíceis e interessantes, e (mais importante) deixando os alunos praticar.

Lancei o livro sob a GNU Free Documentation License (Licença de 
Documentação Livre GNU), que permite usuários a copiar, modificar, e distribuir o livro.

O que aconteceu depois foi a coisa legal. Jeff Elkner, um professor do ensino médio em Virginia, adotou meu livro e o traduziu em Python. Ele me mandou uma cópia da tradução, e tive a estranha experiência de aprender Python lendo meu próprio livro. Como Green Tea Press, publiquei a primeira versão em Python em 2001.

Em 2003 comecei ensinando na Olin College (uma faculdade de engenharia em Massachusetts), e pude ensinar Python pela primeira vez. O contraste com Java foi impressionante. Alunos passaram por menos dificuldades, aprenderam mais, trabalharam com mais projetos interessantes, e em geral, se divertiram muito mais.

Desde então continuei a desenvolver o livro, corrigindo erros, melhorando alguns dos exemplos, e adicionando material, em particular, exercícios.

O resultado é este livro, agora com o título menos grandioso *Think Python*. Algumas das mudanças são:

* Adicionei uma seção sobre depuração no final de cada capítulo. Essas seções apresentam técnicas gerais para achar e evitar erros, e avisos sobre armadilhas.

* Adicionei mais exercícios, de curtos testes de compreensão a alguns projetos substanciais. A maioria dos exercícios incluem um link à minha solução.

* Adicionei uma série de estudos de caso--exemplos mais compridos com exercícios, soluções, e discussões.

* Expandi a discussão de planos de desenvolvimento e padrões básicos de design.

* Adicionei apêndices sobre depuração e análise de algoritmos.

A segunda edição de *Think Python* tem essas novas características:

* O livro e todo código complementar foi atualizado para Python 3

* Adicionei algumas seções, e mais detalhes na internet, para ajudar iniciantes a começar rodando Python no navegador, para que não tenha que lidar com a instalação de Python até quando quiser.

* No [capítulo 4.1](@ref sec4_1) mudei do meu próprio pacote de gráficos de tartaruga, chamado Swampy, para um módulo Python mais padrão, `turtle`, que é mais fácil de instalar e mais poderoso.

* Adicionei um capítulo novo chamado [As coisinhas boas](@ref sec19), que introduz alguns recursos Python que não são rigorosamente necessárias, mas às vezes úteis.

Espero que curta trabalhando com este livro, e que ele te ajude a aprender a programar e pensar como um cientista da computação, pelo menos um pouco.

Allen B. Downey

Olin College

# Agradecimentos {#secp_2}

Agradeço muito Jeff Elkner, que traduziu meu livro Java em Python, iniciou este projeto, e me introduziu a o que acabou sendo minha linguagem preferida.

Obrigado também a Chris Meyers, que contribuiu a várias seções de *Como Pensar Como Um Cientista da Computação*.

Obrigado ao Free Software Foundation (Fundação para o Software Livre) por desenvolver a GNU Free Documentation License (Licença de Documentação Livre), que fez possível minha colaboração com Jeff e Chris, e a Creative Commons pela licença que estou usando agora.

Obrigado aos editores de Lulu que trabalharam em *Como Pensar Como Um Cientista da Computação*.

Obrigado aos editores de O'Reilly Media que trabalharam em *Think Python*.

Obrigado a todos os alunos que trabalharam em versões anteriores deste livro e todos os colaboradores (listados abaixo) que enviaram correções e sugestões.

# Lista de colaboradores {#secp_3}

Mais de 100 leitores perspicazes e atenciosos enviaram sugestões e correções nos últimos anos. Suas contribuições, e entusiasmo por esse projeto, tem sido uma enorme ajuda.

* Lloyd Hugh Allen enviou uma correção para Seção 8.4.

* Yvon Boulianne enviou uma correção de um erro semântico no Capítulo 5.

* Fred Bremmer enviou uma correção na Seção 8.4.

* Jonah Cohen escreveu scripts Perl para converter o código fonte LaTeX deste livro em HTML belo.

* Michael Conlon enviou uma correção gramática no Capítulo 2 e uma melhoria estilística no Capítulo 1, e iniciou uma discussão nos aspectos técnicos de interpretadores.

* Benoit Girard enviou uma correção de um erro engraçado na Seção 5.6.

* Courtney Gleason e Katherine Smith escreveram `horsebet.py`, que foi usado como um estudo de caso numa versão anterior do livro.

* Lee Harr enviou mais correções do que temos espaço aqui para listá-los, e realmente deve ser listado como um dos principais editores do texto.

* James Kaylin é um aluno usando o livro. Ele enviou numerosas correções

* David Kershaw consertou a função defeituosa `catTwice` na Seção 3.10.

* Eddie Lam enviou numerosas correções nos Capítulos 1, 2, e 3. Ele também corrigiu o Makefile para que criasse um índice na primeira vez que ele é executado, e ajudou instalar um esquema de versionamento.

* Man-Yong Lee enviou uma correção ao código exemplo na Seção 2.4.

* David Mayo indicou que a palavra "inconscientemente" no Capítulo 1 devia ser alterada a "subconscientemente".

* Chris McAloon enviou várias correções para Seções 3.9 e 3.10.

* Matthew J. Moelter tem sido um colaborador há muito tempo que enviou numerosas correções e sugestões pro livro.

* Simon Dicon Montford indicou a falta da definição de uma função e vários erros de digitação no Capítulo 3. Ele também encontrou erros na função `increment` no Capítulo 13.

* John Ouzts corrigiu a definição de `return value` no Capítulo 3.

* Kevin Parks enviou comentários valiosos e sugestões para como melhorar a distribuição do livro.

* David Pool enviou uma correção de um erro de digitação no glossário do Capítulo 1, bem como amáveis palavras de incentivo.

* Michael Schmitt enviou uma correção no capítulo de arquivos e exceções.

* Robin Shaw apontou um erro na Seção 13.1, onde a função `printTime` foi usada no exemplo sem ter sido definida.

* Paul Sleigh encontrou um erro no Capítulo 7 e um erro no script Perl de Jonah Cohen que gera HTML de LaTeX.

* Craig T. Snydal está provando o text em um curso em Drew University. Ele tem contribuido várias valiosas sugestões e correções.

* Ian Thomas e seus alunos estão usando o texto em um curso de programação. Eles são os primeiros a testar os capítulos na segunda metade do livro, e fizeram inúmeras correções e sugestões.

* Keith Verheyden enviou uma correção no Capítulo 3.

* Peter Winstanley nos informou de um antigo erro de nosso Latim no Capítulo 3.

* Chris Wrobel corrigiu código no capítulo sobre entrada e saída de arquivos e exceções.

* Moshe Zadka contribuiu inestimavelmente a este projeto. Além de escrever o primeiro esboço do capítulo sobre Dicionários, ele providenciou orientações contínuas nas primeiras etapas do livro.

* Christoph Zwerschke enviou várias correções e sugestões pedagógicas, e explicou a diferença entre *gleich* e *selbe*.

* James Mayer nos enviou um monte de erros de soletração e digitação, incluindo dois na lista de colaboradores. 

* Hayden McAfee encontrou uma inconsistência entre dois exemplos que poderia causar confusão.

* Angel Arnal pertence a um time internacional de tradutores trabalhando na versão em espanhol do texto. Ele também encontrou vários erros na versão em inglês.

* Tauhidul Hoque e Lex Berezhny criaram as ilustrações no Capítulo 1 e melhoraram muitas das outras ilustrações. 

* Dr. Michele Alzetta encontrou um erro no Capítulo 8 e enviou alguns comentários pedagógicos interessantes e sugestões sobre Fibonacci e Old Maid (um jogo de cartas).

* Andy Mitchell encontrou um erro de digitação no Capítulo 1 e um exemplo errado no Capítulo 2.

* Kalin Harvey sugeriu uma clarificação no Capítulo 7 e encontrou alguns erros de digitação.

* Christopher P. Smith encontrou vários erros de digitação e nos ajudou a atualizar o livro para Python 2.2.

* David Hutchins encontrou um erro de digitação no Prefácio.

* Gregor Lingl ensina Python num colégio em Vienna, Áustria. Está trabalhando em uma tradução alemã do livro, e encontrou alguns erros graves no Capítulo 5.

* Julie Peters encontrou um erro de digitação no Prefácio.

* Florin Oprina melhorou `makeTime` e corrigiu `printTime` e um belo erro de digitação.

* D. J. Webre sugeriu uma clarificação no Capítulo 3.

* Ken achou um monte de erros nos Capítulos 8, 9, e 11.

* Ivo Wever encontrou um erro de digitação no Capítulo 5 e sugeriu uma clarificação no Capítulo 3.

* Curtis Yanko sugeriu uma clarificação no Capítulo 2.

* Ben Logan encontrou diversos erros de digitação e problemas em converter o livro em HTML.

* Jason Armstrong viu a palavra que faltava no Capítulo 2.

* Louis Cordier encontrou um local no Capítulo 16 onde o código não correspondia ao texto.

* Brian Cain sugeriu várias clarificações nos Capítulos 2 e 3.

* Rob Black enviou várias correções, incluindo algumas mudanças para Python 2.2.

* Jean-Philippe Rey da Ecole Centrale Paris enviou diversos patches, incluindo algumas atualizações para Python 2.2 e outras melhorias atenciosas.

* Jason Mader de George Washington University fez diversas sugestões e correções.

* Jan Gundtofte-Bruun nos lembrou que *a error* é *an error*.

* Abel David e Alexis Dinno nos lembrou que o plural de *matrix* é *matrices*, e não *matrixes*. Esse erro estava no livro por anos, mas dois leitores com os mesmos iniciais nos informaram no mesmo dia. Bizarro.

* Charles Thayer nos incentivou a eliminar os ponto e vírgulas que colocamos no final de algumas instruções e arrumar nosso uso de "argumento" e "parâmetro".

* Roger Sperberg apontou uma porção de lógica perversa no Capítulo 3.

* Sam Bull apontou um parágrafo confuso no Capítulo 2.

* Andrew Cheung apontou duas ocorrências de `use` antes de `def`.

* C. Corey Capel descobriu a palavra que faltava na Terceira Teorema de Depuração e um erro de digitação no Capítulo 4.

* Alessandra ajudou a esclarecer um pouco de confusão sobre o Turtle (tartaruga).

* Wim Champagne achou uma falha do cérebro num exemplo de dicionário.

* Douglas Wright apontou um problema com divisão inteira em `arc`.

* Jared Spindor achou entulho no final de uma sentença.

* Lin Peiheng enviou diversas sugestões muito úteis.

* Ray Hagtvedt encontrou dois erros e um nem-tanto-um-erro.

* Torsten Hübsch apontou uma inconsistência em Swampy.

* Inga Petuhhov corrigiu um exemplo no Capítulo 14.

* Arne Babenhauserheide enviou várias correções úteis.

* Mark E. Casida é é bom em perceber palavras repetidas.

* Scott Tyler preencheu uma que estava faltando. E depois enviou um monte de correções.

* Gordon Shephard enviou várias correções, tudo em emails separados.

* Andrew Turner descobriu um erro no Capítulo 8.

* Adam Hobart corrigiu um problema com divisão inteira em `arc`.

* Daryl Hammond e Sarah Zimmerman indicaram que eu servi `math.pi` cedo demais. E Zim descobriu um erro de digitação.

* George Sass encontrou um erro na seção de Depuração.

* Brian Bingham sugeriu o exercício `exrotatepairs`.

* Leah Engelbert-Fenton apontou que eu usei `tuple` como um nome de variável, contrário a minha própria recomendação. E depois achou vários erros de digitação e um `use` antes de `def`.

* Joe Funke descobriu um erro de digitação.

* Chao-chao Chen encontrou uma inconsistência no exemplo de Fibonacci.

* Jeff Paine sabe a diferença entre espaço e spam.

* Lubos Pintes encontrou um erro de digitação.

* Gregg Lind e Abigail Heithoff sugeriram o exercício `checksum`.

* Max Hailperin enviou diversas correções e sugestões. Max é um dos autores do extraordinário *Concrete Abstractions* (Abstrações Concretas), que você poderá querer ler quando terminar este livro.

* Chotipat Pornavalai encontrou um erro numa mensagem de erro.

* Stanislaw Antol enviou uma lista de sugestões muito úteis.

* Eric Pashman enviou diversas correções para Capítulos 4-11.

* Miguel Azevedo encontrou alguns erros de digitação.

* Jianhua Liu enviou uma longa lista de correções.

* Nick King encontrou uma palavra que faltava.

* Martin Zuther enviou uma longa lista de sugestões.

* Adam Zimmerman encontrou uma inconsistência na minha instância de `instance` e muitos outros erros.

* Ratnakar Tiwari sugeriu uma nota de rodapé para explicar triângulos degenerados.

* Anurag Goel sugeriu uma outra solução para `is_abecedarian` e enviou umas outras correções adicionais. E ele sabe soletrar Jane Austen.

* Kelli Kratzer descobriu um dos erros de digitação.

* Mark Griffiths apontou um exemplo confuso no Capítulo 3.

* Roydan Ongie encontrou um erro na minha implementação do método de Newton.

* Patryk Wolowiec me ajudou com um problema na versão HTML.

* Mark Chonofsky me informou de uma palavra-chave nova em Python 3.

* Russell Coleman me ajudou com a geometria.

* Wei Huang descobriu vários erros de digitação.

* Karen Barber descobriu o erro de digitação mais antigo do livro.

* Nam Nguyen achou um erro de digitação e indicou que usei o padrão Decorador mas não o referi por nome.

* Stéphane Morin enviou várias correções e sugestões.

* Paul Stoop corrigiu um erro de digitação em `uses_only`.

* Eric Bronner apontou uma confusão na discussão de ordem de operações.

* Alexandros Gezerlis estabeleceu um novo padrão pela quantidade e qualidade de sugestões que enviou. Estamos profundamente gratos!

* Gray Thomas sabe seu lado direito do esquerdo.

* Giovanni Escobar Sosa enviou uma longa lista de correções e sugestões.

* Alix Etienne corrigiu um dos URLs.

* Kuang He achou um erro de digitação.

* Daniel Neilson corrigiu um erro sobre a ordem de operações.

* Will McGinnis observou que `polyline` foi definido diferentemente em dois lugares.

* Swarup Sahoo acrescentou um ponto e vírgula que faltava.

* Frank Hecker indicou um exercício que estava subespecificada e alguns links quebrados.

* Animesh B me ajudou a arrumar um exemplo confuso.

* Martin Caspersen achou dois erros de arredondamento.

* Gregor Ulm enviou várias correções e sugestões.

* Dimitrios Tsirigkas sugeriu que eu esclarecesse um exercício. 

* Carlos Tafur enviou uma página de correções e sugestões.

* Martin Nordsletten achou um erro numa solução de um exercício.

* Lars O. D. Christensen achou uma referência quebrada.

* Victor Simeone achou um erro de digitação.

* Sven Hoexter apontou que um variável chamado `input` ofusca uma função builtin.

* Viet Le achou um erro de digitação.

* Stephen Gregory indicou o problema com `cmp` em Python 3.

* Matthew Shultz me informou sobre um link quebrado.

* Lokesh Kumar Makani me informou sobre alguns links quebrados e algumas mudanças em mensagens de erro.

* Ishwar Bhat corrigiu minha declaração do último teorema de Fermat.

* Brian McGhie sugeriu uma clarificação.

* Andrea Zanella traduziu o livro em italiano, e enviou diversas correções no caminho.

* Muitos, muitos agradecimentos a Melissa Lewis e Luciano Ramalho por excelentes comentários e sugestões para a segunda edição.

* Obrigado a Harry Percival de PythonAnywhere pela sua ajuda a levar pessoas a rodar Python num navegador.

* Xavier Van Aubel fez várias correções úteis na segunda edição.

[Próxima página >>](@ref sec1)
