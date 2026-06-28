==================================================
Resume Builder Specification
==================================================

Document
02_ARCHITECTURE.md

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

1. Introduction
2. Architectural Goals
3. Design Principles
4. High-Level Architecture
5. Layered Architecture
6. Repository Architecture
7. Runtime Architecture
8. Data Flow
9. Event Flow
10. Component Interaction
11. Module Lifecycle
12. Service Layer
13. Storage Layer
14. Import / Export Pipeline
15. Template Pipeline
16. Progress Engine
17. Dependency Rules
18. Initialization Sequence
19. Extension Guidelines
20. Future Compatibility

==================================================
1. INTRODUCTION
==================================================

This document defines the official software architecture of the Resume Builder project.

It is the authoritative reference for every implementation decision within the project.

Beginning with Specification Version 1.0.0, the architecture defined here is considered frozen.

New features may extend the architecture, but existing architectural principles must not be modified without a new specification version.

==================================================
2. PROJECT PURPOSE
==================================================

The Resume Builder is an offline-first, modular web application designed to allow users to create professional resumes from a single structured dataset.

Instead of creating separate forms for different resume templates, users enter their information once. The application then transforms the same dataset into multiple export formats and resume designs.

Supported outputs include:

• JSON
• Markdown
• Multiple Resume Templates
• PDF (future milestone)

==================================================
3. ARCHITECTURAL GOALS
==================================================

The architecture has been designed to satisfy the following goals.

Primary Goals

✓ Modular

Each feature must exist independently.

No module should directly manipulate another module's internal state.

--------------------------------------------------

✓ Maintainable

New developers should understand the project quickly.

Every responsibility belongs to exactly one layer.

--------------------------------------------------

✓ Reusable

UI components must be reusable.

Example:

Input

Button

Accordion

Card

TagSelector

DynamicList

--------------------------------------------------

✓ Extensible

Future additions should require minimal changes.

Example

Adding

Volunteer Experience

must only require

• New module

• ResumeModel extension (minor version)

• SectionConfig update

No existing modules should require modification.

--------------------------------------------------

✓ Offline First

The application must function without internet connectivity.

Persistent storage shall use browser Local Storage.

No backend server is required.

--------------------------------------------------

✓ Single Source of Truth

ResumeModel is the only authoritative source of resume data.

No component may permanently store business data.

Components only display or edit ResumeModel.

==================================================
4. DESIGN PRINCIPLES
==================================================

The project follows these architectural principles.

--------------------------------------------------

Principle 1

Single Responsibility

Every file has one responsibility.

Example

ResumeModel

stores resume data.

StorageService

stores and retrieves data.

Input

renders an input element.

--------------------------------------------------

Principle 2

Loose Coupling

Modules communicate only through shared models and services.

Avoid direct dependencies.

Correct

Input

↓

Personal Module

↓

ResumeModel

↓

StorageService

Incorrect

Input

↓

Contact Module

--------------------------------------------------

Principle 3

High Cohesion

Related logic remains together.

Example

Everything related to Personal Information remains inside

modules/personal.js

==================================================
5. HIGH LEVEL ARCHITECTURE
==================================================

                        User
                         │
                         ▼
                UI Components
                         │
                         ▼
                Feature Modules
                         │
                         ▼
                  ResumeModel
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
  StorageService  ProgressEngine  ExportService
          │
          ▼
     Browser Storage

The ResumeModel acts as the central hub of the application.

Every module updates ResumeModel.

Every service reads ResumeModel.

No service communicates directly with another service unless explicitly documented.

==================================================
6. LAYERED ARCHITECTURE
==================================================

The Resume Builder follows a layered architecture.

Each layer has clearly defined responsibilities.

A layer may communicate only with the layer directly below it unless explicitly documented.

--------------------------------------------------

Layer 1

Presentation Layer

Responsible For

• HTML

• CSS

• Rendering Components

• User Interaction

Contains

index.html

assets/css/

UI Components

This layer never stores business data.

--------------------------------------------------

Layer 2

Component Layer

Responsible For

Reusable UI Components.

Examples

Input

Button

Card

Accordion

TextArea

DynamicList

DateRangePicker

TagSelector

Responsibilities

• Render UI

• Emit Events

• Validate Simple Input

Must NOT

Store Resume Data.

--------------------------------------------------

Layer 3

Module Layer

Responsible For

Business Logic.

Each module owns exactly one section.

Examples

Personal

Contact

Experience

Education

Skills

Projects

Responsibilities

• Render Section

• Update ResumeModel

• Read Metadata

• Request Storage Save

A module must never update another module.

--------------------------------------------------

Layer 4

Model Layer

Contains

ResumeModel

MetadataModel

Purpose

Single Source of Truth.

Every persistent value belongs here.

Nothing else permanently owns application data.

--------------------------------------------------

Layer 5

Service Layer

Contains

StorageService

MetadataService

ImportService

ExportService

Responsibilities

Read

Write

Transform

Persist

Never render UI.

--------------------------------------------------

Layer 6

Infrastructure Layer

Browser APIs

Local Storage

File Download

Clipboard

Future PDF Renderer

==================================================
7. REPOSITORY ARCHITECTURE
==================================================

Repository Root

│
├── assets/
├── docs/
├── index.html
├── README.md
├── LICENSE
└── .gitignore

--------------------------------------------------

assets/

Contains every runtime resource.

Subfolders

css/

js/

templates/

metadata/

--------------------------------------------------

css/

Contains only styling.

No JavaScript logic.

--------------------------------------------------

js/

Contains all application logic.

The application never loads JavaScript outside this folder.

--------------------------------------------------

docs/

Contains frozen specifications.

Documentation never affects runtime.

==================================================
8. RUNTIME ARCHITECTURE
==================================================

Application Startup

Browser

↓

index.html

↓

Load CSS

↓

Load JavaScript

↓

ResumeModel

↓

MetadataModel

↓

Components

↓

Services

↓

Modules

↓

SectionConfig

↓

Application Initialization

↓

UI Ready

--------------------------------------------------

Application Shutdown

Save Pending Data

↓

Persist Local Storage

↓

Browser Exit

==================================================
9. DEPENDENCY RULES
==================================================

Rule 1

Components never import Modules.

--------------------------------------------------

Rule 2

Modules may use Components.

--------------------------------------------------

Rule 3

Modules may use Services.

--------------------------------------------------

Rule 4

Services never render UI.

--------------------------------------------------

Rule 5

Models never manipulate DOM.

--------------------------------------------------

Rule 6

Utilities never contain business logic.

--------------------------------------------------

Rule 7

SectionConfig never renders UI.

It only describes sections.

--------------------------------------------------

Rule 8

App Initialization owns application startup.

==================================================
10. INITIALIZATION SEQUENCE
==================================================

Application startup follows the exact sequence below.

1

Browser loads HTML.

↓

2

CSS is loaded.

↓

3

JavaScript files are loaded.

↓

4

ResumeModel initialized.

↓

5

MetadataModel initialized.

↓

6

Components become available.

↓

7

Services initialized.

↓

8

Modules initialized.

↓

9

SectionConfig loaded.

↓

10

Application Shell created.

↓

11

Modules rendered.

↓

12

Progress calculated.

↓

13

Autosave enabled.

↓

Application Ready.

==================================================
ARCHITECTURE DECISION RECORD (ADR)
==================================================

ADR-001

Decision

Use a
