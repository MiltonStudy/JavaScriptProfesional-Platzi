/*
** El objeto Proxy, permite crear un intermediario para otro objeto, el cual puede
** manipular y redefinir operaciones fundamentales para dicho objeto
*/

// doc -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy


// objetivo -> target
const person = {
    name: "",
    lastName: "",
    age: 21
}

// handler o manipulador
const handler = {
    get(obj, prop) {
        if (prop === "age") {
            console.error(`No tiene permisos para acceder a la propiedad: "${prop}"`);
        } else {
            return obj[prop];
        }
    },

    set(obj, prop, value) {

        const keysObject = Object.keys(person);

        const keys = [];

        keysObject.forEach(key => {
            keys.push(key)
            return keys;
        });

        
        const existingValue = keys.indexOf(prop, keys);

        if (existingValue === -1) {
            console.error(`La propiedad "${prop}" no existe, ¡No se pueden agregar nuevas propiedades al objeto!`);
        } else {
            obj[prop] = value;
        }
    }
};

// creando un objeto Proxy
const milton = new Proxy(person, handler);

// accediendo al valor de una propiedad a la cual no tenemos permisos
console.log(milton.age);

// cambiando el valor de una propiedad mediante el objeto Proxu
milton.name = "Milton";
console.log(`Nombre: ${milton.name}`);

// agregando una nueva propiedad al objeto
milton.description = "Descripción";