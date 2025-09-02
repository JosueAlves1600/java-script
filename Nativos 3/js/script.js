//data=new Date('aug/8/1945 11:33');
data=new Date(1986,4,24,8,33); //ano,mes,dia,hora,minuto
data=new Date();
alert(`Hora local ${data.getHours()} -
Hora Universal ${data.getUTCHours()}`);