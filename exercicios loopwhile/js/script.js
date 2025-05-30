function calcular(){
    Fatorial=parseInt(document.getElementById('Fatorial').value);
    resp=1;
    i=1;
   
 
    while(i<=Fatorial){
        resp=resp*i
        i++;
   }
   document.getElementById('resposta').innerHTML=resp
}