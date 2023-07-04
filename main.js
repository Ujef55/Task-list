let input = document.querySelector('#input');
const ul = document.querySelector('#ul');
const addButton = document.querySelector('#submit-button');
const editButton = document.querySelector('.editBtn');
const deleteButton = document.querySelector('.deleteBtn');
const taskList = document.querySelector('#tasks');


// EventListener for add button
addButton.addEventListener('click', (e) => {
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
    let inputValue = input.value;

    if (inputValue === '') {
        alert('Please add task');
        return;
    }
  
    // Main div
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('task');

    // elementDiv
    const elementDiv = document.createElement('div');
    elementDiv.classList.add('content');
    elementDiv.textContent = inputValue;

    mainDiv.appendChild(elementDiv);
    taskList.appendChild(mainDiv);
    
  
    // Clear the input value
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