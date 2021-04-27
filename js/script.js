// chiedere all'utente il numero di chilometri che vuole percorrere
var distanza = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(distanza);

// chiedere all'utente l'età del passeggero
var eta = parseInt(prompt("Quanti anni hai?"));
console.log(eta);

// calcolare il prezzo totale del viaggio il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzoBase = distanza * 0.21;
console.log(prezzoBase);

// sconto del 20% per i minorenni
// sconto del 40% per gli over 65
var prezzoScontato;
var sconto;
if (eta < 18) {
    sconto = prezzoBase / 100 * 20;
    console.log(sconto);
    prezzoScontato = prezzoBase - sconto;
    console.log(prezzoScontato);
} else if (eta > 65) {
    sconto = prezzoBase / 100 * 40;
    console.log(sconto);
    prezzoScontato = prezzoBase - sconto;
    console.log(prezzoScontato);
} else {
    sconto = 0;
    console.log(sconto);
    prezzoScontato = prezzoBase - sconto;
    console.log(prezzoScontato);
    // document.getElementById("prezzo").innerHTML = prezzoBase
}

// il prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
var prezzoFinale = prezzoScontato.toFixed(2);

document.getElementById("prezzo").innerHTML = prezzoFinale;