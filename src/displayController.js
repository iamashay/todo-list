import * as projectFunction from "./modules/projectFunctions.js"
import * as taskFunction from "./modules/taskFunctions.js"
import { compareAsc, format, isValid, parse, fromUnixTime } from "date-fns"
import { qs, qsAll } from "./modules/globalFunctions.js"

const taskListContainer = qs(".task-list-container");
const projectListContainer = qs("#project-list");

taskFunction.createTask("Default", {
    title: "asd", dueDate: 1760502233444, description: "sdf", isImportant: true, status: false
})

taskFunction.createTask("Default", {
    title: "Yo", dueDate: 1760502233444, description: "sdf", isImportant: false, status: true
})

taskFunction.createTask("Default", {
    title: "Yo", dueDate: +new Date(), description: "sdf", isImportant: true, status: true
})


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
        const date =  format(new Date(task.dueDate), "do MMMM, yyyy");
        const isImportant = task.isImportant;
        const description = task.description;
        const taskStatus = task.status;

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
    
        const taskStatusDiv = document.createElement("input");
        taskStatusDiv.type = "checkbox";
        taskStatusDiv.classList = "task-status checkbox";
        taskStatusDiv.checked = taskStatus;
        const taskStatusCheckmark = document.createElement("span");
        taskStatusCheckmark.className = "checkmark";
        
        taskStatusDiv.addEventListener("change", () => this.markTaskStatus(task, projectName, taskID));

        taskStatusLabel.appendChild(taskStatusDiv);
        taskStatusLabel.appendChild(taskStatusCheckmark);
    
        //custom checkbox end
    
        const taskDate = document.createElement("div");
        taskDate.className = "task-date";
        taskDate.textContent = date;
    
        const taskImportant = document.createElement("img");
        taskImportant.className = "task-important";
        taskImportant.src = require("./res/imgs/star-icon.png");

        if (!isImportant){
            taskImportant.style.filter = "grayscale(1)";
        }

        taskImportant.addEventListener("click", () => this.markImportant(task, projectName, taskID));
        

        const dropdowmTaskOptions = taskDropdownMenu.build(projectName, taskID);
    
        const leftTaskContainer = document.createElement("div");
        leftTaskContainer.className = "left-task-container";
    
        const rightTaskContainer = document.createElement("div");
        rightTaskContainer.className = "right-task-container";
    
        leftTaskContainer.appendChild(taskStatusLabel);
        leftTaskContainer.appendChild(taskTitle);
        rightTaskContainer.appendChild(taskDate);
        rightTaskContainer.appendChild(taskImportant);
        rightTaskContainer.appendChild(dropdowmTaskOptions);
    
        taskDiv.appendChild(leftTaskContainer);
        taskDiv.appendChild(rightTaskContainer);
    
        return taskDiv;
    }  

    static filter(task){
        const whenOption = qs(".when-options");
        const statusOption = qs(".status-option");

        const taskDueDate = new Date(new Date(task.dueDate).toDateString());
        const currentDate = new Date(new Date().toDateString()); //removing time from the date
        const compareDate = compareAsc(taskDueDate, currentDate);
        let filterPassed = 0;
        let currentWhenOptionValue;

        if (whenOption.value === "upcoming"){
            currentWhenOptionValue = 1;
        }else if(whenOption.value === "today"){
            currentWhenOptionValue = 0;
        }else if(whenOption.value === "past"){
            currentWhenOptionValue = -1;
        }

        if (compareDate === currentWhenOptionValue) filterPassed++;

        let currentStatusOptionValue;
        const taskStatus = task.status;
        if (statusOption.value === "unfinished"){
            currentStatusOptionValue = false;
        }else if(statusOption.value === "all"){
            if (filterPassed === 1) return true;
        }else if(statusOption.value === "completed"){
            currentStatusOptionValue = true;
        }

        if (currentStatusOptionValue === taskStatus) filterPassed++;

        if (filterPassed === 2) return true; //check if the task has passed both when and status filter
        
        return false;
    }

    static putNew(task, projectName){
        const taskListContainer = qs("#task-list-container");
        const taskIndex = 0;
        const taskDiv = this.buildTaskElement(task, projectName, taskIndex);
        taskListContainer.prepend(taskDiv);
    }

    static update(projectName){
        const taskListContainer = qs("#task-list-container");
        taskListContainer.innerHTML = "";
        const tasks = taskFunction.getTasks(projectName);

        tasks.forEach((task, taskIndex) => {
            if (!this.filter(task)) return;
            const taskDiv = this.buildTaskElement(task, projectName, taskIndex);
            taskListContainer.append(taskDiv);
        })
    }

    static markTaskStatus(task, projectName, taskIndex){
        const checkbox = qs(`.task[data-project="${projectName}"][data-task="${taskIndex}"] input`);
        task.status = checkbox.checked;
    }

    static markImportant(task, projectName, taskIndex){
        const starImage = qs(`.task[data-project="${projectName}"][data-task="${taskIndex}"] .task-important`);
        if(starImage.style.filter === "grayscale(1)"){
            starImage.style.filter = "";
            task.isImportant = true;
        }else{
            starImage.style.filter = "grayscale(1)"
            task.isImportant = false;
        }
    
    }

}



class taskDropdownMenu {
    static build(projectName, taskID){
        const dropdown = document.createElement("div");
        dropdown.className = "dropdown";
        
        const taskOptions = document.createElement("div");
        taskOptions.className = "task-menu";
        taskOptions.textContent = "⋮";

        const dropdownContent = document.createElement("div");
        dropdownContent.className = "dropdown-content";

        const editOption = document.createElement("div");
        editOption.textContent = "Edit";
        editOption.className = "edit-task";
        editOption.className = "dropdown-option";
        
        const removeOption = document.createElement("div");
        removeOption.textContent = "Remove";
        removeOption.className = "remove-task";
        removeOption.className = "dropdown-option";

        //editOption.addEventListener("click", ()=>this.delete(projectName, taskID));
        removeOption.addEventListener("click", ()=>{
        
            this.delete(projectName, taskID)
            taskList.update(projectName);
        })

        dropdownContent.append(editOption, removeOption);
        dropdown.append(taskOptions, dropdownContent);

        return dropdown;
    }

    static delete(projectName, taskIndex){
        taskFunction.getTasks(projectName).splice(taskIndex, 1);
    }


}

class addTaskForm {

    static processForm(event){
        const title = qs("#task-title").value;
        let dueDate = qs("#task-due-date").value;
        const isImportant = qs("#task-important").checked;
        const description = qs("#task-description").value;
        const myForm = qs(".add-task-form");

        let newTask;
        if (title && title.length > 0){
            dueDate = +new Date(dueDate);
            newTask = taskFunction.createTask("Default", {
                title, dueDate, description, isImportant
            })
            Popup.toggle();
        }
        event.preventDefault();

        taskList.putNew(newTask, "Default");
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
    taskList.update("Default");

    const taskContainerOptions = qsAll(".task-container-option");
    taskContainerOptions.forEach((option) => {
        option.addEventListener("change", () => {taskList.update("Default")});
    })
}

displayController()