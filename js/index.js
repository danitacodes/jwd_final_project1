let task = new taskManager(0);

document.querySelector('#taskForm').addEventListener('submit', (e) => {
    //Get form values
    const taskName = document.querySelector('#taskName').value;
    const description = document.querySelector('#description').value;
    const assignedTo = document.querySelector('#assignedTo').value;
    const dueDate = document.querySelector('#Test_DatetimeLocal').value;

    //Add tasks
    taskManager.addTask(name, description, assignedTo, dueDate);

     //Clear form values
     document.querySelector('#taskName').value = '';
     document.querySelector('#description').value = '';
     document.querySelector('#assignedTo').value = '';
     document.querySelector('#Test_DatetimeLocal').value = '';
})

