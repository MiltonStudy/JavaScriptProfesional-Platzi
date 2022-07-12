function Hero(name) {
    this.name = name;
}

// agregando metodos al prototype de Hero
Hero.prototype.hello = function () {
    console.log(`Hola, soy ${this.name}.`);
};

Hero.prototype.overcome = function (villain) {
    console.log(`${this.name}, has defeatde ${villain}.`);
};

// creando instrancias de Hero
const batman = new Hero('Batman');

// propiedades de la instancia
console.log('Name:', batman.name);

// propiedades del prototype
batman.hello();
batman.overcome("DeathStoke");

/*
** metodos para manipular prototypes
*/

// metodo para obtener el prototype de un objeto
Object.getPrototypeOf(batman);

// metodo para saber si una propiedad o metodo pertenence a una instancia
batman.hasOwnProperty("name");