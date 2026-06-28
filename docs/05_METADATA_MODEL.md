==================================================
Resume Builder Specification
==================================================

Document
05_METADATA_MODEL.md

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
2. Design Philosophy
3. Metadata Architecture
4. MetadataModel Structure
5. Departments
6. Technologies
7. Skills
8. Employment Types
9. Work Modes
10. Degree Types
11. Education Levels
12. Profile Types
13. Project Status
14. Skill Categories
15. Proficiency Levels
16. Languages
17. Templates
18. Themes
19. Localization
20. Validation Rules

(Part 2 continues with metadata management, import/export, versioning and future extension.)

==================================================
1. PURPOSE
==================================================

MetadataModel contains configurable application data.

Unlike ResumeModel, MetadataModel does not store a user's resume.

It stores reusable options used throughout the application.

Examples

Departments

Employment Types

Templates

Technology Lists

Profile Types

==================================================
2. DESIGN PHILOSOPHY
==================================================

Metadata shall be

• Shared

• Reusable

• Versioned

• Editable

• Searchable

• Importable

• Exportable

Business data must never be stored inside MetadataModel.

==================================================
3. METADATA ARCHITECTURE
==================================================

MetadataModel

│

├── schemaVersion

├── departments

├── technologies

├── skillCategories

├── employmentTypes

├── workModes

├── degreeTypes

├── educationLevels

├── profileTypes

├── projectStatus

├── proficiencyLevels

├── languages

├── templates

├── themes

└── localization

Metadata is loaded once during application startup.

==================================================
4. METADATAMODEL STRUCTURE
==================================================

MetadataModel

{

schemaVersion,

version,

lastUpdated,

data

}

--------------------------------------------------

schemaVersion

Metadata schema version.

--------------------------------------------------

version

Metadata dataset version.

--------------------------------------------------

lastUpdated

ISO Date String.

==================================================
5. DEPARTMENTS
==================================================

Purpose

Categorize professional domains.

Examples

Computer Science

Artificial Intelligence

Machine Learning

Data Science

Cyber Security

Embedded Systems

Cloud Computing

Software Engineering

Networking

Robotics

Internet of Things

Blockchain

Game Development

Mobile Development

Web Development

DevOps

Database Systems

Users may add custom departments.

==================================================
6. TECHNOLOGIES
==================================================

Each technology stores

{

id,

name,

category,

aliases[],

deprecated,

visible

}

--------------------------------------------------

Categories

Programming Language

Framework

Database

Cloud

DevOps

Tool

Operating System

Library

AI Framework

Testing

==================================================
7. SKILL CATEGORIES
==================================================

Examples

Programming

Framework

Database

Cloud

DevOps

Operating System

Soft Skill

Language

Office Tools

Research

==================================================
8. EMPLOYMENT TYPES
==================================================

Supported Values

Full Time

Part Time

Internship

Contract

Freelance

Consultant

Volunteer

Research

Teaching Assistant

Temporary

Other

==================================================
9. WORK MODES
==================================================

Supported Values

On Site

Hybrid

Remote

Flexible

==================================================
10. DEGREE TYPES
==================================================

Supported Values

SSC

HSC

Diploma

Associate

BSc

BA

BBA

MSc

MBA

MPhil

PhD

Certificate

Professional Training

==================================================
11. EDUCATION LEVELS
==================================================

Primary

Secondary

Higher Secondary

Diploma

Undergraduate

Graduate

Postgraduate

Doctorate

Professional

==================================================
12. PROFILE TYPES
==================================================

GitHub

LinkedIn

Portfolio

Kaggle

LeetCode

Codeforces

HackerRank

Stack Overflow

ResearchGate

Google Scholar

ORCID

Medium

YouTube

Behance

Dribbble

Facebook

X

Custom

==================================================
13. PROJECT STATUS
==================================================

Completed

Ongoing

Prototype

Research

Archived

Cancelled

==================================================
14. SKILL PROFICIENCY
==================================================

Beginner

Intermediate

Advanced

Expert

==================================================
15. LANGUAGES
==================================================

Metadata contains supported language names.

Examples

English

Bangla

Hindi

Japanese

Chinese

German

French

Arabic

Spanish

Russian

Users may add additional languages.

==================================================
16. TEMPLATES
==================================================

Reserved Templates

Modern

Classic

Minimal

ATS

Professional

Academic

Creative

Compact

Future templates are added here without modifying ResumeModel.

==================================================
17. THEMES
==================================================

Default

Light

Dark

Blue

Green

Professional

Themes affect application appearance only.

==================================================
18. LOCALIZATION
==================================================

Supported UI Languages

English

Bangla

Future versions may add additional translations.

==================================================
19. VALIDATION RULES
==================================================

Metadata entries must

• Have unique IDs

• Have unique names within their category

• Never be null

• Support sorting

• Support searching

==================================================
20. ARCHITECTURE DECISION RECORD
==================================================

ADR-MM-001

Decision

Metadata remains separate from ResumeModel.

Reason

Allows updating metadata without affecting user resumes.

--------------------------------------------------

ADR-MM-002

Decision

Users may extend metadata.

Reason

Supports new technologies, departments and profile types without schema changes.

--------------------------------------------------

ADR-MM-003

Decision

ResumeModel references MetadataModel whenever possible.

Reason

Avoids duplicated values and inconsistent spelling.

==================================================
END OF PART 1

Next

21. MetadataService

22. Metadata Storage

23. Search

24. Autocomplete

25. User-defined Metadata

26. Import/Export

27. Version Compatibility

28. Complete MetadataModel Example
29. Revision History
==================================================
