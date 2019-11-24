'use strict';

const buttonToAddTask = document.querySelector('.button__add-task');
const toDoList = document.querySelector('.main__list-to-do');
const finishedList = document.querySelector('.main__list-finished');
const modalAddTaskButton = document.querySelector('.modal__button');
const modal = document.querySelector('.page__modal');
const modalTaskInput = document.querySelector('.modal__input');
let arrayTaskToDo = [];
let arrayTaskFinished = [];


function handleClickAppearModalBtn(event) {
  modal.classList.remove('hidden');
  modalTaskInput.value = "";
}

function handleClickAddTask(event) {
  modal.classList.add('hidden');
  let newTaskToAdd = modalTaskInput.value;
  arrayTaskToDo.push(newTaskToAdd);
  toDoList.innerHTML =  handlePrintTask();
}

function handlePrintTask() {
  const result = arrayTaskToDo.map((task, index) => {
    return (
      `<li id=${index} className="list-to-do__task">
        <input onclick="handleClickCheckbox(event)" type="checkbox" name=${task}/>
        ${task}
      </li>`
    )
  })
  return result.join("")
}

function handleClickCheckbox(event) {
  const checkboxClicked = event.currentTarget;
  if(checkboxClicked.checked) {
    const taskFinished = checkboxClicked.parentNode;
    const taskFinishedId = taskFinished.id;
    const deletedTask = arrayTaskToDo.splice(taskFinishedId, 1);
    arrayTaskFinished.push(deletedTask);
    toDoList.innerHTML =  handlePrintTask();
    finishedList.innerHTML =  handlePrintFinishedTask();
  }
  else {}
}

function handlePrintFinishedTask() {
  const arrayResult = arrayTaskFinished.map((task, index) => {
    return (
      `<li id=done-${index} className="list-finished__task">
        <input onclick="handleClickDoneCheckbox(event)" type="checkbox" name=${task}/>
        ${task}
      </li>`
    )
  })
  return arrayResult;
}

//listeners
buttonToAddTask.addEventListener('click', handleClickAppearModalBtn);
modalAddTaskButton.addEventListener('click', handleClickAddTask);