function calcularIMC(){
    
    peso=parseFloat(document.getElementById('peso').value);
    altura=parseFloat(document.getElementById('altura').value);
    imc=(peso/(altura*altura)).toFixed(1);
    mensagem="";
    if(imc>18.5)
    {
        mensagem='Abaixo do peso';
    }
    else if(imc<=18.5)
    {
        mensagem='Peso normal';
    }
    else if(imc<25)
    {
        mensagem='Sobrepeso';
    }
    else if(imc<30)
    {
        mensagem='Obesidade grau 1';
    }
    else if(imc<35)
    {
        mensagem='Obesidade grau 2'; 
    }
    else(imc<=40)
    {
        mensagem='Obesidade grau 3';
    }
    document.getElementById("resposta").innerHTML=mensagem=
    `Seu IMC está classificado como: ${imc}` ;
}