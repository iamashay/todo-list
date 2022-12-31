import {Project, projectList} from "./projectModel.js"


function makeNameUnique(projectName){
    let i = 1;
    let tempName = projectName;
    while (tempName in projectList){
        tempName = projectName;
        tempName += "-"+i;
        i++;
    }
    return tempName;
}

function createProject(projectName){
    projectName = makeNameUnique(projectName);
    const newProject = new Project(projectName);
    projectList[projectName] = newProject;
    return projectName;
}

createProject("Personal");
/* createProject("Personal")
createProject("Job")
createProject("Home")
createProject("College") */

function editProject(oldProjectName, newProjectName){
    const myProject = projectList[oldProjectName];
    if (!(newProjectName in projectList)) {
        myProject.name = newProjectName;
        //create a propery with the new name and copy old property's data to it
        projectList[newProjectName] = projectList[oldProjectName]; 
        //delete the old property
        delete projectList[oldProjectName];
    }
    return myProject;
}

function deleteProject(projectName){
    if (Object.getOwnPropertyNames(projectList).length == 1) return;

    if (projectName in projectList){
        delete projectList[projectName];
        return true;
    }
    return false;
}

function getProjects() {
    return Object.getOwnPropertyNames(projectList);
}


export {createProject, editProject, deleteProject, getProjects}