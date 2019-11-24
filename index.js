'use strict';

const buttonToAddTask = document.querySelector('.button__add-task');
const toDoList = document.querySelector('.main__list-to-do');
const finishedList = document.querySelector('.main__list-finished');
const modal = document.querySelector('.page__modal');
const modalTaskInput = document.querySelector('.modal__input');
const modalAddTaskButton = document.querySelector('.modal__button');


function handleClickAddButton(event) {
  modal.classList.remove('hidden');
}

function handleClickModalAddBtn(event) {
  const newTaskToAdd = modalTaskInput.value;
  console.log(newTaskToAdd);
}

//listeners
buttonToAddTask.addEventListener('click', handleClickAddButton);
modalAddTaskButton.addEventListener('click', handleClickModalAddBtn);