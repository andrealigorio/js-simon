$(document).ready(function(){

    var simonNumbers = 5;
    var simonArray = [];
    var userNumber;
    var userArray = [];
    var trueArray = [];

    /* Genero 5 numeri random da 1 a 100 e controllo che non si ripetano */
    while (simonArray.length < simonNumbers) {
        var number = randomNumber(1,100);
        if (!isInArray(simonArray, number))
        simonArray.push(number);
    }
    /* Con un ciclo for stampo i numeri generati */
    for ( var i = 0; i < simonArray.length; i++) {
        document.getElementById("numbers").innerHTML += " " + simonArray[i];
    }
    /* Utilizzo un primo setTimeout che nasconde i numeri
    perchè inserendo tutto in uno si hanno problemi con google chrome
    visto che non renderizza la pagina prima dell'inserimento tramite prompt */
    setTimeout(function() {
        $("#numbers").hide();
    }, 5000); /* DIfficoltà di 5 secondi perchè con 30 mi prende il sonno :) */

    /* setTimeout che termina un secondo dopo la scomparsa dei numeri */
    setTimeout(function() {
        /* Controllo che i valori inseriti siano numeri */
        while (userArray.length < simonNumbers) {
            userNumber = parseInt(prompt("Inserisci un numero della lista"));
            if (isInArray(userArray, userNumber)) {
                alert("Numero già inserito... ripetere!");
            } else if (isNaN(userNumber)) {
                alert("Inserire un valore numerico!");
            } else if ((userNumber > 100) || (userNumber < 1)) {
                alert("Inserisci un numero da 1 a 100!");
            } else {
                /* pusho i numeri inseriti dall'utente nell'array utente
                e nello stesso tempo controllo se corrispondono ai numeri
                contenuti nell'array simon */
                userArray.push(userNumber);
                for (var i = 0; i < simonNumbers; i++) {
                    if (userNumber == simonArray[i]) {
                        trueArray.push(userNumber);
                    }
                }
            }
        }
        /* Rifaccio comparire i numeri e mostro i risultati */
        $("#numbers").show();

        for ( var i = 0; i < trueArray.length; i++) {
            document.getElementById("result").innerHTML += " " + trueArray[i];
        }
        if (trueArray.length < simonNumbers) {
            $(".text").text("Hai ricordato " + trueArray.length + " numeri");
        } else {
            $(".text").text("Complimenti hai ricordato tutti i numeri");
        }
    
    }, 6000);

});

/* Funzioni utilizzate */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isInArray(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false;
}