/* hover effect uchun */

let headeNoteBox = document.querySelectorAll(".header-note-box");
let headerNoteText = document.querySelectorAll(".header-note-text");
let addClass = false;
for (let i = 0; i < headeNoteBox.length; i++) {

    headeNoteBox[i].addEventListener('mouseover', () => {

        for (let ix = 0; ix < headerNoteText.length; ix++) {

            headerNoteText[ix].classList.remove('opacity');
        }

        headerNoteText[i].classList.add('opacity');

        tabs(headeNoteBox[i], headerNoteText[i]);
    });
    headeNoteBox[i].addEventListener('mouseout', () => {
        for (let ix = 0; ix < headerNoteText.length; ix++) {
            headerNoteText[ix].classList.remove('opacity');
        }

    });
}

function tabs(headeNoteBox, headerNoteText) {
    headerNoteText.classList.add('opacity');
}



/* custom dropdown */
var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var listDropdown = document.getElementById("listDropdown");
var iconDropdown = document.querySelector(".iconDropdown");
var bodyhide = document.querySelector(".bodyhide");
var bodyhideInside = document.querySelector(".bodyhideInside");
var tabCloseCustom = document.querySelector(".tab-close-custom");
var ifClickBnt = false;

selectField.onclick = function () {
    listDropdown.classList.toggle("hide-dropdown");
    iconDropdown.classList.toggle("rotate-dropdown");
    bodyhide.classList.toggle("active");
    bodyhideInside.classList.toggle("active");

    if (listDropdown.classList.contains("hide-dropdown")) {
        ifClickBnt = false;
    } else {
        ifClickBnt = true;
    }
    console.log(ifClickBnt);

}

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        listDropdown.classList.toggle("hide-dropdown");
        iconDropdown.classList.toggle("rotate-dropdown");
        bodyhide.classList.remove("active");
        bodyhideInside.classList.remove("active");
        ifClickBnt = false;
    }
}
bodyhideInside.addEventListener("click", () => {
    if (ifClickBnt) {
        bodyhide.classList.remove("active");
        bodyhideInside.classList.remove("active");
        ifClickBnt = false;
        listDropdown.classList.add("hide-dropdown");
        iconDropdown.classList.remove("rotate-dropdown");

    } else {
        ifClickBnt = true;
    }
});
bodyhide.addEventListener("click", () => {
    if (ifClickBnt) {
        bodyhide.classList.remove("active");
        bodyhideInside.classList.remove("active");
        ifClickBnt = false;
        listDropdown.classList.add("hide-dropdown");
        iconDropdown.classList.remove("rotate-dropdown");

    } else {
        ifClickBnt = true;
    }
});