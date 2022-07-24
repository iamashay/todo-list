import {Project, projectList} from "./projectModel.js"

function createProject(projectName){
    const newProject = new Project(projectName);
    projectList[projectName] = newProject;
    return newProject;
}

function editProject(oldProjectName, newProjectName){
    const myProject = projectList[oldProjectName];
    if (!(newProjectName in projectList)) {
        myProject.name = projectName;
        //create a propery with the new name and copy old property's data to it
        projectList[projectName] = projectList[oldProjectName]; 
        //delete the old property
        delete projectList[oldProjectName];
    }
    return myProject;
}

function deleteProject(projectName){
    if (projectName in projectList){
        delete projectList[projectName];
        return true;
    }
    return false;
}