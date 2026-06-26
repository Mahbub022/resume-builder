/*
==========================================
Profile Links Module
Commit 002
Version : v0.2.0
==========================================
*/

"use strict";

/*
|--------------------------------------------------------------------------
| Render Profile Links
|--------------------------------------------------------------------------
*/

function renderProfileSection() {

    const section =
        document.getElementById("profileSection");

    section.innerHTML = `

        <div id="profileLinksContainer"></div>

        <button
            type="button"
            id="addProfileLinkBtn"
            class="secondary-btn">

            + Add Link

        </button>

    `;

    if (!Array.isArray(resume.profiles)) {

        resume.profiles = [];

    }

    if (resume.profiles.length === 0) {

        resume.profiles.push({

            id: generateId(),

            title: "GitHub",

            url: ""

        });

        resume.profiles.push({

            id: generateId(),

            title: "LinkedIn",

            url: ""

        });

    }

    drawProfileCards();

    document

        .getElementById("addProfileLinkBtn")

        .addEventListener(

            "click",

            addProfileLink

        );

}

/*
|--------------------------------------------------------------------------
| Draw Cards
|--------------------------------------------------------------------------
*/

function drawProfileCards() {

    const container =
        document.getElementById(
            "profileLinksContainer"
        );

    container.innerHTML = "";

    resume.profiles.forEach(link => {

        const card =
            document.createElement("div");

        card.className = "profile-card";

        card.innerHTML = `

            <input
                class="profile-title"
                placeholder="Title"
                value="${link.title}">

            <input
                class="profile-url"
                placeholder="https://..."
                value="${link.url}">

            <button
                class="remove-profile">

                Remove

            </button>

        `;

        const titleInput =
            card.querySelector(".profile-title");

        const urlInput =
            card.querySelector(".profile-url");

        const removeBtn =
            card.querySelector(".remove-profile");

        titleInput.addEventListener(

            "input",

            e => {

                link.title = e.target.value;

                autoSave();

            }

        );

        urlInput.addEventListener(

            "input",

            e => {

                link.url = e.target.value;

                autoSave();

            }

        );

        removeBtn.addEventListener(

            "click",

            () => {

                removeProfileLink(link.id);

            }

        );

        container.appendChild(card);

    });

}

/*
|--------------------------------------------------------------------------
| Add Link
|--------------------------------------------------------------------------
*/

function addProfileLink() {

    resume.profiles.push({

        id: generateId(),

        title: "",

        url: ""

    });

    autoSave();

    drawProfileCards();

}

/*
|--------------------------------------------------------------------------
| Remove Link
|--------------------------------------------------------------------------
*/

function removeProfileLink(id) {

    resume.profiles =

        resume.profiles.filter(

            item => item.id !== id

        );

    autoSave();

    drawProfileCards();

}
