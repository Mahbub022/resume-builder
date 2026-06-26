/*
==========================================
Form Renderer
Version : v0.4.0
==========================================
*/

"use strict";

class FormRenderer {

    constructor(rootId) {

        this.root = document.getElementById(rootId);

    }

    render() {

        this.root.innerHTML = "";

        FORM_SECTIONS.forEach(section => {

            if (!section.enabled) {

                return;

            }

            const sectionContainer =
                document.createElement("div");

            sectionContainer.id =
                section.id + "Section";

            const accordion =
                new Accordion({

                    title:

                        `${section.icon} ${section.title}`,

                    expanded: false,

                    content: sectionContainer

                });

            this.root.appendChild(

                accordion.render()

            );

            if (section.module) {

                section.module.container =

                    sectionContainer;

                section.module.render();

            }

        });

    }

}
