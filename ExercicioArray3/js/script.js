// Exercício 1: Multiplicar os números por 2
vetor1 = [];
vetor1Modificado = [];
botao1 = document.getElementById("adicionarNumero1");

function adicionarNumero1() {

  entrada1 = document.getElementById("entradaArray1");
  numero = parseInt(entrada1.value);
  vetor1.push(numero);
  entrada1.value = "";

  if (vetor1.length >= 5) {
    botao1.disabled = true; // Desabilita o botão após 5 entradas
    vetor1Modificado = vetor1.map((numero) => numero * 2);
    document.getElementById("saidaEx1").innerHTML = vetor1Modificado;
  }
}

// Exercício 2: Converter de Celsius para Fahrenheit

vetor2 = [];
vetor2Modificado = [];
botao2 = document.getElementById("adicionarTemperatura2");

function adicionarTemperatura2() {

  entrada2 = document.getElementById("entradaArray2");
  temperaturaCelsius = parseFloat(entrada2.value);
  vetor2.push(temperaturaCelsius);
  entrada2.value = "";

  if (vetor2.length >= 5) {
    botao2.disabled = true; // Desabilita o botão após 5 entradas
    vetor2Modificado = vetor2.map((celsius) => celsius * (9 / 5) + 32);
    document.getElementById("saidaEx2").innerHTML = vetor2Modificado;
  }
}
