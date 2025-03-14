// Objeto del administrador de tareas
const taskManager = {
    tasks: [],

    // Método para agregar una tarea
    addTask: function (description) {
        if (description.trim() !== '') {
            const task = {
                id: this.tasks.length + 1,
                description: description,
                completed: false
            };
            this.tasks.push(task);
            console.log(`Tarea agregada: ${description}`);
        } else {
            console.log('Error: La descripción de la tarea no puede estar vacía.');
        }
    },

    // Método para marcar una tarea como completada
    completeTask: function (taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
            console.log(`Tarea completada: ${task.description}`);
        } else {
            console.log('Error: La tarea especificada no existe.');
        }
    },

    // Método para listar todas las tareas
    listAllTasks: function () {
        console.log('Todas las tareas:');
        this.tasks.forEach(task => {
            console.log(`ID: ${task.id}, Descripción: ${task.description}, Completada: ${task.completed ? 'Sí' : 'No'}`);
        });
    },

    // Método para listar las tareas completadas
    listCompletedTasks: function () {
        const completedTasks = this.tasks.filter(task => task.completed);
        console.log('Tareas completadas:');
        completedTasks.forEach(task => {
            console.log(`ID: ${task.id}, Descripción: ${task.description}`);
        });
    }
};

// Función para el menú
function menu() {
    console.log('Menú:');
    console.log('1. Agregar una tarea');
    console.log('2. Completar una tarea');
    console.log('3. Listar todas las tareas');
    console.log('4. Listar tareas completadas');
    console.log('5. Salir');

    const choice = parseInt(prompt('Por favor, elija una opción del menú:'));

    switch (choice) {
        case 1:
            const newTaskDescription = prompt('Ingrese la descripción de la nueva tarea:');
            taskManager.addTask(newTaskDescription);
            break;
        case 2:
            const taskIdToComplete = parseInt(prompt('Ingrese el ID de la tarea que desea marcar como completada:'));
            taskManager.completeTask(taskIdToComplete);
            break;
        case 3:
            taskManager.listAllTasks();
            break;
        case 4:
            taskManager.listCompletedTasks();
            break;
        case 5:
            console.log('Saliendo de la aplicación.');
            return;
        default:
            console.log('Error: Opción no válida. Por favor, elija una opción del menú.');
    }

    // Volver a mostrar el menú después de cada operación, excepto cuando el usuario elige salir
    menu();
}

// Función para solicitar el nombre de usuario
function askUserName() {
    const userName = prompt('Por favor, ingresa tu nombre:');
    if (userName && userName.trim() !== '') {
        console.log(`¡Bienvenido, ${userName}!`);
        menu(); // Iniciar el menú después de ingresar el nombre de usuario
    } else {
        console.log('Error: El nombre no puede estar vacío.');
        askUserName();
    }
}

// Iniciar la aplicación solicitando el nombre del usuario
askUserName();
