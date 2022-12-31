import * as projectFunction from "./modules/projectFunctions.js"
import * as taskFunction from "./modules/taskFunctions.js"
import { compareAsc, format, isValid, parse, fromUnixTime } from "date-fns"
import { qs, qsAll } from "./modules/globalFunctions.js"
import { Popup } from "./modules/popup.js";
import { generateAddTaskForm, generateEditTaskForm } from "./modules/loadPage.js";
import * as cookieController from "./modules/cookieController.js";

const taskListContainer = qs(".task-list-container");
const projectListContainer = qs("#project-list");

/* taskFunction.createTask("Personal", {
    title: "asd", dueDate: 1760502233444, description: "sdf", isImportant: true, status: false, projectName: "Personal"
})

taskFunction.createTask("Personal", {
    title: "Yo", dueDate: 1760502233444, description: "sdf", isImportant: false, status: true, projectName: "Personal"
})

taskFunction.createTask("Personal", {
    title: "Yo", dueDate: +new Date(), description: "sdf", isImportant: true, status: true, projectName: "Home"
}) */

//taskFunction.createTask("Home", {"_title":"Yo","_dueDate":1672503392837,"_description":"sdf","_isImportant":true,"_status":true,"_projectName":"Personal"})

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

    static update(projectName, showAll = leftSidebar.showAll, fav = leftSidebar.fav){
        const taskListContainer = qs("#task-list-container");
        taskListContainer.innerHTML = "";
        
        if (showAll){

            const projects = projectFunction.getProjects();
            for (let projectName of projects){
                const tasks = taskFunction.getTasks(projectName);
                tasks.forEach((task, taskIndex) => {
                    if (!this.filter(task)) return;
                    const taskDiv = this.buildTaskElement(task, projectName, taskIndex);
                    taskListContainer.append(taskDiv);
                })
            }

        }else if (fav) {
            const projects = projectFunction.getProjects();
            for (let projectName of projects){
                const tasks = taskFunction.getTasks(projectName);
                tasks.forEach((task, taskIndex) => {
                    if (!task.isImportant) return;
                    if (!this.filter(task)) return;
                    const taskDiv = this.buildTaskElement(task, projectName, taskIndex);
                    taskListContainer.append(taskDiv);
                })
            }
        }else {
            const tasks = taskFunction.getTasks(projectName);

            tasks.forEach((task, taskIndex) => {
                if (!this.filter(task)) return;
                const taskDiv = this.buildTaskElement(task, projectName, taskIndex);
                taskListContainer.append(taskDiv);
            })
        }
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
        cookieController.updateCookie();
    }

    static changeTabName(name){
        const tabDiv = qs("#tab-name");
        tabDiv.textContent = name;
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

        editOption.addEventListener("click", ()=>{
            Popup.new(generateEditTaskForm());
            this.populateEditForm(projectName, taskID);
            Popup.toggle()
            const myForm = qs(".edit-task-form");
            myForm.addEventListener("submit", (event) => {
                this.processEditForm(projectName, taskID);
                event.preventDefault();
            })
        })
        
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

    static populateEditForm(projectName, taskID){
        const currentTask = taskFunction.getSpecificTask(projectName, taskID); 
        const title = qs("#task-title");
        let dueDate = qs("#task-due-date");
        const isImportant = qs("#task-important");
        const description = qs("#task-description");
        

        title.value = currentTask.title;
        dueDate.value = format(new Date(currentTask.dueDate), "yyyy-MM-dd");
        console.log(currentTask)
        isImportant.checked = currentTask.isImportant;
        description.value = currentTask.description;
    }

    static processEditForm(projectName, taskID){
        const title = qs("#task-title").value;
        let dueDate = qs("#task-due-date").value;
        const isImportant = qs("#task-important").checked;
        const description = qs("#task-description").value;
        const myForm = qs(".edit-task-form");
        if (title && title.length > 0){
            dueDate = +new Date(dueDate);

            taskFunction.editTask(projectName, taskID, {
                title, dueDate, isImportant, description, projectName
            }); 
            cookieController.updateCookie();
            taskList.update(projectName);
            Popup.toggle();
        }
        //event.preventDefault();

        //taskList.putNew(newTask, "Default");
        myForm.reset();
    }

    static delete(projectName, taskIndex) {
        taskFunction.getTasks(projectName).splice(taskIndex, 1);
        cookieController.updateCookie();
    }



}

class addTaskForm {

    static processForm(event){
        const title = qs("#task-title").value;
        let dueDate = qs("#task-due-date").value;
        const isImportant = qs("#task-important").checked;
        let description = qs("#task-description").value;
        
        const myForm = qs(".add-task-form");
        const projectName = projectNodes.currentProject;
        let newTask;
        if (title && title.length > 0){
            dueDate = +new Date(dueDate);
            newTask = taskFunction.createTask(projectName, {
                title, dueDate, description, isImportant, projectName
            })
            Popup.toggle();
            cookieController.updateCookie();
        }
        event.preventDefault();

        taskList.putNew(newTask, projectName);
        myForm.reset();

    }

    static hideButton(){
        const addTaskPopupButton = qs("#add-task");
        addTaskPopupButton.style.visibility = "hidden";
    }

    static showButton(){
        const addTaskPopupButton = qs("#add-task");
        addTaskPopupButton.style.visibility = "visible";
    }

    static init(Popup) {
        
    const addTaskPopupButton = qs("#add-task");
    addTaskPopupButton.addEventListener("click", () => {
        const myForm = Popup.new(generateAddTaskForm())
        Popup.toggle()
        myForm.addEventListener("submit", this.processForm);
    });    
    const myForm = qs(".add-task-form");

    }

}

class leftSidebar {
    
    static showAll = false;
    static fav = false; 

    static toggle(){
        
        const sidebar = qs("#sidebar");
        if (sidebar.style.display === "none"){
            sidebar.style.display = "flex";
            sidebar.style.animation = "show 0.5s";
        }else {
            sidebar.style.animation = "hide 0.5s";
            setTimeout(() => {
                sidebar.style.display = "none";
                sidebar.style.animation = "";    
            }, 500)
        }
    }


    static init(){
        const menuBtn = qs(".menu-icon");
        const showAllOption = qs("#show-all")
        const favOption = qs("#favourite")
        showAllOption.addEventListener("click", () => {
            taskList.changeTabName("Show All Tasks")
            this.showAll = true;
            this.fav = false;
            taskList.update("");
            addTaskForm.hideButton();
            projectNodes.removeDefault();

        })
        favOption.addEventListener("click", () => {
            taskList.changeTabName("Favourite Tasks")
            this.showAll = false;
            this.fav = true;
            taskList.update("");
            addTaskForm.hideButton();
            projectNodes.removeDefault();

        })
        menuBtn.addEventListener("click", this.toggle);
    }
}

class projectNodes {
    static currentProject = projectFunction.getProjects()[0];

    static build(projectName){
        const projectsBox = qs(".projects");
        const project = document.createElement("li");
        project.setAttribute("data-project", projectName);
        project.className = "project project-inactive";
        
        const projectOptionsBox = document.createElement("div");
        projectOptionsBox.classList = "project-options";


        const projectNameDiv = document.createElement("div");
        projectNameDiv.classList = "project-name";
        projectNameDiv.textContent = projectName;

        const deleteBtn = document.createElement("img");
        deleteBtn.src = require("./res/imgs/delete-project.png");
        deleteBtn.alt = `Delete ${projectName}`;
        deleteBtn.class = "delete-project";
        deleteBtn.style.width = "16px";
        deleteBtn.style.height = "16px";

        const editBtn = document.createElement("img");
        editBtn.src = require("./res/imgs/edit-project.png");
        editBtn.alt = `Edit ${projectName}`;
        editBtn.class = "Edit-project";
        editBtn.style.width = "16px";
        editBtn.style.height = "16px";
        
        projectOptionsBox.append(projectNameDiv, editBtn, deleteBtn);
        
        deleteBtn.addEventListener("click", (e)=> {
            projectOptions.deleteProject(projectName); 
            e.stopPropagation()
        });
        editBtn.addEventListener("click", (e)=> {
            projectOptions.editProject(projectName); 
            e.stopPropagation()
        });

        
        project.append(projectOptionsBox);
        projectsBox.append(project)
        project.addEventListener("click",() => {
            addTaskForm.showButton();
            leftSidebar.showAll = false;
            leftSidebar.fav = false; 
            this.makeDefault(projectName) 
       });

        project.addEventListener("mouseover", () => { projectOptions.showOptions(projectName) });
        project.addEventListener("mouseleave", () => { projectOptions.hideOptions(projectName) });
    }

    static populateProjectBox(isUpdate=false){
        const projectsBox = qs(".projects");
        if (isUpdate) projectsBox.innerHTML = "";
        const projects = projectFunction.getProjects();
        
        for (let projectName of projects){
            this.build(projectName);
        }
    }

    static makeDefault(projectName){
        //console.log(this.currentProject, projectFunction.getProjects()[0])
        const previousProject = qs(`li[data-project="${this.currentProject}"]`);
        previousProject.classList = `project project-inactive`;
        const project = qs(`li[data-project="${projectName}"]`);
        taskList.changeTabName(projectName);
        this.currentProject = projectName;
        project.classList = `project project-active`;
        taskList.update(projectName);
    }

    static removeDefault() {
        const previousProject = qs(`li[data-project="${this.currentProject}"]`);
        previousProject.classList = `project project-inactive`;
    }

    static createNewProject(){
        const newProjectName = projectFunction.createProject("Untitled");
        this.build(newProjectName);
        cookieController.updateCookie();
    }

    static init(){
        this.populateProjectBox()
        const initialProject = projectFunction.getProjects()[0];
        this.makeDefault(initialProject)
        const addProjectBtn = qs(".add-project");
        addProjectBtn.addEventListener("click", this.createNewProject.bind(this));
    }

    static resetCurrentProject(){
        this.currentProject = projectFunction.getProjects()[0];
    }
}

class projectOptions {
    static deleteProject(projectName){
        let isDeleted = projectFunction.deleteProject(projectName);

        if (isDeleted){ 
            if (projectNodes.currentProject === projectName){
                projectNodes.resetCurrentProject();
                taskList.changeTabName(projectNodes.currentProject);
            }
            projectNodes.populateProjectBox(true);
            projectNodes.makeDefault(projectNodes.currentProject);                
        }else {
            alert("There has to be atleast one project!")
        }
        cookieController.updateCookie();
    }

    static showOptions(projectName){
        const imgs = qsAll(`.project[data-project="${projectName}"] img`);
        for (let img of imgs){
            img.style.visibility = "visible";
        }
    }

    static hideOptions(projectName){
        const imgs = qsAll(`.project[data-project="${projectName}"] img`);
        for (let img of imgs){
            img.style.visibility = "hidden";
        }
    }

    static editProject(projectName){
        const projectNameDiv = qs(`.project[data-project="${projectName}"] .project-name`);
        console.log(projectNameDiv)
        projectNameDiv.contentEditable = "true";
        projectNameDiv.focus();

        projectNameDiv.addEventListener("keypress", (e) => {
            if (e.code == "Enter") {
                projectNameDiv.blur();
            }

            if (projectNameDiv.textContent.length >= 17){
                projectNameDiv.blur();
            }
        });

        projectNameDiv.addEventListener("focusout", (e) => {
                projectNameDiv.contentEditable = "false";
                const newProjectName = projectNameDiv.textContent;
                if(projectName !== newProjectName){
                    if(projectNodes.currentProject === projectName){
                        projectNodes.currentProject = newProjectName;
                        taskList.changeTabName(projectNodes.currentProject);
                    }
                    projectFunction.editProject(projectName, newProjectName);
                    projectNodes.populateProjectBox(true);
                    projectNodes.makeDefault(projectNodes.currentProject);  
                }
                cookieController.updateCookie();
        });
    }
}

function displayController() {
    cookieController.processFetchedCookie();
    Popup.init();
    addTaskForm.init(Popup);
    taskList.update("Personal"); 
    leftSidebar.init();
    projectNodes.init();
    const taskContainerOptions = qsAll(".task-container-option");
    taskContainerOptions.forEach((option) => {
        option.addEventListener("change", () => {taskList.update(projectNodes.currentProject)});
    })
}

displayController()