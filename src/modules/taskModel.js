class Task {
    
    constructor(title, dueDate, description = null, isImportant = false){
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.isImportant = isImportant;
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
        this._importantStatus = importantStatus;
    }


}

export { Task };