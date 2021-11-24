let dadoUtente = Math.floor(Math.random() * 6) + 1;
let dadoPc = Math.floor(Math.random() * 6) + 1;

if (dadoUtente > dadoPc) {
    console.log('Bravo, hai vinto!');
} else if (dadoUtente < dadoPc) {
    console.log('Peccato, hai perso!');
} else {
    console.log('Pareggio!');
}
console.log(dadoUtente);
console.log(dadoPc);
