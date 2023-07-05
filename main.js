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

// EventListener for delete button
// deleteButton.addEventListener('click', () => {
//     deleteListItem();
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
    editButton.textContent = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteBtn');
    deleteButton.textContent = 'Delete';

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
  }
  

// for edit list item
// function editListItem() {
//     console.log('edit button was clicked');
// }

// for delete list item
// function deleteListItem() {
//     console.log('delete button was clicked');
// }