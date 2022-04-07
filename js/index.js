//Select New Task Page
const newTaskPage = document.querySelector('#addTask');

//Add submit event listener
newTaskPage.addEventListener('submit', (event) => {
    //Stop default form action
    event.preventDefault();

    //Select Inputs from Task Page
    const newTaskNameInput = document.querySelector('#newTaskName');
    const newTaskDescription = document.querySelector('#newTaskDescripton');
    const newTaskAssignment = document.querySelector('#newTaskAssignment');
    const newTaskDueDate = document.querySelector('#Test_DatetimeLocal');

    //Get value of inputs
    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignment.value;
    const dueDate = newTaskDueDate.value;
    if(!validFormFieldInput(name)) {
        errorMessage.innerHTML = 'Invalid name entered.';
        errorMessage.style.display = 'block'
    } else {
        errorMessage.style.display = 'none'
    }

})

function validFormFieldInput(data) {
    return data !== null && data !== '';
}

const task = new taskManager();
task.addTask('Me', 'eat', 'Us', '04-06-2022', 'TODO');
task.addTask('Her','sleep', 'Me', '04-07-2022', 'TODO');
console.log(task)
