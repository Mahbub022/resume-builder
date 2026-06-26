/*
==========================================
Contact Module
Version : v0.3.0
==========================================
*/

"use strict";

class ContactModule {

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
        Mobile Number
        ----------------------------------
        */

        const mobileInput =
            new Input({

                id: "contact-mobile",

                label: "Mobile Number",

                type: "tel",

                required: true,

                placeholder:
                    "+8801XXXXXXXXX",

                value:
                    resume.contact.mobile,

                onInput: value => {

                    resume.contact.mobile = value;

                    StorageService.save();

                }

            });

        body.appendChild(

            mobileInput.render()

        );

        /*
        ----------------------------------
        Email
        ----------------------------------
        */

        const emailInput =
            new Input({

                id: "contact-email",

                label: "Email",

                type: "email",

                required: true,

                placeholder:
                    "example@email.com",

                value:
                    resume.contact.email,

                onInput: value => {

                    resume.contact.email = value;

                    StorageService.save();

                }

            });

        body.appendChild(

            emailInput.render()

        );

        /*
        ----------------------------------
        Card
        ----------------------------------
        */

        const card =
            new Card({

                title:
                    "Contact Information",

                body,

                collapsible: false

            });

        this.container.appendChild(

            card.render()

        );

    }

}

const contactModule =
    new ContactModule(

        "contactSection"

    );

/*
------------------------------------------
Progress Registration
------------------------------------------
*/

progressEngine.register(

    "contact",

    () => {

        let completed = 0;

        const total = 2;

        if (

            resume.contact.mobile.trim()

        ) {

            completed++;

        }

        if (

            resume.contact.email.trim()

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
