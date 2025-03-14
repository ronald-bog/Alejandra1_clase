const objeto = {
    tareas: [{ id: 1, desc: 'lavar', completed: true }],
    completar: function (id) {
        const tarea = this.tareas.filter(tarea => tarea.id === id);
        if (tarea.length != 0) {
            console.log('true');
            console.log(tarea);
        } else {
            console.log('false');
        }
    }
};

objeto.completar(1);

