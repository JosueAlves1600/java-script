alert('Vamos calcular o juros simples!');
principal=parseFloat(prompt('Coloque o Valor principal'));
taxa=parseFloat(prompt('Coloque o Valor da taxa'));
tempojuros=parseFloat(prompt('Coloque o Valor do tempo em anos do juros'));
jurosimples=(principal*taxa/100*tempojuros);
montante=jurosimples+principal;
alert(`O Valor do juros simples é: ${jurosimples}`);
alert(`O Valor do montante é: ${montante}`);