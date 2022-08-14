import {Task} from "./taskModel"
import {projectList} from "./projectModel"

function createTask(projectName, jsonValue){
    const newTask = new Task(jsonValue.title, jsonValue.dueDate, jsonValue.description, jsonValue.isImportant);
    projectList[projectName].taskList.unshift(newTask);
    return newTask;
}

function editTask(projectName, taskID, jsonValue){
    const myTask = projectList[projectName][taskID];
    myTask.title = jsonValue.title;
    myTask.dueDate = jsonValue.dueDate;
    myTask.description = jsonValue.description;
    myTask.isImportant = jsonValue.isImportant;
    return myTask;
}

function deleteTask(projectName, taskID){
    const myProject = projectList[projectName];
    myProject.splice(taskID, 1);
}

function getTasks(projectName){
    return projectList[projectName].taskList;
}

function changeTaskStatus(projectName, taskID, status){
    const myTask = projectList[projectName][taskID];
    myTask.status = status;
}

export { createTask, editTask, deleteTask, getTasks, changeTaskStatus}