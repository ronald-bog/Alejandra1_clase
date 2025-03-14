// Task Manager Object
const taskManager = {
    tasks: [],

    // Method to add a task
    addTask: function (description) {
        if (description.trim() !== '') {
            const task = {
                id: this.tasks.length + 1,
                description: description,
                completed: false
            };
            this.tasks.push(task);
            alert(`Task added: ${description}`);
        } else {
            alert('Error: Task description cannot be empty.');
        }
    },

    // Method to mark a task as completed
    completeTask: function (taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
            alert(`Task completed: ${task.description}`);
        } else {
            alert('Error: The specified task does not exist.');
        }
    },

    // Method to list all tasks
    listAllTasks: function () {
        let message = 'All tasks:\n';
        this.tasks.forEach(task => {
            message += `ID: ${task.id}, Description: ${task.description}, Completed: ${task.completed ? 'Yes' : 'No'}\n`;
        });
        alert(message);
    },

    // Method to list completed tasks
    listCompletedTasks: function () {
        const completedTasks = this.tasks.filter(task => task.completed);
        let message = 'Completed tasks:\n';
        completedTasks.forEach(task => {
            message += `ID: ${task.id}, Description: ${task.description}\n`;
        });
        alert(message);
    }
};

// Menu function
function menu(user) {
    const choice = parseInt(prompt(`*** MENU ***\n\nWelcome, ${user}!\n\nPlease choose an option from the menu:\n1. Add a task\n2. Complete a task\n3. List all tasks\n4. List completed tasks\n5. Exit`));

    switch (choice) {
        case 1:
            const description = prompt('Enter the description of the new task:');
            taskManager.addTask(description);
            break;
        case 2:
            const id = parseInt(prompt('Enter the ID of the task you want to mark as completed:'));
            taskManager.completeTask(id);
            break;
        case 3:
            taskManager.listAllTasks();
            break;
        case 4:
            taskManager.listCompletedTasks();
            break;
        case 5:
            return alert('You have exited the application...');
        default:
            alert('Error: Invalid option. Please choose an option from the menu.');
    }
    // Show the menu again after each operation, except when the user chooses to exit
    menu();
}


// Function to ask for user name
function askUserName() {
    const userName = prompt('Please enter your name:');
    if (userName && userName.trim() !== '') {
        menu(userName); // Start the menu after entering the user name
    } else {
        alert('Error: Name cannot be empty.');
        askUserName();
    }
}
// Start the application by asking for the user's name
askUserName();