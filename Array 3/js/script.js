function buscar(){
 const nomes = ['Ana', 'João', 'Maria'];
 encontrou=false
 busca=document.getElementById('nome').value;
 nomes.forEach((nome) => {
     if(nome==busca){
         encontrou=true;
     }
     //document.writeln(`Olá, ${nome}<br/>`);
 });
 if(encontrou==true){
     alert(`${busca} foi localizado`);
 }else{
     alert(`${busca} não encontrado!`)
    }
}

//const valores = [10,15,7.5];
//const valoresDobrados = valores.map((valor) => valor*2);
//
//document.writeln(valoresDobrados);