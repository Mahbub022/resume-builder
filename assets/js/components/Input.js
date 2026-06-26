/*
==========================================
Input Component
Version : v0.3.0
==========================================
*/

"use strict";

class Input {

    constructor(options = {}) {

        this.id = options.id || "";

        this.label = options.label || "";

        this.type = options.type || "text";

        this.placeholder =
            options.placeholder || "";

        this.required =
            options.required || false;

        this.value =
            options.value || "";

        this.onInput =
            options.onInput || function () {};

    }

    render() {

        const group =
            document.createElement("div");

        group.className = "form-group";

        if (this.label) {

            const label =
                document.createElement("label");

            label.setAttribute("for", this.id);

            label.textContent =
                this.required
                ? `${this.label} *`
                : this.label;

            group.appendChild(label);

        }

        const input =
            document.createElement("input");

        input.id = this.id;

        input.type = this.type;

        input.placeholder =
            this.placeholder;

        input.value =
            this.value;

        if (this.required) {

            input.required = true;

        }

        input.addEventListener(

            "input",

            e => {

                this.value = e.target.value;

                this.onInput(this.value);

            }

        );

        group.appendChild(input);

        return group;

    }

    getValue() {

        return this.value;

    }

    setValue(value) {

        this.value = value;

        const input =
            document.getElementById(this.id);

        if (input) {

            input.value = value;

        }

    }

    enable() {

        const input =
            document.getElementById(this.id);

        if (input) {

            input.disabled = false;

        }

    }

    disable() {

        const input =
            document.getElementById(this.id);

        if (input) {

            input.disabled = true;

        }

    }

}
