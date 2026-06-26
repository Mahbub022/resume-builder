/*
==========================================
Card Component
Version : v0.3.0
==========================================
*/

"use strict";

class Card extends BaseComponent {

    constructor(options = {}) {

        super(options);

        this.title = options.title || "";

        this.body = options.body || null;

        this.footer = options.footer || null;

        this.collapsible = options.collapsible ?? false;

        this.collapsed = options.collapsed ?? false;

    }

    render() {

        const card = document.createElement("div");

        card.className = "card";

        /*
        ----------------------------------
        Header
        ----------------------------------
        */

        const header = document.createElement("div");

        header.className = "card-header";

        const title = document.createElement("h3");

        title.className = "card-title";

        title.textContent = this.title;

        header.appendChild(title);

        /*
        ----------------------------------
        Collapse Button
        ----------------------------------
        */

        if (this.collapsible) {

            const button = document.createElement("button");

            button.type = "button";

            button.className = "card-toggle";

            button.textContent = this.collapsed ? "+" : "−";

            button.onclick = () => {

                this.collapsed = !this.collapsed;

                this.update();

            };

            header.appendChild(button);

        }

        card.appendChild(header);

        /*
        ----------------------------------
        Body
        ----------------------------------
        */

        if (!this.collapsed) {

            const body = document.createElement("div");

            body.className = "card-body";

            if (this.body instanceof HTMLElement) {

                body.appendChild(this.body);

            }

            else if (typeof this.body === "string") {

                body.innerHTML = this.body;

            }

            card.appendChild(body);

        }

        /*
        ----------------------------------
        Footer
        ----------------------------------
        */

        if (!this.collapsed && this.footer) {

            const footer = document.createElement("div");

            footer.className = "card-footer";

            if (this.footer instanceof HTMLElement) {

                footer.appendChild(this.footer);

            }

            else {

                footer.innerHTML = this.footer;

            }

            card.appendChild(footer);

        }

        this.element = card;

        return card;

    }

}
