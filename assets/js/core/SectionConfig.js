/*
==========================================
Section Configuration
Version : v0.3.0
==========================================
*/

"use strict";

const FORM_SECTIONS = [

    {
        id: "personal",
        title: "Personal Information",
        icon: "👤",
        required: true,
        module: personalModule
    },

    {
        id: "contact",
        title: "Contact Information",
        icon: "📞",
        required: true,
        module: contactModule
    },

    {
        id: "profile",
        title: "Profile Links",
        icon: "🌐",
        required: false,
        module: profileModule
    },

    {
        id: "summary",
        title: "Summary",
        icon: "📝",
        required: true,
        module: summaryModule
    },

    {
        id: "experience",
        title: "Experience",
        icon: "💼",
        required: true,
        module: null
    },

    {
        id: "education",
        title: "Education",
        icon: "🎓",
        required: true,
        module: null
    },

    {
        id: "skills",
        title: "Skills",
        icon: "🛠",
        required: true,
        module: null
    },

    {
        id: "projects",
        title: "Projects",
        icon: "📁",
        required: true,
        module: null
    },

    {
        id: "achievement",
        title: "Achievements",
        icon: "🏆",
        required: false,
        module: null
    },

    {
        id: "extra",
        title: "Extra Curricular",
        icon: "⭐",
        required: false,
        module: null
    },

    {
        id: "others",
        title: "Others",
        icon: "📌",
        required: false,
        module: null
    }

];
