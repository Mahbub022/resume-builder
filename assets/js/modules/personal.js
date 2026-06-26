/*
==========================================
Personal Module
Version : v0.3.0
==========================================
*/

"use strict";

class PersonalModule {

    constructor(containerId) {

        this.container =
            document.getElementById(containerId);

    }

    render() {

        this.container.innerHTML = "";

        /*
        ----------------------------------
        Card
        ----------------------------------
        */

        const body =
            document.createElement("div");

        /*
        ----------------------------------
        Name
        ----------------------------------
        */

        const nameInput =
            new Input({

                id: "personal-name",

                label: "Full Name",

                required: true,

                placeholder:
                    "Enter your full name",

                value:
                    resume.personal.name,

                onInput: value => {

                    resume.personal.name = value;

                    StorageService.save();

                }

            });

        body.appendChild(

            nameInput.render()

        );

        /*

        /*
----------------------------------
Department
----------------------------------
*/

const tagSelector =

    new TagSelector({

        items:
            metadata.departments,

        selected:
            resume.personal.departments,

        placeholder:
            "Search department...",

        allowNew: true,

        onChange: value => {

            resume.personal.departments = value;

            StorageService.save();

        }

    });

body.appendChild(

    tagSelector.render()

);

        /*
        ----------------------------------
        Card
        ----------------------------------
        */

        const card =
            new Card({

                title:
                    "Personal Information",

                body,

                collapsible: false

            });

        this.container.appendChild(

            card.render()

        );

    }

}

const personalModule =
    new PersonalModule(

        "personalSection"

    );

/*
------------------------------------------
Progress Registration
------------------------------------------
*/

progressEngine.register(

    "personal",

    () => {

        let completed = 0;

        const total = 2;

        if (

            resume.personal.name.trim()

        ) {

            completed++;

        }

        if (

            resume.personal.departments.length > 0

        ) {

            completed++;

        }

        return {

            completed,

            total,

            percent:

                Math.round(

                    completed * 100 / total

                ),

            status:

                completed === total

                    ? "complete"

                    : completed === 0

                        ? "empty"

                        : "partial"

        };

    }

);
