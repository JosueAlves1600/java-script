function fatorial(){
    valor=parseInt(document.getElementById('valor').value);
    resp=1;
    i=1;

    do{
        resp = resp*i;
        i++;
    }
    while(i<=valor){
        document.getElementById("resposta").innerHTML = resp;
    }
}

function fatorialFor(){
    valor=parseInt(document.getElementById('valor').value);
    resp=1;
    i=1;
    
    for(i=1;i<=valor;i++){
        resp = resp*i;
    }
    document.getElementById("resposta").innerHTML = resp;
}