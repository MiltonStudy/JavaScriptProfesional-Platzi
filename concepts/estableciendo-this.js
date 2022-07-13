function saludar() {
    console.log(`Hola soy ${this.name}`);
}

function caminar(metros, direccion) {
    console.log(`${this.name} camina ${metros} metros hacia el ${direccion}.`);
}

const jose = { name: "jose" };

/*
** functionName.call(). Ejecuta la función recibiendo como primer argumento 
** el this y los siguientes son los argumentos que recibe 
** la función que llamó a call.
*/

// establecer this usando call
saludar.call(jose);

// Establecer this usando call, pasando argumentos a la función
caminar.call(jose, 400, 'norte');


/* functionName.apply(). Ejecuta la función recibiendo como primer argumento 
** el this y como segundo un arreglo con los argumentos que recibe
** la función que llamó a apply.
*/

// Establecer this usando apply
caminar.apply(jose, [800, 'noreste']);


/* functionName.bind(). Recibe como primer y único argumento el this. No ejecuta la función,
** sólo regresa otra función con el nuevo this integrado.
*/

// Establecer this en una nueva función usando bind
const daniel = { name: 'Daniel' };
const danielSaluda = saludar.bind(daniel);
danielSaluda();