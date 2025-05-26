function calculeSeuImc(){
    peso=parseFloat(document.getElementById('peso').value);
    altura=parseFloat(document.getElementById('altura').value);
    Imc=(peso/(altura*altura)).toFixed(1);
    mensagem=""
    if(Imc<18.5){
        mensagem="Abaixo do peso";
    }else if(Imc<=24.9){
        mensagem="peso normal";
    }else if(Imc<=29.9){
        mensagem="Sobrepeso";
    }else{
        mensagem="Obesidade";
    }
    document.getElementById("IMC").innerHTML=`Seu IMC é ${Imc} e esse é seu nivel ${mensagem}`;
}