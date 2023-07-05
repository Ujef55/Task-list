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
    

    // task list div
    const taskListDiv = document.createElement('div');
    taskListDiv.classList.add('task');

    // content div
    const taskContentDiv = document.createElement('div');
    taskContentDiv.classList.add('content');
    taskContentDiv.textContent = inputValue;

    taskListDiv.appendChild(taskContentDiv);

    taskList.appendChild(taskListDiv);

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