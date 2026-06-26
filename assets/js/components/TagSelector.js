/*
==========================================
Tag Selector Component
Version : v0.3.1
==========================================
*/

"use strict";

class TagSelector extends BaseComponent {

    constructor(options = {}) {

        super(options);

        this.items = options.items || [];

        this.selected = options.selected || [];

        this.placeholder =
            options.placeholder || "";

        this.allowNew =
            options.allowNew ?? true;

        this.onChange =
            options.onChange || (() => {});

    }

    render() {

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "tag-selector";

        /*
        ----------------------------------
        Selected Tags
        ----------------------------------
        */

        const tagList =
            document.createElement("div");

        tagList.className =
            "tag-list";

        this.selected.forEach(item => {

            tagList.appendChild(

                this.createTag(item)

            );

        });

        wrapper.appendChild(tagList);

        /*
        ----------------------------------
        Search Input
        ----------------------------------
        */

        const input =
            document.createElement("input");

        input.type = "text";

        input.placeholder =
            this.placeholder;

        input.className =
            "tag-input";

        wrapper.appendChild(input);

        /*
        ----------------------------------
        Suggestion List
        ----------------------------------
        */

        const suggestionBox =
            document.createElement("div");

        suggestionBox.className =
            "tag-suggestions";

        wrapper.appendChild(suggestionBox);

        input.addEventListener(

            "input",

            () => {

                this.renderSuggestions(

                    input.value,

                    suggestionBox

                );

            }

        );

        this.element = wrapper;

        return wrapper;

    }

    renderSuggestions(keyword, container) {

        container.innerHTML = "";

        keyword = keyword.trim();

        if (keyword === "") {

            return;

        }

        const search =
            keyword.toLowerCase();

        const matches =

            this.items.filter(item =>

                item.name.toLowerCase()

                    .includes(search)

                &&

                !this.selected.some(

                    selected =>

                        selected.id === item.id

                )

            );

        matches.forEach(item => {

            const option =
                document.createElement("div");

            option.className =
                "tag-option";

            option.textContent =
                item.name;

            option.onclick = () => {

                this.selected.push(item);

                this.onChange(this.selected);

                this.update();

            };

            container.appendChild(option);

        });

        if (

            this.allowNew &&

            matches.length === 0

        ) {

            const option =
                document.createElement("div");

            option.className =
                "tag-option";

            option.textContent =
                `+ Add "${keyword}"`;

            option.onclick = () => {

                const item = {

                    id: generateId(),

                    name: keyword

                };

                this.items.push(item);

                this.selected.push(item);

                this.onChange(this.selected);

                this.update();

            };

            container.appendChild(option);

        }

    }

    createTag(item) {

        const chip =
            document.createElement("div");

        chip.className =
            "tag-chip";

        const text =
            document.createElement("span");

        text.textContent =
            item.name;

        chip.appendChild(text);

        const remove =
            document.createElement("button");

        remove.type = "button";

        remove.textContent = "✕";

        remove.onclick = () => {

            this.selected =

                this.selected.filter(

                    x => x.id !== item.id

                );

            this.onChange(this.selected);

            this.update();

        };

        chip.appendChild(remove);

        return chip;

    }

}
