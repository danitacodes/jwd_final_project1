//Class to manage tasks
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    //Adds task method
    addTask(name, description, assignedTo, dueDate, status) {
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

    //Render tasks
    render() {
        //Create tasks array
        const tasksHtmlList = [];

        //Loop over tasks
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            //Date formating
            const date = new Date(task.dueDate);
            const formattedDate = date.toDateString();

            //Create html for task
            const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, task.status, formattedDate);

            //Add tasks to array
            tasksHtmlList.push(taskHtml);
        }

        //Create tasksHtml
        const tasksHtml = tasksHtmlList.join('\n');

        //Create inner html for task
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;

    }
}
