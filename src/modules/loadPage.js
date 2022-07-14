function generateHeader(){
    const header = document.createElement("header");

    const menuIcon = generateMenuLines();
    header.appendChild(menuIcon);

    const logoText = document.createElement("div");
    logoText.id = "logo";
    logoText.textContent = "MyToDo";
    header.appendChild(logoText);

    return header;
}

function generateMenuLines(){
    const menuIcon = document.createElement("div");
    menuIcon.classList = "menu-icon";

    for(let i=0; i < 3; i++){
        let line = document.createElement("span");
        line.classList = "line";
        menuIcon.appendChild(line);
    }
    return menuIcon;
}

function generateSidebarOption(title) { //currently creating a seperate function for the sidebar options
    const optionId = title.toLowerCase().replaceAll(" ", "-");
    
    const option = document.createElement("div");
    option.classList = "sidebar-option";
    option.id = optionId;
    const optionImg = new Image();
    optionImg.src = require(`../res/imgs/${optionId}.png`);
    optionImg.alt = title+" icon";
    
    const optionTitle = document.createElement("span");
    optionTitle.class = "option-title";
    optionTitle.textContent = title;

    option.appendChild(optionImg);
    option.appendChild(optionTitle);
    
    return option;
}

function generateProjectContainer(){
    const projectContainer = document.createElement("div");
    const title = document.createElement("div");
    title.textContent = "Projects"
    title.id = "projects-heading";

    const projectList = document.createElement("div");
    projectList.id = "project-list";

    const addProject = document.createElement("div");
    addProject.classList = "add-project sidebar-option";
    const addProjectImg = new Image();
    addProjectImg.src = require("../res/imgs/add-project.png")
    addProjectImg.alt = "add project icon"
    const addProjectTitle = document.createElement("span");
    addProjectTitle.textContent = "Add Project";

    addProject.appendChild(addProjectImg);
    addProject.appendChild(addProjectTitle);

    projectList.appendChild(addProject);

    projectContainer.appendChild(title);
    projectContainer.appendChild(projectList);

    return projectContainer;
}

function generateSidebar() {
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    const showAllOption = generateSidebarOption("Show All");
    sidebar.appendChild(showAllOption)

    const projectContainer = generateProjectContainer();
    sidebar.appendChild(projectContainer)


    return sidebar;
}

function generateWhenOptionContainer(...options){
    const whenOptionContainer = document.createElement("select");
    whenOptionContainer.classList = "when-options task-container-option";

    options.forEach((option) => {
        const optionDiv = document.createElement("option");
        optionDiv.value = `${option.toLowerCase()}`;
        optionDiv.textContent = option;
        whenOptionContainer.appendChild(optionDiv);
    })

    return whenOptionContainer;
}

function generateStatusOptionContainer(...options){
    /*
    const statusOptionLabel = document.createElement("label");
    statusOptionLabel.for = "status-option";
    statusOptionLabel.textContent = "Status:"
    */

    const statusOption = document.createElement("select");
    statusOption.classList = "status-option task-container-option";

    options.forEach((option) => {
        const optionDiv = document.createElement("option");
        optionDiv.value = option;
        optionDiv.textContent = option;
        statusOption.appendChild(optionDiv);
    })

    //statusOptionContainer.appendChild(statusOptionLabel);

    return statusOption;
}


function generateTaskOptionContainer(){
    const taskOptionContainer = document.createElement("div");
    taskOptionContainer.classList = "task-options";
    
    const selectBoxContainer = document.createElement("div");
    selectBoxContainer.className = "select-box-container";

    const whenOptionContainer = generateWhenOptionContainer("Upcoming", "Today", "Past");

    const statusOptionContainer = generateStatusOptionContainer("Unfinished", "All", "Completed");

    selectBoxContainer.appendChild(whenOptionContainer);
    selectBoxContainer.appendChild(statusOptionContainer);

    const addTaskButton = document.createElement("button");
    addTaskButton.id = "add-task"
    addTaskButton.textContent = "+ Add Task";

    const secondOptionContainer = document.createElement("div");
    secondOptionContainer.className = "second-option-container";

    taskOptionContainer.appendChild(selectBoxContainer);
    secondOptionContainer.appendChild(addTaskButton);
    taskOptionContainer.appendChild(secondOptionContainer);
    
    return taskOptionContainer;
}

function generateTaskListContainer(){
    const taskListContainer = document.createElement("div");
    taskListContainer.id = "task-list-container";
    
    return taskListContainer;
}

function generateDemoTaskDiv(title, date){

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const taskTitle = document.createElement("div");
    taskTitle.className = "task-tile";
    taskTitle.textContent = title;

    const taskStatus = document.createElement("input");
    taskStatus.type = "checkbox";
    taskStatus.className = "task-status";

    const taskDate = document.createElement("div");
    taskDate.className = "task-date";
    taskDate.textContent = date;

    const taskImportant = document.createElement("img");
    taskImportant.className = "task-important";
    taskImportant.src = require("../res/imgs/star-icon.png");

    const taskOptions = document.createElement("div");
    taskOptions.className = "task-options";
    taskOptions.textContent = "||";

    const leftTaskContainer = document.createElement("div");
    leftTaskContainer.className = "left-task-container";

    const rightTaskContainer = document.createElement("div");
    rightTaskContainer.className = "right-task-container";

    leftTaskContainer.appendChild(taskStatus);
    leftTaskContainer.appendChild(taskTitle);
    rightTaskContainer.appendChild(taskDate);
    rightTaskContainer.appendChild(taskImportant);
    rightTaskContainer.appendChild(taskOptions);

    taskDiv.appendChild(leftTaskContainer);
    taskDiv.appendChild(rightTaskContainer);

    return taskDiv;
}

function generateTaskContainer(){
    const taskContainer = document.createElement("div");
    taskContainer.id = "task-container";

    const taskOptionContainer = generateTaskOptionContainer();  
    const taskListContainer = generateTaskListContainer();

    const taskDemoDiv = generateDemoTaskDiv("DO 4 push ups", "12/06/2022");
    taskListContainer.appendChild(taskDemoDiv);

    taskContainer.appendChild(taskOptionContainer);
    taskContainer.appendChild(taskListContainer);
    return taskContainer;
}

export const loadPage = () => {
    const body = document.body;
    const header = generateHeader();

    const mainContainer = document.createElement("div");
    mainContainer.id = "main-container";

    const sidebar = generateSidebar();
    const taskContainer = generateTaskContainer();

    mainContainer.appendChild(sidebar);
    mainContainer.appendChild(taskContainer);

    body.appendChild(header);
    body.appendChild(mainContainer);



}