

const taskField = document.getElementById('taskField');

const taskList = document.getElementById('task-list');

const submitBtn = document.getElementById('submit-btn');

const resetBtn = document.getElementById('reset-btn');

const dateTime = new Date();
document.getElementById('date-time').textContent = dateTime.toDateString();

// JSON.parse(localStorage.getItem('listOfTasks'));

let listOfTasks = [];



submitBtn.addEventListener('click', addTask);

resetBtn.addEventListener('click', reset);

taskField.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     //event.preventDefault();
     submitBtn.click();
    }
});


function addTask() {
     
    listOfTasks.push(taskField.value);

    let taskItem = document.createElement('li');    
    taskItem.textContent = taskField.value;    
    taskList.append(taskItem);
    taskField.value = '';
    
    const taskItemBtn = document.createElement('button');
    taskItemBtn.textContent = 'delete task'; 
    taskItem.append(taskItemBtn);

    //localStorage.setItem('tasks', JSON.stringify(listOfTasks));

    taskItemBtn.addEventListener('click', function() {
        console.log('Button clicked!');
        taskItem.textContent = '';
    })

    taskItem.addEventListener('click', function() {
        console.log('Task Item clicked!');
        taskItem.style.textDecoration = 'line-through';
    })
         
}



function reset() {
    taskList.innerHTML = '';
    listOfTasks = [];  
    localStorage.clear();
}
