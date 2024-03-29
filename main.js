let form = document.querySelector('#task-form');
let input = document.querySelector('#input');
const taskList = document.querySelector('.tasks');

// EventListener for add button
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    addListItem();
})


// EventListener for edit button
// editButton.addEventListener('click', () => {
//     editListItem();
// })




// for create new list item
function addListItem() {

    const inputValue = input.value;

    if (inputValue === '') {
        alert('Please add task');
        return;
    }
    

    // task list div element
    const taskListDiv = document.createElement('div');
    taskListDiv.classList.add('task');

    // div for button elements
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttons');

    // content div element
    const taskContentDiv = document.createElement('div');
    taskContentDiv.classList.add('content');
    
    // edit button and delete button
    const editButton = document.createElement('button');
    editButton.classList.add('editBtn');
    editButton.textContent = 'EDIT';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteBtn');
    deleteButton.textContent = 'DELETE';

    // input element
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.value = inputValue;
    taskInput.setAttribute('readonly', 'readonly');
    taskInput.classList.add('my-task-text');


    taskListDiv.appendChild(taskContentDiv);
    taskContentDiv.appendChild(taskInput);
    taskList.appendChild(taskListDiv);
    taskListDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(deleteButton);


    // clear input value
    input.value = '';


    // event listner on delete button
    deleteButton.addEventListener('click', () => {
        if (taskListDiv.className === 'task') {
            taskListDiv.style.animationPlayState = 'running'
            taskListDiv.addEventListener('animationend', () => {
                taskListDiv.remove();
            })
        }
    })

    // event listner on edit button
    editButton.addEventListener('click', () => {
        if (editButton.textContent === 'EDIT') {
            taskInput.removeAttribute('readonly');
            taskInput.focus();
            editButton.textContent = 'SAVE';
        } else {
            taskInput.setAttribute('readonly', 'readonly');
            editButton.textContent = 'EDIT';
        }
    })  

  }
  



