/*
==========================================
Dynamic List Component
Version : v0.3.0
==========================================
*/

"use strict";

class DynamicList extends BaseComponent {

    constructor(options = {}) {

        super(options);

        this.items = options.items || [];

        this.title = options.title || "";

        this.createItem = options.createItem || (() => ({}));

        this.renderItem = options.renderItem || (() => document.createElement("div"));

        this.onChange = options.onChange || (() => {});

        this.addButtonText =
            options.addButtonText || "Add";

    }

    render() {

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "dynamic-list";

        /*
        ----------------------------------
        Existing Items
        ----------------------------------
        */

        this.items.forEach((item, index) => {

            const card =
                document.createElement("div");

            card.className =
                "dynamic-list-item";

            const content =
                this.renderItem(

                    item,

                    index,

                    this.items

                );

            card.appendChild(content);

            const removeButton =
                document.createElement("button");

            removeButton.type = "button";

            removeButton.className =
                "btn btn-danger";

            removeButton.textContent =
                "Remove";

            removeButton.onclick = () => {

                this.remove(index);

            };

            card.appendChild(removeButton);

            wrapper.appendChild(card);

        });

        /*
        ----------------------------------
        Add Button
        ----------------------------------
        */

        const addButton =
            new Button({

                text: this.addButtonText,

                icon: "+",

                variant: "primary",

                onClick: () => {

                    this.add();

                }

            });

        wrapper.appendChild(

            addButton.render()

        );

        this.element = wrapper;

        return wrapper;

    }

    add() {

        this.items.push(

            this.createItem()

        );

        this.onChange(this.items);

        this.update();

    }

    remove(index) {

        this.items.splice(index, 1);

        this.onChange(this.items);

        this.update();

    }

}
