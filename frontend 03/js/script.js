function calcularMedia(){
    mensagem='';
    n1=parseFloat(document.getElementById('n1').value);
    n2=parseFloat(document.getElementById('n2').value);
    n3=parseFloat(document.getElementById('n3').value);
    media=((n1+n2+n3)/3).toFixed(1);
    if(media<7){
    mensagem=`Média: ${media}. Reprovado!`
    }else{
    mensagem=`Média: ${media}. Aprovado!`
    }
    document.getElementById('resposta').innerHTML=mensagem;
    }