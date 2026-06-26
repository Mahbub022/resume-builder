/*
==========================================
Section Configuration
Version : v0.3.1
==========================================
*/

"use strict";

const FORM_SECTIONS = [

    {
        id: "personal",
        title: "Personal Information",
        icon: "👤",
        required: true,
        multiple: false,
        collapsible: true,
        enabled: true,
        export: true,
        import: true,
        progressWeight: 10,
        module: personalModule
    },

    {
        id: "contact",
        title: "Contact Information",
        icon: "📞",
        required: true,
        multiple: false,
        collapsible: true,
        enabled: true,
        export: true,
        import: true,
        progressWeight: 10,
        module: contactModule
    },

    {
        id: "profile",
        title: "Profile Links",
        icon: "🌐",
        required: false,
        multiple: false,
        collapsible: true,
        enabled: true,
        export: true,
        import: true,
        progressWeight: 5,
        module: profileModule
    },

    {
        id: "summary",
        title: "Summary",
        icon: "📝",
        required: true,
        multiple: false,
        collapsible: true,
        enabled: true,
        export: true,
        import: true,
        progressWeight: 10,
        module: summaryModule
    },

    {
        id: "experience",
        title: "Experience",
        icon: "💼",
        required: true,
        multiple: true,
        collapsible: true,
        enabled: true,
        export: true,
        import: true,
        progressWeight: 20,
        module: null
    },

    {
        id: "education",
        title: "Education",
        icon: "🎓",
        required: true,
        multiple: true,
        collapsible: true,
        enabled: true,
        export: true,
        import: true,
        progressWeight: 15,
        module: null
    },

    {
        id: "skills",
        title: "Skills",
        icon: "🛠",
        required: true,
        multiple: false,
        collapsible: true,
        enabled: true,
        export: true,
        import: true,
        progressWeight: 10,
        module: null
    },

    {
        id: "projects",
        title: "Projects",
        icon: "📁",
        required: true,
        multiple: true,
        collapsible: true,
        enabled: true,
        export: true,
        import: true,
        progressWeight: 15,
        module: null
    },

    {
        id: "achievement",
        title: "Achievements",
        icon: "🏆",
        required: false,
        multiple: true,
        collapsible: true,
        enabled: true,
        export: true,
        import: true,
        progressWeight: 5,
        module: null
    },

    {
        id: "extra",
        title: "Extra Curricular",
        icon: "⭐",
        required: false,
        multiple: true,
        collapsible: true,
        enabled: true,
        export: true,
        import: true,
        progressWeight: 0,
        module: null
    },

    {
        id: "others",
        title: "Others",
        icon: "📌",
        required: false,
        multiple: true,
        collapsible: true,
        enabled: true,
        export: true,
        import: true,
        progressWeight: 0,
        module: null
    }

];
