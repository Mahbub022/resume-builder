


/*
==========================================
Resume Builder
Application Entry
Commit 002
==========================================
*/

"use strict";

/*
|--------------------------------------------------------------------------
| Resume Data Model
|--------------------------------------------------------------------------
*/

/*
const resume = {

    schemaVersion: "1.0.0",

    personal: {
        name: "",
        department: ""
    },

    contact: {
        mobile: "",
        email: ""
    },

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

*/
/*
|--------------------------------------------------------------------------
| Application Startup
|--------------------------------------------------------------------------
*/
/*
document.addEventListener("DOMContentLoaded", () => {

    console.log("Resume Builder v0.2.0");

    // Load saved resume first
    loadResume();

    // Build UI
    initializeUI();

    initializeAccordion();

    initializeForm();

    // Refresh progress
    updateProgress();

});

*/



/*
==========================================
Application
==========================================
*/

"use strict";

document.addEventListener(

    "DOMContentLoaded",

    () => {

        const renderer =

            new FormRenderer(

                "formContainer"

            );

        renderer.render();

    }

);
