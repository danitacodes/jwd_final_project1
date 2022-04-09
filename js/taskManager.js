//Create Tasks
function createTaskHtml (name, description, assignedTo, dueDate, status) {
    const html = `
        <li class="list-group-item">
            <div class="col-md-4 mb-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Task</h5>
                        <p id="id" class="card-text">Task Id</p>
                        <p class="card-text">${name}</p>
                        <p class="card-text">${description}</p>
                        <p class="card-text">${assignedTo}</p>
                        <p class="card-text">${status}</p>
                        <p class="card-text">${dueDate}</p>
                        <a href="#" class="btn mr-2"><i class="fa-solid fa-pen-to-square"></i></a>
                        <a href="#" class="btn "><i class="fa-solid fa-trash"></i></a>
                    </div>
                </div>
            </div>
        </li>
         `
}

//Handles tasks
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
    }

    //Render method to make task visible
    render() {
        let tasksHtmlList = [];

        this.tasks.forEach(tasks => {
            for (let key in tasks) {
                console.log(`${key}: ${tasks[key]}`);
            }
            let date = new Date(tasks.dueDate);

            let formattedDate = date.toDateString();

            let taskHtml = createTaskHtml(tasks.name, tasks.description, tasks.assignedTo, formattedDate, tasks.status)

            tasksHtmlList.push(taskHtml);
        })

        let tasksHtml = tasksHtmlList.join();

        const tasksList = document.querySelector('#tasksList')
        tasksHtmlList.innerHTML = tasksHtml;
    }
}

function submitTask() {
    event.preventDefault();

    const params = (new URL(document.location)).searchParams;
    const name = params.get('taskName');
    const description = params.get('description');
    const assignedTo = params.get('assignedTo');
    const dueDate = params.get('Test_DatetimeLocal');

    document.getElementById('taskListName').innerHTML = name;
    document.getElementById('taskListDescription').innerHTML = description;
    document.getElementById('taskListAssignedTo').innerHTML = assignedTo;
    document.getElementById('taskListDueDate').innerHTML = dueDate;

    newTask = new taskManager();
    newTask.addTask();
    newTask.render();
    document.querySelector('#taskName').value = '';
    document.querySelector('#description').value = '';
    document.querySelector('#assignedTo').value = '';
    document.querySelector('#Test_DatetimeLocal').value = '';
}
