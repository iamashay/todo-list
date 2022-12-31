class Task {
    
    constructor(title, dueDate, description = "", isImportant = false, status = false, projectName = ""){
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.isImportant = isImportant;
        this.status = status;
        this.projectName = projectName;
    }

    get title(){
        return this._title;
    }

    set title(newTitle){
        if (!newTitle) return;
        this._title = newTitle;
    }

    get dueDate(){
        return this._dueDate;
    }

    set dueDate(newdueDate){
        if (!newdueDate) return;
        this._dueDate = newdueDate;
    }

    get description(){
        return this._description;
    }

    set description(newDescription){
        this._description = newDescription;
    }

    get isImportant(){
        return this._isImportant;
    }

    set isImportant(importantStatus){
        if (typeof importantStatus !== "boolean") return;
        this._isImportant = importantStatus;
    }

    get status(){
        return this._status;
    }

    set status(newStatus){
        this._status = newStatus;
    }

    get projectName(){
        return this._projectName;
    }

    set projectName(newProjectName){
        this._projectName = newProjectName;
    }

}

export { Task };