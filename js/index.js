const botaoAlterarTema = document.getElementById("botao__alterar__tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".cabecalho__botao__sol");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "/assets/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "/assets/moon.png");
  }
});
