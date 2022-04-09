//Class to manage tasks
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    //Add tasks method
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
        //Add new task to previous tasks
        this.tasks.push(task);
    }

    //Add task in UI
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
    //Error Messages
    showAlert(message, className) {
        const div = document.createElement('div');
        div.className =`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.holder');
        const form = document.querySelector('#taskForm');
        container.insertBefore(div, form);
        //Make warning go away
        setTimeout(() => document.querySelector('.alert').remove(), 5000);
    }

    //Delete Task
    deleteTask(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
    }

    //Local Storage
    saveTask() {
        //Create JSON string for tasks
        let tasksJson = JSON.stringify(this.tasks);

        //Store tasks JSON string in local storage
        localStorage.setItem('tasks', tasksJson);

        //Convert currentId to string
        const currentId = String(this.currentId);

        //Store currentId in local storage
        localStorage.setItem('currentId', currentId);
    }

    }