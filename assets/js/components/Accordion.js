/*
==========================================
Accordion Component
Version : v0.3.0
==========================================
*/

"use strict";

class Accordion extends BaseComponent {

    constructor(options = {}) {

        super(options);

        this.title = options.title || "";

        this.content = options.content || null;

        this.expanded = options.expanded ?? false;

        this.onToggle = options.onToggle || (() => {});

    }

    render() {

        const root = document.createElement("section");

        root.className = "accordion";

        /*
        ----------------------------------
        Header
        ----------------------------------
        */

        const header = document.createElement("button");

        header.type = "button";

        header.className = "accordion-header";

        const title = document.createElement("span");

        title.textContent = this.title;

        const indicator = document.createElement("span");

        indicator.className = "accordion-indicator";

        indicator.textContent = this.expanded ? "−" : "+";

        header.appendChild(title);

        header.appendChild(indicator);

        header.onclick = () => {

            this.expanded = !this.expanded;

            this.onToggle(this.expanded);

            this.update();

        };

        root.appendChild(header);

        /*
        ----------------------------------
        Body
        ----------------------------------
        */

        if (this.expanded) {

            const body = document.createElement("div");

            body.className = "accordion-body";

            if (this.content instanceof HTMLElement) {

                body.appendChild(this.content);

            }
            else if (typeof this.content === "string") {

                body.innerHTML = this.content;

            }

            root.appendChild(body);

        }

        this.element = root;

        return root;

    }

}
