function calcular(){
    valor = parseInt(document.getElementById("valor").value);
    resp = '';
    i = 1;

    /* while (i<=10){
        resp += (valor * i).toString() + "<br>";
        i++;
    }*/
    
    do{
        resp += (valor * i).toString() + "<br>";
        i++;
    }while(i<=10);
    document.getElementById("resposta").innerHTML = resp;
    
}

function calcularFor(){
    valor = parseInt(document.getElementById("valor").value);
    resp = '';

    for(i=1;i<=10;i++){
        resp += (valor * i).toString() + "<br>";
    }
    document.getElementById("resposta").innerHTML = resp;
}