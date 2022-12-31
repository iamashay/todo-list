let projectList = {}

class Project {
    
    constructor(name) {
        this.name = name;
        this.taskList = [];
    }

    get name(){
        return this.name;
    }

    set name(newName){
        this._name = newName;
    }
}

function getProjectList(){
    return projectList;
}

function emptyProjectList(data){
    projectList = {};
}

export { Project, projectList, getProjectList, emptyProjectList};