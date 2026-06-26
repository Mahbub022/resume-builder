/*
==========================================
Storage Module
Version : v0.1.0
==========================================
*/

"use strict";

const STORAGE_KEY = "resume-builder-current";

function saveResume() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(resume)
        );

        console.log("Resume saved.");

    } catch (error) {

        console.error(error);

    }

}

function loadResume() {

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data)
        return;

    try {

        const parsed = JSON.parse(data);

        Object.assign(resume, parsed);

        console.log("Resume loaded.");

    }

    catch (error) {

        console.error(error);

    }

}

function clearResume() {

    localStorage.removeItem(STORAGE_KEY);

}
