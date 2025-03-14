const taskManager = {
    tasks: [],

    addTask(description) {
        if (description.trim() !== '') {
            const task = { id: this.tasks.length + 1, description, completed: false };
            this.tasks.push(task);
            console.log(`Tarea agregada: ${description}`);
        } else {
            console.log('Error: La descripción de la tarea no puede estar vacía.');
        }
    },

    completeTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
            console.log(`Tarea completada: ${task.description}`);
        } else {
            console.log('Error: La tarea especificada no existe.');
        }
    },

    listAllTasks() {
        console.log('Todas las tareas:');
        this.tasks.forEach(task => {
            console.log(`ID: ${task.id}, Descripción: ${task.description}, Completada: ${task.completed ? 'Sí' : 'No'}`);
        });
    },

    listCompletedTasks() {
        const completedTasks = this.tasks.filter(task => task.completed);
        console.log('Tareas completadas:');
        completedTasks.forEach(task => {
            console.log(`ID: ${task.id}, Descripción: ${task.description}`);
        });
    }
};

function menu() {
    console.log('Menú:\n1. Agregar una tarea\n2. Completar una tarea\n3. Listar todas las tareas\n4. Listar tareas completadas\n5. Salir');
    const choice = parseInt(prompt('Por favor, elija una opción del menú:'));

    switch (choice) {
        case 1:
            taskManager.addTask(prompt('Ingrese la descripción de la nueva tarea:'));
            break;
        case 2:
            taskManager.completeTask(parseInt(prompt('Ingrese el ID de la tarea que desea marcar como completada:')));
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

    menu();
}

function askUserName() {
    const userName = prompt('Por favor, ingresa tu nombre:');
    if (userName && userName.trim() !== '') {
        console.log(`¡Bienvenido, ${userName}!`);
        menu();
    } else {
        console.log('Error: El nombre no puede estar vacío.');
        askUserName();
    }
}

askUserName();
