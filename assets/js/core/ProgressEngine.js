/*
==========================================
Progress Engine
Version : v0.3.0
==========================================
*/

"use strict";

class ProgressEngine {

    constructor() {

        this.sections = {};

    }

    register(sectionId, callback) {

        this.sections[sectionId] = callback;

    }

    getSectionProgress(sectionId) {

        if (!this.sections[sectionId]) {

            return {

                completed: 0,
                total: 0,
                percent: 0,
                status: "empty"

            };

        }

        return this.sections[sectionId]();

    }

    getOverallProgress() {

        let completed = 0;

        let total = 0;

        Object.keys(this.sections).forEach(key => {

            const result =

                this.sections[key]();

            completed += result.completed;

            total += result.total;

        });

        const percent =

            total === 0

                ? 0

                : Math.round(

                    completed * 100 / total

                );

        return {

            completed,

            total,

            percent

        };

    }

}

const progressEngine =

    new ProgressEngine();
