import { qs, qsAll } from "./globalFunctions.js"

export class Popup {

    static new(myForm){
        const popupContainer = qs(".popup-container");
        popupContainer.innerHTML = "";
        const closePopupBut = document.createElement("div");
        closePopupBut.className = "close-popup";
        closePopupBut.textContent = "X";
        closePopupBut.addEventListener("click", this.toggle);
        popupContainer.append(closePopupBut, myForm);
        return myForm;
    }

    static toggle() {
        const popupOverlay = qs(".popup-overlay");
        const popupContainer = qs(".popup-container");

        if (popupOverlay.style.display === "none"){
            popupOverlay.style.display = "";
            popupOverlay.style.animation = "show 0.5s";
        }else {
            popupOverlay.style.animation = "hide 0.5s";
            setTimeout(() => {
                popupOverlay.style.display = "none";
                popupOverlay.style.animation = "";    
            }, 500)
        }
    }


    static addEvents() {
        const popupOverlay = qs(".popup-overlay");
        const popupContainer = qs(".popup-container");

        popupContainer.addEventListener("click", (e) => e.stopPropagation());
        popupOverlay.addEventListener("click", this.toggle);
 

    }

    static init() {
        this.addEvents();
    }

}
