'use strict';

const buttonToAddTask = document.querySelector('.button__add-task');
const toDoList = document.querySelector('.main__list-to-do');
const finishedList = document.querySelector('.main__list-finished');
const modal = document.querySelector('.page__modal');


function handleClickAddButton(event) {
  modal.classList.remove('hidden');
}

//listeners
buttonToAddTask.addEventListener('click', handleClickAddButton);