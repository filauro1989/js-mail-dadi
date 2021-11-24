let userMail = document.getElementById('input-box');

const mailDatabase = ['gianni@gmail.com', 'marco@gmail.com', 'luca@gmail.com', 'fabio@gmail.com', 'lorenzo@gmail.com'];

let invio = document.getElementById('invio');
let boolean = false;

invio.addEventListener('click', function() {  
    console.log(userMail.value);
    for (let i = 0; i < mailDatabase.lenght; i++) {
        if (mailDatabase[i] == userMail.value) {
            boolean = true;
            console.log(boolean);
        }
    }
    
    if (boolean == true) {
        console.log('email corretta');
    } else {
        console.log('email sbagliata');
    }
    
});
console.log(boolean);