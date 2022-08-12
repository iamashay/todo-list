import * as projectFunction from "./modules/projectFunctions.js"
import * as taskFunction from "./modules/taskFunctions.js"
import { compareAsc, format, isValid, parse, fromUnixTime } from "date-fns"
import { qs } from "./modules/globalFunctions.js"

const taskListContainer = qs(".task-list-container");
const projectListContainer = qs("#project-list");

class Popup {

    static toggle() {
        const popupOverlay = qs(".popup-overlay");
        const popupContainer = qs(".popup-container");

        if (popupOverlay.style.display === "none"){
            popupOverlay.style.display = "";
            popupOverlay.style.animation = "openPopup 0.5s";
        }else {
            popupOverlay.style.animation = "removePopup 0.5s";
            setTimeout(() => {
                popupOverlay.style.display = "none";
                popupOverlay.style.animation = "";    
            }, 500)
        }
    }


    static addEvents() {
        const popupOverlay = qs(".popup-overlay");
        const popupContainer = qs(".popup-container");
        const closePopupBut = qs(".close-popup");

        popupContainer.addEventListener("click", (e) => e.stopPropagation());
        popupOverlay.addEventListener("click", this.toggle);
        closePopupBut.addEventListener("click", this.toggle);


    }

    static init() {
        this.addEvents();
    }

}

class taskList {

    static buildTaskElement(task, projectName, taskID) {
        const title = task.title;
        const date =  format(new Date(task.dueDate), "dd/MM/yyyy");

        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.setAttribute("data-project", projectName);
        taskDiv.setAttribute("data-task", taskID);
    
        const taskTitle = document.createElement("div");
        taskTitle.className = "task-tile";
        taskTitle.textContent = title;
    
        //Custom checkbox
        const taskStatusLabel = document.createElement("label");
        taskStatusLabel.className = "check-container";
    
        const taskStatus = document.createElement("input");
        taskStatus.type = "checkbox";
        taskStatus.classList = "task-status checkbox";
    
        const taskStatusCheckmark = document.createElement("span");
        taskStatusCheckmark.className = "checkmark";
    
        taskStatusLabel.appendChild(taskStatus);
        taskStatusLabel.appendChild(taskStatusCheckmark);
    
        //custom checkbox end
    
        const taskDate = document.createElement("div");
        taskDate.className = "task-date";
        taskDate.textContent = date;
    
        const taskImportant = document.createElement("img");
        taskImportant.className = "task-important";
        taskImportant.src = require("./res/imgs/star-icon.png");
    
        const taskOptions = document.createElement("div");
        taskOptions.className = "task-menu";
        taskOptions.textContent = "⋮";
    
        const leftTaskContainer = document.createElement("div");
        leftTaskContainer.className = "left-task-container";
    
        const rightTaskContainer = document.createElement("div");
        rightTaskContainer.className = "right-task-container";
    
        leftTaskContainer.appendChild(taskStatusLabel);
        leftTaskContainer.appendChild(taskTitle);
        rightTaskContainer.appendChild(taskDate);
        rightTaskContainer.appendChild(taskImportant);
        rightTaskContainer.appendChild(taskOptions);
    
        taskDiv.appendChild(leftTaskContainer);
        taskDiv.appendChild(rightTaskContainer);
    
        return taskDiv;
    }

    static update(projectName){
        const taskListContainer = qs("#task-list-container");
        taskListContainer.innerHTML = "";
        const tasks = taskFunction.getTasks(projectName);

        tasks.forEach((task, index) => {
            taskListContainer.append(this.buildTaskElement(task, projectName, index));
        })
    }
}

class addTaskForm {

    static processForm(event){
        const title = qs("#task-title").value;
        let dueDate = qs("#task-due-date").value;
        const isImportant = qs("#task-important").checked;
        const description = qs("#task-description").value;
        const myForm = qs(".add-task-form");

        if (title && title.length > 0){
            dueDate = +new Date(dueDate);
            taskFunction.createTask("Default", {
                title, dueDate, description, isImportant
            })
            console.log(taskFunction.getTasks("Default"))
            Popup.toggle();
        }
        event.preventDefault();

        taskList.update("Default");
        myForm.reset();
    }

    static addEvents(popupToggle) {

        const addTaskPopupButton = qs("#add-task");
        addTaskPopupButton.addEventListener("click", popupToggle);

        const myForm = qs(".add-task-form");

        myForm.addEventListener("submit", this.processForm);
    }

    static init(popupToggle) {
        this.addEvents(popupToggle);
    }

}


function displayController() {
    
    Popup.init();
    addTaskForm.init(Popup.toggle);

}

displayController()