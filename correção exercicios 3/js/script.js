function verSituacao() {
    n1 = parseFloat(document.getElementById('nota1').value);
    n2 = parseFloat(document.getElementById('nota2').value);
    media = (n1 + n2) / 2;
    dadas = parseFloat(document.getElementById('aulasDadas').value);
    assistidas = parseFloat(document.getElementById('aulasAssistidas').value);
    freq = (assistidas / dadas) * 100;
    if (media >= 7 && freq >= 75) {
    document.getElementById("situacao").
    innerHTML = `Aprovado com média ${media} e frequência de ${freq}%`;
    } else {
    document.getElementById("situacao").
    innerHTML = `Retido com média ${media} e frequência de ${freq}%`;
    }
}