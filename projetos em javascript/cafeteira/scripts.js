// logica - passo a passo
// 1 - Saber quando o usuario clicou no botão(X)
// 2 - mudar o posicionamento do modal
// fazer a máscara ficar visível
// quando clicar na mascara fechar o modal

const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-2");

function MostrarModal() {
  modal.style.left = "50%";
  mascara.style.visibility = "visible";
}

function esconderModal() {
  modal.style.left = "-30%";
  mascara.style.visibility = "hidden";
}
