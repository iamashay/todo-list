import {Task} from "./taskModel"
import {projectList} from "./projectModel"

function createTask(projectName, title, dueDate, description, isImportant){
    const newTask = new Task(title, dueDate, description, isImportant);
}