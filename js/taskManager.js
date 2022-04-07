//create similar task objects
class taskManager {
    //used to create new instance of taskManager class
    constructor(tasks, currentId) {
        this.tasks=[];
        this.currentId = 0
    }
    //method to ccreate task
    addTask(name, description, assignedTo, dueDate, status) {
        this.name = name;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.status = status;

        //increment task Id
        this.currentId++;
        

        this.tasks.push(name, description, assignedTo, dueDate, status)
    }
}

