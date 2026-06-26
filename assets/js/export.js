/*
==========================================
Export Module
==========================================
*/

"use strict";

function downloadFile(filename, content, type) {

    const blob = new Blob(
        [content],
        { type }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = filename;

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

}

function exportJSON() {

    downloadFile(

        "resume.json",

        JSON.stringify(resume, null, 4),

        "application/json"

    );

}

function exportMarkdown() {

    let md = "# Resume\n\n";

    md += `## Name\n${resume.personal.name ?? ""}\n\n`;

    md += `## Summary\n${resume.summary}\n\n`;

    downloadFile(

        "resume.md",

        md,

        "text/markdown"

    );

}

document
.getElementById("exportJsonBtn")
.addEventListener(
    "click",
    exportJSON
);

document
.getElementById("exportMdBtn")
.addEventListener(
    "click",
    exportMarkdown
);
