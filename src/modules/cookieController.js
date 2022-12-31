import {getProjectList, emptyProjectList} from "./projectModel.js"
import { createProject } from "./projectFunctions.js";
import {createTask} from "./taskFunctions"

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function sanitizeData(data){
    return data.replaceAll('"_', '"');
}

function updateCookie(){
    const data = getProjectList();
    if (storageAvailable("localStorage")){
        const projectData = sanitizeData(JSON.stringify(data))
        localStorage.setItem('projectList', projectData);
    } 
}

function fetchCookie(){
    if (storageAvailable("localStorage")){
        let data = localStorage.getItem("projectList");
        data = JSON.parse(data);
        return data
    } 
    return false
}

function processFetchedCookie(){
    const data = fetchCookie()
    if (data){
        emptyProjectList();
        for (let project of Object.keys(data)){
            createProject(project)
            for (let task of data[project].taskList){
                createTask(project, task)
            }
        }

    }
}

function resetCookie(){
    if (storageAvailable("localStorage")){
        localStorage.removeItem('projectList');
    } 
}

/* setInterval(()=> {
    console.log(getProjectList());
},2000) */

export {updateCookie, processFetchedCookie, resetCookie}