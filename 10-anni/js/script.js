// chiediamo all'utente la sua età e comunichiamo l'anno di nascita

/*
	chiedere all'utente quanti anni ha e mettere il valore nella variabile age
	calcolare l'anno di nascita: 2023 - age e metterlo nella variabile birthYear
	mostrare all'utente il risultato
*/

const age = parseInt(prompt('Quanti anni hai?'));
const birthYear = 2023 - age;
// alert(`Sei nato nel: ${birthYear}`);
document.getElementById('result').innerHTML = birthYear;
