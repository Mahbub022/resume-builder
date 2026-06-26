/*
==========================================
Button Component
Version : v0.3.0
==========================================
*/

"use strict";

class Button {

    constructor(options = {}) {

        this.id = options.id || "";

        this.text = options.text || "Button";

        this.type = options.type || "button";

        this.variant = options.variant || "primary";

        this.icon = options.icon || "";

        this.disabled = options.disabled || false;

        this.onClick = options.onClick || function () {};

    }

    render() {

        const button = document.createElement("button");

        button.id = this.id;

        button.type = this.type;

        button.className = `btn btn-${this.variant}`;

        if (this.disabled) {

            button.disabled = true;

        }

        if (this.icon !== "") {

            const icon = document.createElement("span");

            icon.className = "btn-icon";

            icon.textContent = this.icon;

            button.appendChild(icon);

        }

        const text = document.createElement("span");

        text.className = "btn-text";

        text.textContent = this.text;

        button.appendChild(text);

        button.addEventListener("click", e => {

            this.onClick(e);

        });

        return button;

    }

    setText(text) {

        this.text = text;

        const button = document.getElementById(this.id);

        if (!button) return;

        const label = button.querySelector(".btn-text");

        if (label) {

            label.textContent = text;

        }

    }

    disable() {

        this.disabled = true;

        const button = document.getElementById(this.id);

        if (button) {

            button.disabled = true;

        }

    }

    enable() {

        this.disabled = false;

        const button = document.getElementById(this.id);

        if (button) {

            button.disabled = false;

        }

    }

}
