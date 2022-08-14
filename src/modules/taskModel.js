class Task {
    
    constructor(title, dueDate, description = null, isImportant = false, status = false){
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.isImportant = isImportant;
        this.status = status;
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
        if (!newDescription) return;
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


}

export { Task };