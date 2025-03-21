function calcularsalariobruto(){
    
    imposto=0;
    sl=0;
    n1=parseFloat(document.getElementById('n1').value);
    n2=parseFloat(document.getElementById('n2').value);
    sb=n1*n2.toFixed(1);

    if(sb<=5000){
        imposto=sb*0.15;
    }
    else{
        imposto=sb*0.22;
    }
    sl=sb-imposto;
    document.getElementById("resposta").innerHTML=
    `Salário Bruto: R$${sb}<br>Imposto: R$${imposto}<br>
    Salário Líquido: R$${sl}` ;
    
}
    
