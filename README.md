<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agro Forte, Futuro Sustentável</title>

  <link rel="stylesheet" href="style.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>

<header>
  <nav class="navbar">
    <div class="logo">
      🌱 Agro Forte
    </div>

    <ul class="menu">
      <li><a href="#inicio">Início</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#beneficios">Benefícios</a></li>
      <li><a href="#simulador">Simulador</a></li>
    </ul>

    <button id="menu-btn">☰</button>
  </nav>
</header>

<section id="inicio" class="hero">

  <div class="hero-content">
    <h1>Agro Forte, Futuro Sustentável</h1>

    <p>
      Equilíbrio entre produção agrícola e preservação ambiental.
    </p>

    <a href="#sobre" class="btn">
      Saiba Mais
    </a>
  </div>

</section>

<section id="sobre" class="sobre">

  <h2>Sobre o Concurso</h2>

  <p>
    O Serviço Nacional de Aprendizagem Rural (SENAR-PR) e a Secretaria
    de Estado da Educação (SEED-PR) promovem o Concurso de Programação
    com o tema:
  </p>

  <h3>
    "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"
  </h3>

  <p>
    A proposta busca incentivar soluções tecnológicas que contribuam para
    uma agricultura produtiva, moderna e ambientalmente responsável.
  </p>

</section>

<section id="beneficios" class="cards">

  <div class="card">
    <div class="icon">🚜</div>
    <h3>Tecnologia</h3>
    <p>
      Agricultura de precisão para aumentar a produtividade.
    </p>
  </div>

  <div class="card">
    <div class="icon">💧</div>
    <h3>Uso da Água</h3>
    <p>
      Sistemas inteligentes reduzem desperdícios.
    </p>
  </div>

  <div class="card">
    <div class="icon">🌳</div>
    <h3>Preservação</h3>
    <p>
      Conservação do solo, matas e biodiversidade.
    </p>
  </div>

  <div class="card">
    <div class="icon">🌎</div>
    <h3>Futuro</h3>
    <p>
      Produção sustentável para as próximas gerações.
    </p>
  </div>

</section>

<section id="simulador" class="simulador">

  <h2>Simulador de Sustentabilidade</h2>

  <p>
    Escolha práticas sustentáveis e veja o índice aumentar.
  </p>

  <div class="opcoes">

    <button onclick="adicionar(25)">
      Irrigação Inteligente
    </button>

    <button onclick="adicionar(20)">
      Energia Solar
    </button>

    <button onclick="adicionar(30)">
      Preservar Nascentes
    </button>

    <button onclick="adicionar(25)">
      Plantio Sustentável
    </button>

  </div>

  <div class="barra">
    <div id="progresso"></div>
  </div>

  <h3 id="resultado">0%</h3>

</section>

<section class="estatisticas">

  <div class="numero">
    <h2 id="n1">0</h2>
    <p>Árvores Preservadas</p>
  </div>

  <div class="numero">
    <h2 id="n2">0</h2>
    <p>Litros de Água Economizados</p>
  </div>

  <div class="numero">
    <h2 id="n3">0</h2>
    <p>Propriedades Sustentáveis</p>
  </div>

</section>

<footer>

  <h3>Concurso de Programação SENAR-PR e SEED-PR</h3>

  <p>
    Agro Forte, Futuro Sustentável
  </p>

</footer>

<script src="script.js"></script>

</body>
</html>
