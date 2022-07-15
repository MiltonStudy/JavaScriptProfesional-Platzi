/*
** Funciones de flecha
** doc -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

// funciones convencionales
const result = function (a, b) {
    return a + b;
}

console.log(result(5, 6));


/*
** arrow functions, de una sola linea, tienen el return explicito
** por lo cual no es necesario especificarlo
*/
const resultOneLine = (a, b) => a + b;

console.log(resultOneLine(11,23));


/*
** arrow functios, mas complejas, dondel el cuerpo de la función tiene mas de una linea
** es este tipo de funciones si es necesario especificar el return
*/
const resultComplete = (a, b) => {

    if(a > b) {
        console.log(`El argumento a: ${a}, es mayor que el argumento b: ${b}`);
        return true;
    } else {
        console.log(`El argumento b: ${b}, es mayor que el argumento a: ${a}`);
        return false;
    }
}

resultComplete(22, 17);


/*
** mas ejemplos, usando funciones de arreglos
*/

// funcion tradicional
var encuentraPais = paises.find(function(pais){
	return pais.nombrePais === "Argentina"
});

// arrow function
var encuentraPais = paises.find( (pais) => {
	return pais.nombrePais === "Argentina"
});