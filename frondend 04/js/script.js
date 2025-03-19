function calcularsalariobruto(){
    mensagem='';
    n1=parseFloat(document.getElementById('n1').value);
    n2=parseFloat(document.getElementById('n2').value);
    salarioBruto=(n1*n2).toFixed(1);
    mensagem=`seu salario bruto: ${salarioBruto}`;
    document.getElementById('resposta').innerHTML=mensagem;
}
    if(media<5000){
        impostomenor=(salarioBruto%15);
        mensagem=`Imposto: ${media}. Imposto menor que 5000!`
        }else{
            impostomaior=(salarioBruto%22);
        mensagem=`Imposto: ${media}. Imposto maior que 5000!`
}
{
    
}


