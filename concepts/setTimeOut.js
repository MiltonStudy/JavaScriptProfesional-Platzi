/* El método setTimeout(), establece un temporizador que ejecuta una función o una 
** porción de código después de que transcurre un tiempo establecido.
*/

// Ejemplo

function sayHello() {
    console.log("Hola");
}

function timer () {
    setTimeout(sayHello, 1);
    
    for(var i = 0; i < 5; i++) {
        console.log(`i: ${i}`);
    }
}

timer();

// doc -> https://developer.mozilla.org/es/docs/Web/API/setTimeout