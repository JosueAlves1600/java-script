function votar(){
    voto=parseInt(document.getElementById('candidato').value);
    switch (voto){
        case 1:
            alert('Voto no Aluno 1');
            break;
        case 2:
            alert('Voto no Aluno 2');
            break;
        case 3:
            alert('Voto no Aluno 3');
            break;
        default:
            alert('Candidato Inválido!');
            break;
    }
}