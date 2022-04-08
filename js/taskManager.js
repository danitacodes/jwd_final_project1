//create similar task objects
class taskManager {
    //used to create new instance of taskManager class
    constructor(tasks, currentId) {
        this.tasks=[];
        this.currentId = 0
    }
    //method to create task
    addTask(name, description, assignedTo, dueDate, status) {
        //Get UI elements
        const task = {
            //increment task Id
            id: this.currentId++,
            name: document.querySelector('#taskName').value,
            description: document.querySelector('#description').value,
            assignedTo: document.querySelector('#assignedTo').value,
            dueDate: document.querySelector('#Test_DatetimeLocal').value,
            status: 'TODO'
        }        

        this.tasks.push(task);
        console.log(this.tasks)
    }
}

function submitTask() {
    event.preventDefault();
    newTask = new taskManager();
    newTask.addTask();
    document.querySelector('#taskName').value = '';
    document.querySelector('#description').value = '';
    document.querySelector('#assignedTo').value = '';
    document.querySelector('#Test_DatetimeLocal').value = '';
}


