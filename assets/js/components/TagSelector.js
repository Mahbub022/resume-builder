/*
==========================================
Tag Selector Component
Version : v0.3.0
==========================================
*/

"use strict";

class TagSelector {

    constructor(options) {

        this.container = options.container;

        this.items = options.items || [];

        this.selected = options.selected || [];

        this.placeholder =
            options.placeholder || "";

        this.allowNew =
            options.allowNew ?? true;

        this.onChange =
            options.onChange || function () {};

        this.render();

    }

    render() {

        this.container.innerHTML = "";

        const wrapper =
            document.createElement("div");

        wrapper.className = "tag-selector";

        const tags =
            document.createElement("div");

        tags.className = "tag-list";

        this.selected.forEach(item => {

            tags.appendChild(

                this.createTag(item)

            );

        });

        const input =
            document.createElement("input");

        input.type = "text";

        input.placeholder =
            this.placeholder;

        input.className =
            "tag-input";

        const suggestions =
            document.createElement("div");

        suggestions.className =
            "tag-suggestions";

        input.addEventListener(

            "input",

            () => {

                this.renderSuggestions(

                    input.value,

                    suggestions

                );

            }

        );

        wrapper.appendChild(tags);

        wrapper.appendChild(input);

        wrapper.appendChild(suggestions);

        this.container.appendChild(wrapper);

    }

    renderSuggestions(keyword, container) {

        container.innerHTML = "";

        keyword = keyword.trim().toLowerCase();

        if (keyword === "")
            return;

        const matches =

            this.items.filter(item =>

                item.name

                    .toLowerCase()

                    .includes(keyword)

                &&

                !this.selected.find(

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

                this.render();

            };

            container.appendChild(option);

        });

        if (

            this.allowNew

            &&

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

                this.render();

            };

            container.appendChild(option);

        }

    }

    createTag(item) {

        const chip =
            document.createElement("div");

        chip.className = "tag-chip";

        chip.innerHTML = `

            <span>${item.name}</span>

            <button type="button">✕</button>

        `;

        chip.querySelector("button")

            .onclick = () => {

                this.selected =

                    this.selected.filter(

                        x => x.id !== item.id

                    );

                this.onChange(this.selected);

                this.render();

            };

        return chip;

    }

          }
