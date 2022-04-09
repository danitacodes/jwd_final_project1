//Class to manage tasks
class taskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    //Adds tasks
    addTask(name, description, assignedTo, dueDate) {
        //Get UI elements

        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };
        
        this.tasks.push(task);
    }
}
