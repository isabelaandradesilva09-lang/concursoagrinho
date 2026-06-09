const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

let valor = 0;

function adicionar(pontos){

  valor += pontos;

  if(valor > 100){
    valor = 100;
  }

  document.getElementById("progresso").style.width = valor + "%";
  document.getElementById("resultado").innerHTML = valor + "%";

  if(valor === 100){
    document.getElementById("resultado").innerHTML =
      "100% - Fazenda Sustentável 🌱";
  }
}

function contador(id, fim, velocidade){

  let atual = 0;

  let intervalo = setInterval(() => {

    atual += Math.ceil(fim / 100);

    if(atual >= fim){
      atual = fim;
      clearInterval(intervalo);
    }

    document.getElementById(id).innerHTML =
      atual.toLocaleString("pt-BR");

  }, velocidade);
}

contador("n1", 15000, 20);
contador("n2", 500000, 15);
contador("n3", 1200, 25);
