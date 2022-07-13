/*
** this hace referencia a la instancia actual de la clase
*/


// this en el scope global
console.log(`whoIsThis: ${this}`);


// this en el scope de una función
function whoIsThis() {
    console.log(`whoIsThis: ${this}`);
}

console.log(`WhoIsThis: ${whoIsThis()}`);


// this en el scope de un objeto
const person = {
    name: "Juan",
    saludar: function () {
        console.log(`Hola soy: ${this.name}`);
    }
}

person.saludar();


// this cuando sacamos a una funcion de un objeto
const accion = person.saludar;
accion();


// this en el scope de una clase
function Person(name) {
    this.name = name;
}

Person.prototype.saludar = function() {
    console.log(`Hola soy ${this.name}`);
}

const jorge = new Person("Jorge");
jorge.saludar();