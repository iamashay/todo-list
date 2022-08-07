import * as projectFunction from "./modules/projectFunctions.js"
import * as taskFunction from "./modules/taskFunctions.js"
import { compareAsc, format } from "date-fns"
import { qs } from "./modules/globalFunctions.js"

const taskListContainer = qs(".task-list-container");
const projectListContainer = qs("#project-list");

class Popup {

    static toggle() {
        const popupOverlay = qs(".popup-overlay");
        const popupContainer = qs(".popup-container");

        console.log(this.popupOverlay)
        if (popupOverlay.style.display === "none"){
            popupOverlay.style.display = "";
            popupOverlay.style.animation = "openPopup 0.5s";
        }else {
            popupOverlay.style.animation = "removePopup 0.5s";
            setTimeout(() => {
                popupOverlay.style.display = "none";
                popupOverlay.style.animation = "";    
            }, 500)
        }
    }

    static addEvents() {
        const popupOverlay = qs(".popup-overlay");
        const popupContainer = qs(".popup-container");
        const closePopupBut = qs(".close-popup");

        popupContainer.addEventListener("click", (e) => e.stopPropagation());
        popupOverlay.addEventListener("click", this.toggle);
        closePopupBut.addEventListener("click", this.toggle);


    }

    static init() {
        this.addEvents();
    }

}



class addTaskForm {
    static addEvents(popupToggle) {
        const addTaskPopupButton = qs("#add-task");
        addTaskPopupButton.addEventListener("click", popupToggle);
    }

    static init(popupToggle) {
        this.addEvents(popupToggle);
    }
}


function displayController() {
    Popup.init();
    addTaskForm.init(Popup.toggle);
}
displayController()