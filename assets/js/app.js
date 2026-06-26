/*
==========================================
Resume Builder
Application Entry
Version : v0.1.0
==========================================
*/

"use strict";

/*
|--------------------------------------------------------------------------
| Resume Data Model
|--------------------------------------------------------------------------
*/

const resume = {

    schemaVersion: "1.0.0",

    personal: {},

    contact: {},

    profiles: [],

    summary: "",

    experience: [],

    education: [],

    skills: [],

    projects: [],

    achievements: [],

    extracurricular: [],

    others: []

};

/*
|--------------------------------------------------------------------------
| Initialize Application
|--------------------------------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Resume Builder Started");

    initializeUI();

    initializeAccordion();

});
