==================================================
Resume Builder Specification
==================================================

Document
03_FOLDER_STRUCTURE.md

Specification Version
1.0.0

Project Version
0.4.0

Status
FROZEN

Author
Mahbubur Rahman

Prepared With
OpenAI ChatGPT

Last Updated
2026-06-28

==================================================
TABLE OF CONTENTS
==================================================

1. Purpose
2. Repository Overview
3. Root Directory
4. assets/
5. css/
6. js/
7. templates/
8. metadata/
9. docs/
10. Future Directories
11. Naming Convention
12. File Responsibilities
13. Dependency Rules
14. Load Order
15. Legacy Files
16. Future Expansion
17. Repository Rules
18. Summary

==================================================
1. PURPOSE
==================================================

This document defines the official repository layout.

Every file has exactly one owner and one responsibility.

Developers shall follow this structure when adding new functionality.

The repository structure defined here is frozen under Specification Version 1.0.0.

==================================================
2. REPOSITORY OVERVIEW
==================================================

resume-builder/

│

├── assets/

├── docs/

├── index.html

├── README.md

├── LICENSE

├── .gitignore

└── CONTRIBUTING.md

The repository root should remain clean.

Business logic belongs inside assets/js/.

Documentation belongs inside docs/.

==================================================
3. ROOT DIRECTORY
==================================================

index.html

Purpose

Application entry point.

Responsibilities

• Load CSS

• Load JavaScript

• Define static layout

Must NOT

Contain application logic.

--------------------------------------------------

README.md

GitHub landing page.

--------------------------------------------------

LICENSE

Project license.

--------------------------------------------------

.gitignore

Ignore generated files.

--------------------------------------------------

CONTRIBUTING.md

Contribution guidelines.

==================================================
4. assets/
==================================================

Contains every runtime asset.

Subdirectories

css/

js/

metadata/

templates/

images/ (future)

fonts/ (future)

==================================================
5. css/
==================================================

Contains styling only.

Files

variables.css

style.css

mobile.css

future

tablet.css

desktop.css

print.css

Rules

CSS files never contain JavaScript.

==================================================
6. js/
==================================================

Contains every JavaScript source file.

Subdirectories

components/

core/

models/

modules/

services/

utils/

legacy/

No JavaScript file shall exist directly under js/.

==================================================
7. templates/
==================================================

Purpose

Resume templates.

Future layout

templates/

modern/

classic/

ats/

minimal/

Each template owns

HTML

CSS

Renderer

No template stores business data.

==================================================
8. metadata/
==================================================

Stores reusable metadata.

Examples

departments.json

technologies.json

skills.json

languages.json

certificates.json

Metadata is read-only during application startup.

User-defined metadata is persisted through MetadataService.

==================================================
9. docs/
==================================================

Contains project documentation only.

Runtime never depends on documentation.

Documents

Architecture

Data Model

Services

Modules

UI

Development Plan

Status

==================================================
10. FUTURE DIRECTORIES
==================================================

tests/

Unit tests.

--------------------------------------------------

examples/

Example resumes.

--------------------------------------------------

samples/

Import examples.

--------------------------------------------------

scripts/

Developer utilities.

==================================================
11. NAMING CONVENTION
==================================================

Directories

lowercase

Example

components

services

modules

--------------------------------------------------

JavaScript Files

PascalCase

for classes

Example

ResumeModel.js

StorageService.js

Accordion.js

--------------------------------------------------

Modules

lowercase

Example

personal.js

education.js

projects.js

--------------------------------------------------

Documentation

UPPERCASE numbering

Example

02_ARCHITECTURE.md

==================================================
12. FILE RESPONSIBILITIES
==================================================

One file

One responsibility.

Examples

ResumeModel.js

Owns resume data.

StorageService.js

Owns persistence.

ProgressEngine.js

Owns completion calculation.

Accordion.js

Owns accordion rendering.

No responsibility overlap.

==================================================
13. DEPENDENCY RULES
==================================================

Allowed

Component

↓

Module

↓

Model

↓

Service

Forbidden

Service

↓

Component

Forbidden

Model

↓

DOM

Forbidden

Utility

↓

ResumeModel

Utilities remain pure.

==================================================
14. SCRIPT LOAD ORDER
==================================================

Models

↓

Utilities

↓

Components

↓

Services

↓

Core

↓

Modules

↓

Configuration

↓

Application Entry

This order shall remain unchanged unless Specification Version changes.

==================================================
15. LEGACY FILES
==================================================

Legacy implementation shall be moved into

assets/js/legacy/

Examples

accordion.js

form.js

ui.js

storage.js

profile-links.js

These files remain for Git history only.

Runtime must not depend on them.

==================================================
16. FUTURE EXPANSION
==================================================

Adding a new feature shall require

New Module

Configuration Update

Documentation Update

No repository restructuring should be necessary.

==================================================
17. REPOSITORY RULES
==================================================

Rule 1

No duplicated logic.

Rule 2

No duplicated models.

Rule 3

No business logic inside components.

Rule 4

No DOM manipulation inside services.

Rule 5

Documentation updated together with architecture changes.

==================================================
18. SUMMARY
==================================================

The repository structure is intentionally modular.

Every directory has one purpose.

Every file has one owner.

The repository layout defined here is frozen for Specification Version 1.0.0.

==================================================
REVISION HISTORY
==================================================

Version 1.0.0

• Initial frozen repository structure.

==================================================
END OF DOCUMENT
==================================================
