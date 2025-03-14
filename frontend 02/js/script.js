function checarIdade(){
    idade=parseInt(document.getElementById('idade').value);
    //valor nulo
    mensagem='';
    //se a idade for maior ou igual a 12
    if(idade>=12){
        mensagem="Acesso liberado!!!";
    }else{
        mensagem="Acesso bloqueado!!! ( ͡° ͜ʖ ͡°) ";
    }
    //o codigo do html está conectato com o do js
    document.getElementById('resposta').innerHTML=mensagem;
}
