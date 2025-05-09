function verificacaodelados(){
    
    p1=parseFloat(document.getElementById('p1').value);
    p2=parseFloat(document.getElementById('p2').value);
    p3=parseFloat(document.getElementById('p3').value);
    mensagem="";

    if(p1 === p2 && p2 === p3)
    {
       mensagem="O triângulo é equilátero";
    }
    else if((p1 === p2 && p1 !== p3) || (p1 === p3 && p1 !== p2) || (p2 === p3 && p2 !== p1))
    {
       mensagem="O triângulo é isósceles";
    }
    else
    {
       mensagem="O triângulo é escaleno";
    }

    document.getElementById("resposta").innerHTML=mensagem;
}