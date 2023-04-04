// document.writeln('ciao a tutti');
// alert("ciao a tutti");

/*
	selezionare l'elemento con id main-title
	modificare il contenuto dell'elemento
*/

// document.getElementById('main-title').innerHTML = 'l\'auto "della classe"';


// const nome = 'ciao';
// nome = 'Pippo';
// nome = 'Pallino';

// const nome1 = 'ciao a tutti';

// const concatenazione = nome + ' ' + nome1;

// console.log(concatenazione);


// console.log('prima riga');

// let letVar = '5';
// console.log(letVar);


// console.log(varVar);
// var varVar = 10;

// letVar = varVar;

// console.log('latVar', letVar);

// letVar = 'ciao a tutti';

// varVar = null


let number1 = prompt('Dammi un numero'); // '10'
number1 = parseInt(number1); // parseInt('10')  =>  10

let number2 = parseInt(prompt('Dammi un altro numero'));

let sum = parseInt(number1) + parseInt(number2); // '10' + '5'

let myString = `La somma e': ${sum}!`;
console.log(myString);

let myString2 = 'La somma e\': ' + sum + '!';
console.log(myString2);
