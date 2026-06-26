/*
==========================================
Form Module
Commit 002
Version : v0.2.0
==========================================
*/

"use strict";

/*
|--------------------------------------------------------------------------
| Initialize Form
|--------------------------------------------------------------------------
*/

function initializeForm() {

    renderPersonalSection();

    renderContactSection();

    renderProfileSection();

    renderSummarySection();

}

/*
|--------------------------------------------------------------------------
| Personal Information
|--------------------------------------------------------------------------
*/

async function renderPersonalSection() {

    const section = document.getElementById("personalSection");

    section.innerHTML = `
        <div class="form-group">

            <label>Full Name *</label>

            <input
                id="nameInput"
                type="text"
                placeholder="Enter your full name">

        </div>

        <div class="form-group">

            <label>Tech Department</label>

            <input
                id="departmentInput"
                list="departmentList"
                placeholder="Frontend, Backend, Android ...">

            <datalist id="departmentList"></datalist>

        </div>
    `;

    await loadDepartments();

    const nameInput = document.getElementById("nameInput");

    const departmentInput =
        document.getElementById("departmentInput");

    nameInput.value =
        resume.personal?.name || "";

    departmentInput.value =
        resume.personal?.department || "";

    nameInput.addEventListener("input", e => {

        resume.personal.name = e.target.value;

        autoSave();

    });

    departmentInput.addEventListener("input", e => {

        resume.personal.department =
            e.target.value;

        autoSave();

    });

}

/*
|--------------------------------------------------------------------------
| Contact Information
|--------------------------------------------------------------------------
*/

function renderContactSection() {

    const section = document.getElementById("contactSection");

    section.innerHTML = `
        <div class="form-group">

            <label>Mobile Number</label>

            <input
                id="mobileInput"
                type="tel"
                placeholder="+8801XXXXXXXXX">

        </div>

        <div class="form-group">

            <label>Email Address</label>

            <input
                id="emailInput"
                type="email"
                placeholder="example@email.com">

        </div>
    `;

    const mobileInput =
        document.getElementById("mobileInput");

    const emailInput =
        document.getElementById("emailInput");

    mobileInput.value =
        resume.contact?.mobile || "";

    emailInput.value =
        resume.contact?.email || "";

    mobileInput.addEventListener("input", e => {

        resume.contact.mobile =
            e.target.value;

        autoSave();

    });

    emailInput.addEventListener("input", e => {

        resume.contact.email =
            e.target.value;

        autoSave();

    });

}

/*
|--------------------------------------------------------------------------
| Profile Links
|--------------------------------------------------------------------------
*/

function renderProfileSection() {

    const section =
        document.getElementById("profileSection");

    section.innerHTML = `

        <p>
            Dynamic profile links will be added
            in the next file.
        </p>

    `;

}

/*
|--------------------------------------------------------------------------
| Summary
|--------------------------------------------------------------------------
*/

function renderSummarySection() {

    const section =
        document.getElementById("summarySection");

    section.innerHTML = `

        <div class="form-group">

            <label>Professional Summary</label>

            <textarea
                id="summaryInput"
                rows="7"
                placeholder="Write a short overview about yourself..."></textarea>

        </div>

    `;

    const summaryInput =
        document.getElementById("summaryInput");

    summaryInput.value =
        resume.summary || "";

    summaryInput.addEventListener("input", e => {

        resume.summary = e.target.value;

        autoSave();

    });

}

/*
|--------------------------------------------------------------------------
| Metadata
|--------------------------------------------------------------------------
*/

async function loadDepartments() {

    try {

        const response =
            await fetch(
                "data/metadata/departments.json"
            );

        const items =
            await response.json();

        const list =
            document.getElementById("departmentList");

        list.innerHTML = "";

        items.forEach(item => {

            const option =
                document.createElement("option");

            option.value = item;

            list.appendChild(option);

        });

    }

    catch (error) {

        console.error(error);

    }

}
