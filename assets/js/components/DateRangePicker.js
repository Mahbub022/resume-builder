/*
==========================================
Date Range Picker Component
Version : v0.3.0
==========================================
*/

"use strict";

class DateRangePicker extends BaseComponent {

    constructor(options = {}) {

        super(options);

        this.startDate = options.startDate || "";

        this.endDate = options.endDate || "";

        this.present = options.present || false;

        this.onChange = options.onChange || (() => {});

    }

    render() {

        const wrapper = document.createElement("div");

        wrapper.className = "date-range-picker";

        /*
        ----------------------------------
        Start Date
        ----------------------------------
        */

        const start = document.createElement("input");

        start.type = "month";

        start.value = this.startDate;

        /*
        ----------------------------------
        End Date
        ----------------------------------
        */

        const end = document.createElement("input");

        end.type = "month";

        end.value = this.endDate;

        end.disabled = this.present;

        /*
        ----------------------------------
        Present Checkbox
        ----------------------------------
        */

        const label = document.createElement("label");

        label.className = "present-checkbox";

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = this.present;

        label.appendChild(checkbox);

        label.appendChild(

            document.createTextNode(" Present")

        );

        /*
        ----------------------------------
        Events
        ----------------------------------
        */

        start.addEventListener("change", e => {

            this.startDate = e.target.value;

            this.emit();

        });

        end.addEventListener("change", e => {

            this.endDate = e.target.value;

            this.emit();

        });

        checkbox.addEventListener("change", e => {

            this.present = e.target.checked;

            if (this.present) {

                this.endDate = "";

            }

            this.update();

            this.emit();

        });

        wrapper.appendChild(start);

        wrapper.appendChild(end);

        wrapper.appendChild(label);

        this.element = wrapper;

        return wrapper;

    }

    emit() {

        this.onChange({

            startDate: this.startDate,

            endDate: this.endDate,

            present: this.present

        });

    }

}
