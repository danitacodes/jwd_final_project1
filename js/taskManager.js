//create similar task objects
class taskManager {
    //used to create new instance of taskManager class
    constructor(currentId) {
        this.tasks=[];
        this.currentId = 0
    }
    //method to create task
    addTask(name, description, assignedTo, dueDate, status) {
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
}

// function resetForm() {
//     document.getElementById('#newTaskForm').reset();
// }