const mailDatabase = ['gianni@gmail.com', 'marco@gmail.com', 'luca@gmail.com', 'fabio@gmail.com', 'lorenzo@gmail.com'];
let result = document.querySelector('.result');
let invio = document.getElementById('invio');
let boolean = false;

invio.addEventListener('click', function() {
    boolean = false;
    let userMail = document.getElementById('input-box');
    for (let i = 0; i < mailDatabase.length; i++) {

        if (mailDatabase[i] == userMail.value) {
            boolean = true;
        }
    };
    
    if (boolean == true) {
        console.log('email corretta');
        result.innerHTML = 'EMAIL CORRETTA';
    } else {
        console.log('email sbagliata');
        result.innerHTML = 'HAI SBAGLIATO RIPROVA';
    };
    
});
