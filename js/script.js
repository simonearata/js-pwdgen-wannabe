var nome = prompt('Come ti chiami?');
var cognome = prompt('Qual è il tuo cognome?');
var colore = prompt('Colore preferito?');
var tutto = nome + cognome + colore + "21";
document.getElementById('msgPass').innerHTML = tutto;