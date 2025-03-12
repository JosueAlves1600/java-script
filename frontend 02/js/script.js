function checarIdade(){
    idade=parseInt(document.getElementById('idade').value);
    //valor nulo
    mensagem='';
    //se a idade for maior ou igual a 12
    if(idade>=12){
        mensagem="Acesso liberado!!!";
    }
    //o codigo do html está conectato com o do js
    document.getElementById('resposta').innerHTML=mensagem;

    if(idade<12){
        mensagem="Acesso bloqueado!!! ( ͡° ͜ʖ ͡°) ";
    }
    document.getElementById('resposta').innerHTML=mensagem;
}