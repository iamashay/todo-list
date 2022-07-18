const projectList = {}

class Project {
    
    constructor(name) {
        this.name = name;
        this.taskList = [];
    }

    get name(){
        return this.name;
    }

    set name(newName){
        this.name = newName;
    }
}

export { Project, projectList };