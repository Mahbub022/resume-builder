/*
==========================================
Resume Model
Version : v0.3.0
==========================================
*/

"use strict";

const ResumeModel = {

    schemaVersion: "1.0.0",

    personal: {

        name: "",

        departments: []

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

/*
Use a deep copy so the default model
is never modified directly.
*/
let resume = structuredClone(ResumeModel);
