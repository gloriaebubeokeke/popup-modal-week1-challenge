const popupModal = document.getElementById("popup-modal")
const optionsPop = document.getElementById('no-msg')
const exitPop = document.getElementById('exit-msg')

function openPopup() {
popupModal.style.display = "flex";
    optionsPop.style.display = "none";
    exitPop.style.display = "none";}

function exitPopup() {
popupModal.style.display = "none";
    exitPop.style.display = "block";
    optionsPop.style.display = "none";


    setTimeout(()=>{
        exitPop.style.display='none'
    }, 1000)
}

function optionsPopup(){
popupModal.style.display = "none";
    optionsPop.style.display = "block";
    exitPop.style.display = "none";

setTimeout(()=>{
    optionsPop.style.display='none'
}, 1000)
}