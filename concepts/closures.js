// closures -> se refiere al nivel de acceso de las variables
function MakeNumber (valueNumber) {
    let number = valueNumber;

    return {
        getNumber: function() {
            return number;
        },

        setNumber: function(newValueNumber) {
            number = newValueNumber;
        },
    };
}

// creando una instancia de MakeNumber
let newNumber = MakeNumber(5);

/* Accesdiendo directamente a la propiedad number -> nos mostrara undefined
**  debido a que no tenemos acceso a la propiedad number
*/
console.log(`Value number: ${newNumber.number}`);

// obteniendo el valor de number mediante un getter
console.log(`Value number: ${newNumber.getNumber()}`);

/* Modificando el valor de number directamnete, si imprimimos el valor de number
** despues de modificar su valor veremos que su valor sigue igual, 
** debido a que no tenemos acceso a la propiedad number
*/
newNumber.number = 10;
console.log(`Value number: ${newNumber.getNumber()}`);

// modificando el valor de number a través de un setter
newNumber.setNumber(10);
console.log(`Value number: ${newNumber.getNumber()}`);