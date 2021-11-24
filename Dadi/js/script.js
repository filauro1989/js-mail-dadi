// dichiaro le variabili
let button = document.querySelector('.tira-dadi');
let resultBox = document.querySelector('.result-box');
let userBox = document.getElementById('user-box');
let pcBox = document.getElementById('pc-box');

// apro la funzione al click del button
button.addEventListener('click', function() {
    // dichiaro variabili numeriche per i dadi
    let dadoUtente = Math.floor(Math.random() * 6) + 1;
    let dadoPc = Math.floor(Math.random() * 6) + 1;
    // pulisco il box risultato
    document.getElementById("risultato").innerHTML = '';
    // inserisco nei box i tiri di dado
    userBox.innerHTML = dadoUtente;
    pcBox.innerHTML = dadoPc;

    // apro la condizione
    if (dadoUtente > dadoPc) {
        console.log('Bravo, hai vinto!');
        const result = document.createTextNode("Hai vinto!");
        resultBox.append(result);

    } else if (dadoUtente < dadoPc) {
        console.log('Peccato, hai perso!');
        const result = document.createTextNode("Hai perso!");
        resultBox.append(result);
    } else {
        console.log('Pareggio!');
        const result = document.createTextNode("Pareggio!");
        resultBox.append(result);
    }
    console.log(dadoUtente);
    console.log(dadoPc);

})



