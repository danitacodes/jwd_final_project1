const taskManager = new TaskManager(0);
 
const taskForm = document.querySelector('#taskForm');
 
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
 
    const newTaskName = document.querySelector('#taskName');
    const newDescription = document.querySelector('#description');
    const newAssignedTo = document.querySelector('#assignedTo');
    const newDueDate = document.querySelector('#Test_DatetimeLocal');
 
    /*
        Validation code here
    */
 
    const taskName = newTaskName.value;
    const description= newDescription.value;
    const assignedTo= newAssignedTo.value;
    const dueDate = newDueDate.value;
 
    taskManager.addTask(taskName, description, assignedTo, dueDate);
 
    // Render the tasks
    taskManager.render();
 
    //Clear values after input
    document.querySelector('#taskName').value = '';
    document.querySelector('#description').value = '';
    document.querySelector('#assignedTo').value = '';
    document.querySelector('#Test_DatetimeLocal').value = '';
});
 
//Create inner html for tasks
const createTaskHtml = (name, description, assignedTo, status, dueDate) => `
<li class="list-group-item">
    <div class="col-md-4 mb-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Task</h5>
                <p id="id" class="card-text">Task Id</p>
                <p class="card-text">Task Name: ${name}</p>
                <p class="card-text">Task Description: ${description}</p>
                <p class="card-text">Assigned To: ${assignedTo}</p>
                <p class="card-text">Status: ${status}</p>
                <p class="card-text">Due Date: ${dueDate}</p>
                <a href="#" class="btn mr-2"><i class="fa-solid fa-pen-to-square"></i></a>
                <a href="#" class="btn "><i class="fa-solid fa-trash"></i></a>
            </div>
        </div>
    </div>
</li>
 `

