import {Task} from "./taskModel"
import {projectList} from "./projectModel"

function createTask(projectName, jsonValue){
    const newTask = new Task(jsonValue.title, jsonValue.dueDate, jsonValue.description, jsonValue.isImportant, jsonValue.status, jsonValue.projectName);
    projectList[projectName].taskList.unshift(newTask);
    return newTask;
}

function editTask(projectName, taskID, jsonValue){
    const myTask = projectList[projectName].taskList[taskID];
    myTask.title = jsonValue.title;
    myTask.dueDate = jsonValue.dueDate;
    myTask.description = jsonValue.description;
    myTask.isImportant = jsonValue.isImportant;
    myTask.projectName = jsonValue.projectName;
    return myTask;
}

function deleteTask(projectName, taskID){
    const myProject = projectList[projectName];
    myProject.splice(taskID, 1);
}

function getTasks(projectName){
    return projectList[projectName].taskList;
}

function getSpecificTask(projectName, taskID){
    return projectList[projectName].taskList[taskID];
}

function changeTaskStatus(projectName, taskID, status){
    const myTask = projectList[projectName].taskList[taskID];
    myTask.status = status;
}


export { createTask, editTask, deleteTask, getTasks, getSpecificTask, changeTaskStatus}