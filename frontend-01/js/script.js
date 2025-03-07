function somar(){
    n1=parseFloat(document.getElementById("txtN1").value);
    n2=parseFloat(document.getElementById("txtN2").value);
    s=n1+n2;
    document.getElementById("resposta").innerHTML=`A soma é ${s}`
}
function subtração(){
    n1=parseFloat(document.getElementById("txtN1").value);
    n2=parseFloat(document.getElementById("txtN2").value);
    sub=n1-n2;
    document.getElementById("resposta").innerHTML=`A subtração é ${sub}`
    }
function divisão(){
     n1=parseFloat(document.getElementById("txtN1").value);
     n2=parseFloat(document.getElementById("txtN2").value);
     div=n1/n2;
     document.getElementById("resposta").innerHTML=`A divisão é ${div}`
    }
    function multiplicação(){
        n1=parseFloat(document.getElementById("txtN1").value);
        n2=parseFloat(document.getElementById("txtN2").value);
        mult=n1*n2;
        document.getElementById("resposta").innerHTML=`A multiplicação é ${mult}`
       }