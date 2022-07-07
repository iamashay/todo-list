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

function generateSidebar() {
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    sidebar.textContent = "SIDEBAR"
    return sidebar;
}

function generateTaskContainer(){
    const taskContainer = document.createElement("div");
    taskContainer.id = "task-container";
    taskContainer.textContent = "TASKS' CONTAINER"
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