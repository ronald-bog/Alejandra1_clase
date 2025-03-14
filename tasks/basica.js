var persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function () {
        console.log("¡Hola!");
    }
};

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
        console.log("¡Hola!");
    };
}

// Crear un objeto usando la función constructora
var persona = new Persona("Ronald", 31);

// Acceso a propiedades y métodos
console.log(persona.edad); // Output: "Juan"
persona.saludar(); // Output: ¡Hola!