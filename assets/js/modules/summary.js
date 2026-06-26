/*
==========================================
Summary Module
Version : v0.3.0
==========================================
*/

"use strict";

class SummaryModule {

    constructor(containerId) {

        this.container =
            document.getElementById(containerId);

    }

    render() {

        this.container.innerHTML = "";

        const body =
            document.createElement("div");

        /*
        ----------------------------------
        Summary
        ----------------------------------
        */

        const summary =
            new TextArea({

                id: "summary",

                label: "Professional Summary",

                rows: 8,

                required: true,

                placeholder:
                    "Write a short professional summary...",

                value:
                    resume.summary,

                onInput: value => {

                    resume.summary = value;

                    StorageService.save();

                }

            });

        body.appendChild(

            summary.render()

        );

        const card =
            new Card({

                title: "Summary",

                body,

                collapsible: false

            });

        this.container.appendChild(

            card.render()

        );

    }

}

const summaryModule =
    new SummaryModule(

        "summarySection"

    );

progressEngine.register(

    "summary",

    () => {

        const total = 1;

        let completed = 0;

        if (

            resume.summary.trim()

        ) {

            completed++;

        }

        return {

            completed,

            total,

            percent: completed * 100,

            status:

                completed === 1

                    ? "complete"

                    : "empty"

        };

    }

);
