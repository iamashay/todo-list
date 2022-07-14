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
    addProject.classList = "add-project";
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
    const whenOptionContainer = document.createElement("div");
    whenOptionContainer.classList = "when-options";

    options.forEach((option) => {
        const optionDiv = document.createElement("div");
        optionDiv.classList = `${option.toLowerCase()}-option`;
        optionDiv.textContent = option;
        whenOptionContainer.appendChild(optionDiv);
    })

    return whenOptionContainer;
}

function generateStatusOptionContainer(...options){
    const statusOptionContainer = document.createElement("div");
    statusOptionContainer.classList = "status-options";

    const statusOptionLabel = document.createElement("label");
    statusOptionLabel.for = "status-option";
    statusOptionLabel.textContent = "Status:"

    const statusOption = document.createElement("select");
    statusOption.id = "status-option";

    options.forEach((option) => {
        const optionDiv = document.createElement("option");
        optionDiv.value = option;
        optionDiv.textContent = option;
        statusOption.appendChild(optionDiv);
    })

    statusOptionContainer.appendChild(statusOptionLabel);
    statusOptionContainer.appendChild(statusOption);

    return statusOptionContainer;
}


function generateTaskOptionContainer(){
    const taskOptionContainer = document.createElement("div");
    taskOptionContainer.classList = "task-options";

    const whenOptionContainer = generateWhenOptionContainer("Upcoming", "Today", "Past");

    const statusOptionContainer = generateStatusOptionContainer("Unfinished", "All", "Completed");

    const addTaskButton = document.createElement("button");
    addTaskButton.id = "add-task"
    addTaskButton.textContent = "+ Add Task";

    taskOptionContainer.appendChild(whenOptionContainer);
    taskOptionContainer.appendChild(statusOptionContainer);
    taskOptionContainer.appendChild(addTaskButton);
    
    return taskOptionContainer;
}

function generateTaskListContainer(){
    const taskListContainer = document.createElement("div");
    taskListContainer.id = "task-list-container"
}

function generateTaskContainer(){
    const taskContainer = document.createElement("div");
    taskContainer.id = "task-container";

    const taskOptionContainer = generateTaskOptionContainer();  

    taskContainer.appendChild(taskOptionContainer);
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