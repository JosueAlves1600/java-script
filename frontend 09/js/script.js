function VerificarVoto(){
    idade=parseFloat(document.getElementById('idade').value);
    nacionalidade=(document.getElementById('nacionalidade').value);
    mensagem="";  
    if(idade>= 16 && nacionalidade == "sim"){
     mensagem="Pode votar!!!!"
    }else{
     mensagem="Não pode votar!!!"
    }
      document.getElementById("resposta").innerHTML=mensagem;
 }