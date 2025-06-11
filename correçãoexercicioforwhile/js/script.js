function fatDo() {
    num = parseInt(document.getElementById('fat').value);
    fatorial = 1;
    i = 1;

    do {
       fatorial = fatorial * i;
       i++
    } while (i <= num);
    document.getElementById('resFat').innerHTML = fatorial;

 }

    function fatFOR() {
    num = parseInt(document.getElementById('fat').value);
    fatorial = 1;

    for (i = 1; i <= num; i++) {
        fatorial = fatorial * i;
    }
    document.getElementById('resFat').innerHTML = fatorial;
  }


function SomaWhile() {
    num1 = parseInt(document.getElementById('valor1').value);
    num2 = parseInt(document.getElementById('valor2').value);
    i = num1;
    soma = 0;

    if (num1 < num2) {
        while (i <= num2) {
        soma += i; //soma=soma+i;
        i++; //i=i+1;
    }
    document.getElementById('resSoma').innerHTML = soma;
}
    else{
        document.getElementById('resSoma').innerHTML = 'O primeiro número deve ser menor que o segundo!!!!';
        
    }
 }
    function SomaDo() {
        num1 = parseInt(document.getElementById('valor1').value);
        num2 = parseInt(document.getElementById('valor2').value);
        i = num1;
        soma = 0;

    if (num1 < num2) {
        do {
          soma += i; //soma=soma+i;
          i++; //i=i+1;
       }while (i <= num2);
        document.getElementById('resSoma').innerHTML = soma;
   }
    else{
       document.getElementById('resSoma').innerHTML = 'O primeiro número deve ser menor que o segundo!!!!';

   } 
}
function SomaFOR() {
    num1 = parseInt(document.getElementById('valor1').value);
    num2 = parseInt(document.getElementById('valor2').value);
    soma = 0;

    if (num1 < num2) {
       for (i=num1;i<=num2;i++) {
           soma += i; //soma=soma+i;
    }
           document.getElementById('resSoma').innerHTML = soma;
 }
    else{
        document.getElementById('resSoma').innerHTML = 'O primeiro número deve ser menor que o segundo!!!!';
    
    }
 }


 
 function ContaWhile() {
    num1 = parseInt(document.getElementById('par1').value);
    num2 = parseInt(document.getElementById('par2').value);
    i = num1;
    qtdePares = 0;

    if (num1 < num2) {
       while (i <= num2) {
         if(i%2==0){
            qtdePares++;
    }
    i++;
 }
    document.getElementById('resPares').innerHTML = qtdePares;
 }
    else{
         document.getElementById('resPares').innerHTML = 'O primeiro número deve ser menor que o segundo!!!!';
    
    }
}
function ContaDo() {
    num1 = parseInt(document.getElementById('par1').value);
    num2 = parseInt(document.getElementById('par2').value);
    i = num1;
    qtdePares = 0;

    if (num1 < num2) {
       do {
          if(i%2==0){
            qtdePares++;
        }
        i++;
     }while (i <= num2);
     document.getElementById('resPares').innerHTML = qtdePares;
}
else{
    document.getElementById('resPares').innerHTML = 'O primeiro número deve ser menor que o segundo!!!!';

   }
}
function ContaFOR() {
    num1 = parseInt(document.getElementById('par1').value);
    num2 = parseInt(document.getElementById('par2').value);
    i = num1;
    qtdePares = 0;

    if (num1 < num2) {
       for(i=num1;i<=num2;i++) {
          if(i%2==0){
             qtdePares++;
            }
       }
        document.getElementById('resPares').innerHTML = qtdePares;
    }
    else{
        document.getElementById('resPares').innerHTML = 'O primeiro número deve ser menor que o segundo!!!!';
    
    }
}