/*
==========================================
UI Module
==========================================
*/

function initializeUI(){

    updateProgress(0);

}

function updateProgress(percent){

    const progressFill=document.getElementById("progressFill");

    const progressText=document.getElementById("progressText");

    progressFill.style.width=`${percent}%`;

    progressText.textContent=`${percent}%`;

}
