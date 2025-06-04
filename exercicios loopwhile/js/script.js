function fatorial(){
valor=parseInt(document.getElementById('valor').value);
resp=1;
i=1;
while(i<=valor){
resp=resp*i;
i++;
}
document.getElementById('resposta').innerHTML=resp;
}
