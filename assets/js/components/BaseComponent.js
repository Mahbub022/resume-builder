/*
==========================================
Base Component
Version : v0.3.0
==========================================
*/

"use strict";

class BaseComponent {

    constructor(options = {}) {

        this.id = options.id || "";

        this.element = null;

    }

    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    render() {

        throw new Error(

            "render() must be implemented."

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Mount
    |--------------------------------------------------------------------------
    */

    mount(parent) {

        this.element = this.render();

        parent.appendChild(this.element);

    }

    /*
    |--------------------------------------------------------------------------
    | Replace
    |--------------------------------------------------------------------------
    */

    update() {

        if (!this.element)
            return;

        const parent = this.element.parentNode;

        if (!parent)
            return;

        const newElement = this.render();

        parent.replaceChild(

            newElement,

            this.element

        );

        this.element = newElement;

    }

    /*
    |--------------------------------------------------------------------------
    | Destroy
    |--------------------------------------------------------------------------
    */

    destroy() {

        if (

            this.element &&

            this.element.parentNode

        ) {

            this.element.parentNode.removeChild(

                this.element

            );

        }

        this.element = null;

    }

    /*
    |--------------------------------------------------------------------------
    | Hide
    |--------------------------------------------------------------------------
    */

    hide() {

        if (this.element) {

            this.element.style.display = "none";

        }

    }

    /*
    |--------------------------------------------------------------------------
    | Show
    |--------------------------------------------------------------------------
    */

    show() {

        if (this.element) {

            this.element.style.display = "";

        }

    }

}
