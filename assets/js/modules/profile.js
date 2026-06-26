/*
==========================================
Profile Module
Version : v0.3.0
==========================================
*/

"use strict";

class ProfileModule {

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
        GitHub
        ----------------------------------
        */

        const github = new Input({

            id: "github",

            label: "GitHub",

            type: "url",

            placeholder:
                "https://github.com/username",

            value:
                resume.profiles.github,

            onInput: value => {

                resume.profiles.github = value;

                StorageService.save();

            }

        });

        body.appendChild(

            github.render()

        );

        /*
        ----------------------------------
        LinkedIn
        ----------------------------------
        */

        const linkedin = new Input({

            id: "linkedin",

            label: "LinkedIn",

            type: "url",

            placeholder:
                "https://linkedin.com/in/username",

            value:
                resume.profiles.linkedin,

            onInput: value => {

                resume.profiles.linkedin = value;

                StorageService.save();

            }

        });

        body.appendChild(

            linkedin.render()

        );

        /*
        ----------------------------------
        Other Links
        ----------------------------------
        */

        const list = new DynamicList({

            items:
                resume.profiles.others,

            addButtonText:
                "Add Link",

            createItem: () => ({

                id: generateId(),

                label: "",

                url: ""

            }),

            renderItem: item => {

                const wrapper =
                    document.createElement("div");

                const label =
                    new Input({

                        label: "Label",

                        value: item.label,

                        onInput: value => {

                            item.label = value;

                            StorageService.save();

                        }

                    });

                wrapper.appendChild(

                    label.render()

                );

                const url =
                    new Input({

                        type: "url",

                        label: "URL",

                        value: item.url,

                        onInput: value => {

                            item.url = value;

                            StorageService.save();

                        }

                    });

                wrapper.appendChild(

                    url.render()

                );

                return wrapper;

            },

            onChange: () => {

                StorageService.save();

            }

        });

        body.appendChild(

            list.render()

        );

        const card = new Card({

            title: "Profile Links",

            body,

            collapsible: false

        });

        this.container.appendChild(

            card.render()

        );

    }

}

const profileModule =
    new ProfileModule(

        "profileSection"

    );

progressEngine.register(

    "profile",

    () => {

        const total = 2;

        let completed = 0;

        if (

            resume.profiles.github.trim()

        ) completed++;

        if (

            resume.profiles.linkedin.trim()

        ) completed++;

        return {

            completed,

            total,

            percent: Math.round(

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
