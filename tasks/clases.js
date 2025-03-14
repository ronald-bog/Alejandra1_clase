// const task = []
// console.log(task)

// task.push('hola')

// console.log(task)

// const arreglo = 'Ronald'

// const objeto = {
//     nombre: 'Ronald',
//     appelido: 'Espitia'
// }

// objeto.edad = 45

// console.log(`MENU:\n1.Create Taks ${arreglo}`);



// ABRIL 10
// * if, else if , else, anidado
// promt()
// alert()


//ABRIL 11
// switch

// ABRIL 12
// funciones


const nombre = prompt("escribir nombre");

const tarea = prompt(`Hola ${nombre}\n*** MENU **\n1. Add a task\n2. Complete a task\n3. List  all task`);

alert(tarea)
switch (tarea) {
    case 1:
        console.log(tarea)
        break;
    case 2:
        alert(`${nombre} seleccionaste la opcion ${tarea}dos)`)
        break;
    case 3:
        alert(`${nombre} seleccionaste la opcion ${tarea} tres`)
        break;
    default:
        alert('No Seleccionaste una opcion valida');
}