let input = document.querySelector('#input');
const ul = document.querySelector('#ul');
const addButton = document.querySelector('#submit-button');
const editButton = document.querySelector('.editBtn');
const deleteButton = document.querySelector('.deleteBtn');


// EventListener for add button
addButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    addListItem();
})


// EventListener for edit button
editButton.addEventListener('click', () => {
    editListItem();
})

// EventListener for delete button
deleteButton.addEventListener('click', () => {
    deleteListItem();
})


// for create new list item
function addListItem() {
    let inputValue = input.value;
    console.log(inputValue);
}

// for edit list item
function editListItem() {
    console.log('edit button was clicked');
}

// for delete list item
function deleteListItem() {
    console.log('delete button was clicked');
}