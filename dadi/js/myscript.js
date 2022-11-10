// Gioco dei dadi:
// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// genero il numero random dell'user
let numUser = Math.floor(Math.random() * 6) + 1;

console.log( "Il tuo numero " + numUser);

// genero il numero random del pc 
let numPc = Math.floor(Math.random() * 6) + 1;

console.log("Il numero del pc " + numPc);

// imposto le condizioni di vittoria
if ( numUser < numPc ) {

    console.log("il " + numPc + " è maggiore di " + numUser + " ,Vince il pc!");

} else if ( numUser > numPc ) {

    console.log("il " + numUser + " è maggiore di " + numPc + " ,Hai Vinto!");

} else if ( numUser == numPc ) {

    console.log("il " + numUser + " è uguale a " + numPc + " è un pareggio!")

}