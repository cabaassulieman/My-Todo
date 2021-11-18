


function addTodo() {
const inputElement = document.querySelector('input');
const value = inputElement.value;
if(value=== ''){
       return;
}

const todocontant = document.createElement('div');
todocontant.className = 'flex justify-between items-center';

const todoTitle = document.createElement('h4');
todoTitle.textContent = value;

const doneButton = document.createElement('button');
doneButton.className = 'bg-green-500 rounded p-2 shadow-lg';
doneButton.textContent = 'Done';
doneButton.onclick = markAsDone;

todocontant.appendChild(todoTitle);
todocontant.appendChild(doneButton);


const Alltodocontianer = document.querySelector('#todoContainer');

Alltodocontianer.appendChild(todocontant);
inputElement.value = '';

}

function markAsDone(event){
  const clickedButton = event.target;
  clickedButton.classList.add('hidden');
  
  const todoitem = clickedButton.previousElementSibling;

  todoitem.classList.add('line-through');
  
}