// Mail:
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creo un array contenente l'email dei soggetti invitati
const invitatiEmailList = ["invitato1@festa.it", "invitato2@festa.it", "invitato3@festa.it", "invitato4@festa.it", "invitato5@festa.it", "invitato6@festa.it"];

console.log(invitatiEmailList);

// creo il prompt per far inserire all'user la sua email
const emailUser = prompt("Inserisci la tua email, così controlleremo se fai parte degli invitati");

console.log(emailUser);

// creo la variabile per confermare la presenza dell'email all'interno della lista
let seiPresente = false;

// creo il ciclo per controllare la presenza dell'email inserita dall'user nella lista degli invitati

for (let i = 0; i < invitatiEmailList.length; i ++) {

    if (emailUser === invitatiEmailList[i]) {

        seiPresente = true;

        console.log(seiPresente);
    } 

    console.log(i);

}

if (seiPresente == true) {

    console.log("Fai parte degli invitati alla festa.");

} else if (seiPresente == false) {

    console.log("Non fai parte degli invitati alla festa.");

}