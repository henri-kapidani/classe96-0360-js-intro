// Salutare: chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>"

/*
	chiedere all'utente il nome con un prompt e mettere il valore nella variabile userName
	selezionare lo span che deve contenere il nome
	mettere nello span il nome dell'utente
*/

const userName = prompt('Come ti chiami?');
const age = prompt('Quanti anni hai?');

const elementSpan = document.getElementById('name');

elementSpan.innerHTML = userName;
