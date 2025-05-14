function verTriangulo() {
    l1 = parseInt(document.getElementById("ladoA").value);
    l2 = parseInt(document.getElementById("ladoB").value);
    l3 = parseInt(document.getElementById("ladoC").value);
    //Checar se os valores formam um triangulo
    if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2) {
    if (l1 == l2 && l2 == l3) {
    document.getElementById("saida").innerHTML = "Triângulo Equilátero.";
    } else if (l1 != l2 && l1 != l3 && l2 != l3) {
    document.getElementById("saida").innerHTML = "Triângulo Escaleno.";
    } else {
    document.getElementById("saida").innerHTML = "Triângulo Isósceles.";
    }
    } else {
    document.getElementById("saida").innerHTML =
    "Os valores informados não formam um triângulo.";
    }
    }