/*
** Los generadores son funciones especiales, pueden pausar su ejecución y luego volver 
** al punto donde se quedaron recordando su scope.
*/

/*
** Algunas de sus características:
 - Los generadores regresan una función.
 - Empiezan suspendidos y se tiene que llamar next para que ejecuten.
 - Regresan un value y un boolean done que define si ya terminaron.
 - yield es la instrucción que regresa un valor cada vez que llamamos a next 
 y detiene la ejecución del generador.
*/

function* simpleGenerator() {
    console.log("START....");
    yield 1;
    yield 2;
    console.log("END");
}

const genOne = simpleGenerator();

// llamando a next() para ejecutar la funcion
gen.next();

// fibonacci con una funcion generadora
function* fibonacci() {
    let a = 0;
    let b = 1;
    let result = 0;
    while (true) {
        result = a + b;
        b = a;
        a = result;
        yield result;
    }
}

const genTwo = fibonacci();
genTwo.next();