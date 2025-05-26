function calcular() {
    Carros = parseInt(document.getElementById('Carros').value);
    percurso = parseInt(document.getElementById('percurso').value);
    Semana = parseInt(document.getElementById('Semana').value);
    Hora = parseInt(document.getElementById('Hora').value);
    valor = 0;
    switch (Carros) {
        case 1:
            if ((Semana >= 2 && Semana <= 6) && ((Hora >= 6 && Hora <= 10) || (Hora >= 17 && Hora <= 20))) {
                valor = percurso * 2.5;
                valor += valor * 0.15;
            } else {
                valor = percurso * 2.5;
            }
            if (Hora >= 0 && Hora <= 6) {
                valor += valor * 0.2;
            }
            if ((Semana === 7 || Semana === 1) && (Hora >= 15 && Hora <= 17)) {
                valor -= valor * 0.1;
            }
            if (percurso >= 100) {
                valor += 50;
            }
            break;
        case 2:
            if ((Semana >= 2 && Semana <= 6) && ((Hora >= 6 && Hora <= 10) || (Hora >= 17 && Hora <= 20))) {
                valor = percurso * 4.5;
                valor += valor * 0.15;
            } else {
                valor = percurso * 4.5;
            }
            if (Hora >= 0 && Hora <= 6) {
                valor += valor * 0.2;
            }
            if ((Semana === 7 || Semana === 1) && (Hora >= 15 && Hora <= 17)) {
                valor -= valor * 0.1;
            }
            if (percurso >= 100) {
                valor += 50;
            }
            break;
        case 3:
            if ((Semana >= 2 && Semana <= 6) && ((Hora >= 6 && Hora <= 10) || (Hora >= 17 && Hora <= 20))) {
                valor = percurso * 7.8;
                valor += valor * 0.15;
            } else {
                valor = percurso * 7.8;
            }
            if (Hora >= 0 && Hora <= 6) {
                valor += valor * 0.2;
            }
            if ((Semana === 7 || Semana === 1) && (Hora >= 15 && Hora <= 17)) {
                valor -= valor * 0.1;
            }
            if (percurso >= 100) {
                valor += 50;
            }
            break;
        default:
            break;
    }
    document.getElementById("resposta").innerHTML = `O valor da sua viagem será de R$${valor.toFixed(2)}`;
}