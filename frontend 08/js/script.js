function VerificarVoto(){
    idade=parseFloat(document.getElementById('idade').value);
    brasileiro=(document.getElementById('brasileiro').value);
    mensagem="";
    
    
  
    if(idade>= 16 && brasileiro == "sim"){
     mensagem="Pode votar!!!!"
    
    }else{
     mensagem="Não pode votar!!!"
    }
    
    
      document.getElementById("resposta").innerHTML=mensagem;
 }