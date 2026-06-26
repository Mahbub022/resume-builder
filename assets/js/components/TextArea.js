/*
==========================================
TextArea Component
Version : v0.3.0
==========================================
*/

"use strict";

class TextArea extends BaseComponent {

    constructor(options = {}) {
        super(options);

        this.id = options.id || "";

        this.label = options.label || "";

        this.placeholder =
            options.placeholder || "";

        this.rows = options.rows || 5;

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

        const textarea =
            document.createElement("textarea");

        textarea.id = this.id;

        textarea.rows = this.rows;

        textarea.placeholder =
            this.placeholder;

        textarea.value =
            this.value;

        if (this.required) {

            textarea.required = true;

        }

        textarea.addEventListener(

            "input",

            e => {

                this.value = e.target.value;

                this.onInput(this.value);

            }

        );

        group.appendChild(textarea);

        return group;

    }

    getValue() {

        return this.value;

    }

    setValue(value) {

        this.value = value;

        const textarea =
            document.getElementById(this.id);

        if (textarea) {

            textarea.value = value;

        }

    }

    clear() {

        this.setValue("");

    }

    enable() {

        const textarea =
            document.getElementById(this.id);

        if (textarea) {

            textarea.disabled = false;

        }

    }

    disable() {

        const textarea =
            document.getElementById(this.id);

        if (textarea) {

            textarea.disabled = true;

        }

    }

    }
