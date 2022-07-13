// IIFE: Expresión de función ejecutada inmediatemente

/*
** Este tipo de funciones se ejecutan inmediatamente, 
** sin necesidad de ser llamadas
*/

(function () {
    console.log("Hola mundo");
})();


var result = (function (){
    var a = 15, b = 20;

    return a + b;
})();

console.log(`Resultado: ${result}`);

// doc -> https://developer.mozilla.org/es/docs/Glossary/IIFE