//Create inner html for tasks
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => `
<li class="list-group-item" data-task-id=${id}>
    <div class="col-md-4 mb-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div>
                    <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
                 </div>
                <p class="card-text">Task Name: ${name}</p>
                <p class="card-text">Task Description: ${description}</p>
                <p class="card-text">Assigned To: ${assignedTo}</p>
                <p class="card-text">Due Date: ${dueDate}</p>
                <div class="mb-5 mt-3 left-btn">
                    <button type="submit" class="btn mr-2 done ${status === 'TODO' ? 'visible' :'invisible'}">Mark As Done</buton>
                </div>
                <div class="mb-5 mt-3 right-btn">
                    <a href="#" class="btn deleteBtn"><i class="fa-solid fa-trash"></i></a>
                </div>
            </div>
        </div>
    </div>
</li>
 `

//Class to manage tasks
class TaskManager {
    constructor(currentId = 1) {
        this.tasks = [];
        this.currentId = currentId;
    }

    //Add tasks method
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
        //Add new task to previous tasks
        this.tasks.push(task);
    }

    //Delete Task
    deleteTask(taskId) {
        //Array creation
        const newTasks = [];

        //Loop over tasks
        for (let i = 0; i < this.tasks.length; i++) {
            //current task in loop
            const task = this.tasks[i];

            //Check for id matches
            if (task.id !== taskId) {
                //Add task to newTasks array
                newTasks.push(task);
            }

        }

        //Set this.tasks to newTasks
        this.tasks = newTasks;
    }

        //Get Task
        getTasksById(taskId) {
            let currentTask;
    
            for (let i = 0; i < this.tasks.length; i++) {
                const task = this.tasks[i];
    
                if(task.id === taskId) {
                    currentTask = task;
                }
            }
            return currentTask;
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
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

            //Add tasks to array
            tasksHtmlList.push(taskHtml);
        }

        //Create tasksHtml
        const tasksHtml = tasksHtmlList.join('\n');

        //Create inner html for task
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;

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

    load() {
        if(localStorage.getItem('tasks')) {
            let tasksJson = localStorage.getItem('tasks');

            this.tasks = JSON.parse(tasksJson);
        }

        if (localStorage.getItem('currentId')) {
            let currentId = localStorage.getItem('currentId');

            this.currentId = Number(currentId);
        }
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

    }
