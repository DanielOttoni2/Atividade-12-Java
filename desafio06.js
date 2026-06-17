let estudante = prompt("Você é estudante? (responda com 'sim' ou 'nao')").toLowerCase();
let idade =Number(prompt("Qual é a sua idade?"));
if ((estudante === "sim") || (idade >= 60)) {
alert("Parabéns! Você tem direito ao desconto da meia-entrada.")} 
else {
alert("Ingresso integral. Você não atende aos requisitos para o desconto.");}