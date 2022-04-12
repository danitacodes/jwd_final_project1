const taskManager = new TaskManager(0);

taskManager.load();

taskManager.render();
 
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
    const name = newTaskName.value;
    const description= newDescription.value;
    const assignedTo= newAssignedTo.value;
    const dueDate = newDueDate.value;
 
    //Validation
    if(name === '' || description === '' || assignedTo === '' || dueDate === '') {
        taskManager.showAlert('Please complete all inputs', 'danger')
    } else {
         //Adds Tasks
        taskManager.addTask(name, description, assignedTo, dueDate);

        //Save Tasks
        taskManager.saveTask()
 
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
    
});

//Status Check
const tasksList = document.querySelector('#tasksList');

tasksList.addEventListener('click', (event) => {
    //Complete button checker
    if (event.target.classList.contains('done')) {
        const taskParent = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        
        const taskId = Number(taskParent.dataset.taskId);

        const task = taskManager.getTasksById(taskId);

        task.status = 'DONE';

        taskManager.saveTask();

        taskManager.render();
    }

    //Delete Button checker
    if (event.target.classList.contains('deleteBtn')) {

        const taskParent = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;

        console.log(taskParent)

        const taskId = Number(taskParent.dataset.taskId);

        taskManager.deleteTask(taskId);

        taskManager.saveTask();

        taskManager.render();
    }
})

