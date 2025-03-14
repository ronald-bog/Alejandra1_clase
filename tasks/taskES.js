// Objeto gestor tareas
const gestorTareas = {
    tareas: [],
    agregar: function (descripcion) {
        if (descripcion.trim() !== '') {
            const tarea = {
                id: this.tareas.length + 1,
                descripcion: descripcion,
                completada: false
            };
            this.tareas.push(tarea);
            alert(`Tarea agregada: ${descripcion}`);
        } else {
            alert('Error: La descripción de la tarea no puede estar vacia.');
        }
    },
    completar: function (tareaId) {
        const tarea = this.tareas.filter(tarea => tarea.id === tareaId);
        if (tarea.length != 0) {
            tarea[0].completada = true;
            alert(`Tarea completada: ${tarea[0].descripcion}`);
        } else {
            alert('Error: La tarea no existe.');
        }
    },
    listarTodas: function () {
        let message = 'TAREAS:\n';
        this.tareas.forEach(tarea => {
            message += `ID: ${tarea.id}, descripcion: ${tarea.descripcion}, completada: ${tarea.completada ? 'SI' : 'NO'}\n`;
        });
        alert(message);
    },
    listarCompletadas: function () {
        const completas = this.tareas.filter(tarea => tarea.completada);
        let message = 'TAREAS COMPLETAS:\n';
        completas.forEach(tarea => {
            message += `ID: ${tarea.id}, descripcion: ${tarea.descripcion}\n`;
        });
        alert(message);
    }
};

// Menu function
function menu(user) {
    const choice = parseInt(prompt(`*** MENU ***\n\nHola, ${user}!\n\nPor favor selecciona una opcion del menu:\n1. Adicionar Tarea\n2. Completar tarea\n3. Listar todas las tareas\n4. Listar tareas completadas\n5. Salir`));

    switch (choice) {
        case 1:
            const descripcion = prompt('Ingresar una descripcion para la nueva tarea:');
            gestorTareas.agregar(descripcion);
            break;
        case 2:
            const id = parseInt(prompt('Ingrese el ID de la tarea que quiere completar:'));
            gestorTareas.completar(id);
            break;
        case 3:
            gestorTareas.listarTodas();
            break;
        case 4:
            gestorTareas.listarCompletadas();
            break;
        case 5:
            return alert('Saliste de la aplicacion, Bye...');
        default:
            alert('Error: Opcion invalida, por favor seleccione un numero del menu.');
    }
    menu(user);
}


// Function to ask for user name
function askUserName() {
    const userName = prompt('Por favor ingresa tu nombre:');
    if (userName && userName.trim() !== '') {
        menu(userName);
    } else {
        alert('Error: El campo no puede estar vacio.');
        askUserName();
    }
}

askUserName();