'use strict';

const buttonToAddTask = document.querySelector('.button__add-task');
const toDoList = document.querySelector('.main__list-to-do');
const finishedList = document.querySelector('.main__list-finished');
const modalAddTaskButton = document.querySelector('.modal__button');
const modal = document.querySelector('.page__modal');
const modalTaskInput = document.querySelector('.modal__input');
const pageWrapper = document.querySelector('.page__app-wrapper');

let arrayTaskToDo = [];
let arrayTaskFinished = [];

let storedToDoList = JSON.parse(localStorage.getItem("arrayTaskToDo"));
if(storedToDoList) {
  arrayTaskToDo = storedToDoList;
  toDoList.innerHTML =  handlePrintTask();
}
let storedDoneList = JSON.parse(localStorage.getItem("arrayTaskDone"));
if(storedDoneList) {
  arrayTaskFinished = storedDoneList;
  finishedList.innerHTML = handlePrintFinishedTask();
}

function handleClickAppearModalBtn(event) {
  pageWrapper.classList.add('disabled');
  modal.classList.remove('hidden');
  modalTaskInput.value = "";
}

function handleClickAddTask(event) {
  modal.classList.add('hidden');
  pageWrapper.classList.remove('disabled');
  let newTaskToAdd = modalTaskInput.value;
  if(newTaskToAdd === "") {
    alert("Debes introducir una tarea! 😮");
  }
  else {
    arrayTaskToDo.push(newTaskToAdd);
    toDoList.innerHTML =  handlePrintTask();
    localStorage.setItem("arrayTaskToDo", JSON.stringify(arrayTaskToDo));
  }
}

function handlePrintTask() {
  const result = arrayTaskToDo.map((task, index) => {
    return (
      `<li id=${index} class="list-to-do__task">
        <label class="container">${task}
          <input onclick="handleClickCheckbox(event)" type="checkbox" name=${task}/>
          <span class="checkmark"></span>
        </label>
      </li>`
    )
  })
  return result.join("")
}

function handleClickCheckbox(event) {
  const checkboxClicked = event.currentTarget;
  if(checkboxClicked.checked) {
    const taskFinished = checkboxClicked.parentNode.parentNode;
    const taskFinishedId = taskFinished.id;
    const deletedTask = arrayTaskToDo.splice(taskFinishedId, 1);
    arrayTaskFinished.push(deletedTask[0]);
    toDoList.innerHTML =  handlePrintTask();
    finishedList.innerHTML =  handlePrintFinishedTask();
    localStorage.setItem("arrayTaskToDo", JSON.stringify(arrayTaskToDo));
    localStorage.setItem("arrayTaskDone", JSON.stringify(arrayTaskFinished));
  }
  else {}
}

function handlePrintFinishedTask() {
  const arrayResult = arrayTaskFinished.map((task, index) => {
    return (
      `<li id=done-${index} class="list-finished__task">
        <label class="container"><del>${task}<del>
          <input onclick="handleClickDoneCheckbox(event)" type="checkbox" checked="checked" name=${task}/>
          <span class="checkmark"></span>
        </label>
      </li>`
    )
  })
  return arrayResult.join("");
}

function handleClickDoneCheckbox(event) {
  const checkboxClicked = event.currentTarget;
  if(!checkboxClicked.checked) {
    const taskIsNotFinished = checkboxClicked.parentNode.parentNode.parentNode.parentNode;
    const taskIsNotFinishedId = taskIsNotFinished.id.replace("done-", "");
    const deletedFinishedTask = arrayTaskFinished.splice(taskIsNotFinishedId, 1);
    arrayTaskToDo.push(deletedFinishedTask[0]);
    toDoList.innerHTML =  handlePrintTask();
    finishedList.innerHTML =  handlePrintFinishedTask();
    localStorage.setItem("arrayTaskToDo", JSON.stringify(arrayTaskToDo));
    localStorage.setItem("arrayTaskDone", JSON.stringify(arrayTaskFinished));
  }
  else {}
}

function setCurrentDate () {
  const today = new Date();
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const dayOfWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const dayWeekNumber = today.getDay();
  const monthNumber = today.getMonth();
  const currentYear = today.getFullYear();
  const curentMonth = months[monthNumber];
  const currentDayOfWeek = dayOfWeek[dayWeekNumber];
  const currentDay = today.getDate();

  const dateDay = document.querySelector('.header__date__day');
  const dateYearAndMonth = document.querySelector('.header__date__year');
  const dateWeek = document.querySelector('.date__day-week');

  dateDay.innerHTML = currentDay;
  dateYearAndMonth.innerHTML = `${curentMonth}, ${currentYear}`;
  dateWeek.innerHTML = currentDayOfWeek;
}

setCurrentDate();

//listeners
buttonToAddTask.addEventListener('click', handleClickAppearModalBtn);
modalAddTaskButton.addEventListener('click', handleClickAddTask);