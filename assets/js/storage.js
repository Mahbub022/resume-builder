/*
==========================================
Storage Module
Commit 002
Version : v0.2.0
==========================================
*/

"use strict";

const STORAGE_KEY = "resume-builder-current";

/*
|--------------------------------------------------------------------------
| Save Resume
|--------------------------------------------------------------------------
*/

function saveResume() {

    try {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(resume)

        );

        console.log("Resume saved.");

    }

    catch (error) {

        console.error("Save Error", error);

    }

}

/*
|--------------------------------------------------------------------------
| Load Resume
|--------------------------------------------------------------------------
*/

function loadResume() {

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data)
        return;

    try {

        const parsed = JSON.parse(data);

        Object.assign(resume, parsed);

        console.log("Resume restored.");

    }

    catch (error) {

        console.error("Load Error", error);

    }

}

/*
|--------------------------------------------------------------------------
| Clear Resume
|--------------------------------------------------------------------------
*/

function clearResume() {

    localStorage.removeItem(STORAGE_KEY);

}

/*
|--------------------------------------------------------------------------
| Auto Save
|--------------------------------------------------------------------------
*/

function autoSave() {

    saveResume();

    updateProgress();

}
