'use strict';

const buttonToAddTask = document.querySelector('.button__add-task');
const toDoList = document.querySelector('.main__list-to-do');
const finishedList = document.querySelector('.main__list-finished');
const modalAddTaskButton = document.querySelector('.modal__button');
const modal = document.querySelector('.page__modal');
let arrayTaskToDo = [];


function handleClickAppearModalBtn(event) {
  modal.classList.remove('hidden');
}

function handleClickAddTask(event) {
  modal.classList.add('hidden');
  const modalTaskInput = document.querySelector('.modal__input');
  const newTaskToAdd = modalTaskInput.value;
  arrayTaskToDo.push(newTaskToAdd);
  toDoList.innerHTML =  handlePrintTask();
}

function handlePrintTask() {
  const result = arrayTaskToDo.map((task, index) => {
    return (
      `<li className="list-to-do__task">
        <input type="checkbox" name=${task} id=${index}/>
        ${task}
      </li>`
    )
  })
  console.log(result)
  return result.join("")
}

//listeners
buttonToAddTask.addEventListener('click', handleClickAppearModalBtn);
modalAddTaskButton.addEventListener('click', handleClickAddTask);