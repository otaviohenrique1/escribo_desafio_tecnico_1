const formulario = document.getElementById("formulario");
const inputNumero = document.getElementById("input-numero");
const btnLimpar = document.getElementById("btn-limpar");
const resultadoSpan = document.getElementById("resultado");

function somatorioNumero(numero) {
  let soma = 0;
  for (let i = 0; i < numero; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      soma += i
    }
  }
  return soma;
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let numero = inputNumero.value;
  let resultado = somatorioNumero(numero);
  resultadoSpan.innerHTML = resultado;
});

btnLimpar.addEventListener("click", () => {
  resultadoSpan.innerHTML = "0";
});