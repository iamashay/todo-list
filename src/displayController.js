import * as projectFunction from "./modules/projectFunctions.js"
import * as taskFunction from "./modules/taskFunctions.js"
import { compareAsc, format } from "date-fns"
import { qs } from "./modules/globalFunctions.js"

const taskListContainer = qs(".task-list-container");
const projectListContainer = qs("#project-list");

class Popup {

    static popupOverlay = qs(".popup-overlay");
    static popupBox = qs(".popup-container");

    static toggle () {
        console.log(Popup.popupOverlay)
        if (Popup.popupOverlay.style.display === "none"){
            Popup.popupOverlay.style.display = "";
        }else {
            Popup.popupOverlay.style.display = "none";
        }
    }

    static addEvents() {
        console.log(Popup.popupOverlay);
        Popup.popupOverlay.addEventListener("click", toggle);
        popupBox.addEventListener("click", (e) => e.stopPropogation);
    }

    static init() {
        Popup.addEvents();
    }

}


class addTask {
    static addTaskButton = qs("#add-task");
    
    static addEvents() {
        addTaskButton.addEventListener("click", Popup().toggle);
    }

    static init() {
        this.addEvents();
    }
}


export function displayController() {
    Popup.init();
    addTask.init();
}