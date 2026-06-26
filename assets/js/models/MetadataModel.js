/*
==========================================
Metadata Model
Version : v0.3.0
==========================================
*/

"use strict";

const MetadataModel = {

    departments: [],

    skills: [],

    technologies: [],

    languages: [],

    certifications: []

};

/*
Loaded from JSON files.

Example

departments.json

skills.json

technologies.json
*/

const metadata = structuredClone(MetadataModel);
