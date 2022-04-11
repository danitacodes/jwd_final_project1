const taskManager = new TaskManager(0);
 
const taskForm = document.querySelector('#taskForm');
 
taskForm.addEventListener('submit', (event) => {
    //prevent default
    event.preventDefault();
 
    //Gets Form Elements
    const newTaskName = document.querySelector('#taskName');
    const newDescription = document.querySelector('#description');
    const newAssignedTo = document.querySelector('#assignedTo');
    const newDueDate = document.querySelector('#Test_DatetimeLocal');

    //Gets Form Element Values
    const taskName = newTaskName.value;
    const description= newDescription.value;
    const assignedTo= newAssignedTo.value;
    const dueDate = newDueDate.value;
 
    //Validation
    if(taskName === '' || description === '' || assignedTo === '' || dueDate === '') {
        taskManager.showAlert('Please complete all inputs', 'danger')
    } else {
         //Adds Tasks
        taskManager.addTask(taskName, description, assignedTo, dueDate);
 
        // Render the tasks
        taskManager.render();

        //Task Added Message
        taskManager.showAlert('Task Added', 'success')
 
        //Clear values after input
        document.querySelector('#taskName').value = '';
        document.querySelector('#description').value = '';
        document.querySelector('#assignedTo').value = '';
        document.querySelector('#Test_DatetimeLocal').value = '';
    }
    
    //Save Tasks
    taskManager.saveTask()
   
});

//Delete Tasks
    document.querySelector('#tasksList').addEventListener('click', (e) =>{
        taskManager.deleteTask(e.target)
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
                <div class="form-group row">
                          <label for="status" class="col-form-label col-sm-4">Status</label>
                          <div class="col-sm-8">
                            <select id="status" class="form-select">
                              <option selected>Select</option>
                              <option value="Done">Done</option>
                              </select>
                          </div>
                        </div>
                <p class="card-text">Due Date: ${dueDate}</p>
                <a href="#" class="btn mr-2 completed"><i class="fa-solid fa-pen-to-square"></i></a>
                <a href="#" class="btn delete"><i class="fa-solid fa-trash"></i></a>
            </div>
        </div>
    </div>
</li>
 `

//Reset button
