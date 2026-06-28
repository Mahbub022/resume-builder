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
21. METADATA SERVICE
==================================================

MetadataService is the only service responsible for
reading, writing and managing metadata.

Responsibilities

• Load system metadata

• Load user metadata

• Merge metadata

• Search metadata

• Validate metadata

• Save user metadata

• Export metadata

• Import metadata

Modules must never manipulate MetadataModel directly.

==================================================
22. METADATA STORAGE
==================================================

Metadata is separated into three groups.

--------------------------------------------------

System Metadata

Bundled with the application.

Read Only.

Examples

Departments

Employment Types

Templates

Degree Types

--------------------------------------------------

User Metadata

Created by the user.

Editable.

Examples

Custom Technologies

Custom Departments

Custom Skills

--------------------------------------------------

Runtime Cache

Temporary.

Never exported.

Examples

Recent Searches

Recently Used Technologies

Autocomplete Cache

==================================================
23. METADATA SEARCH
==================================================

Every metadata category supports

• Exact Search

• Prefix Search

• Keyword Search

• Alias Search

Example

TensorFlow

Aliases

tf

tensorflow

Tensor Flow

Search should ignore case.

==================================================
24. AUTOCOMPLETE
==================================================

MetadataService provides autocomplete.

Flow

User Types

↓

Metadata Search

↓

Matching Results

↓

Sorted Suggestions

↓

Selection

Results are ranked using

1. Exact Match

2. Prefix Match

3. Alias Match

4. Keyword Match

==================================================
25. USER DEFINED METADATA
==================================================

Users may create

Departments

Technologies

Skills

Languages

Profile Types

Categories

Custom entries receive

UUID

Created Date

Updated Date

Source

Source Values

System

User

Imported

==================================================
26. METADATA IMPORT
==================================================

Supported Formats

JSON

Future

CSV

YAML

XML

Imported metadata is validated before merging.

==================================================
27. METADATA EXPORT
==================================================

Supported Formats

JSON

Future

CSV

Export includes

User Metadata

Only.

System metadata is excluded.

==================================================
28. VERSION COMPATIBILITY
==================================================

MetadataModel stores

schemaVersion

version

Import compares versions.

If incompatible

MigrationService

(future)

performs conversion.

==================================================
29. VALIDATION RULES
==================================================

Every metadata item must

• Have unique id

• Have unique name

• Have category

• Have source

• Never be null

• Be searchable

==================================================
30. METADATA RELATIONSHIPS
==================================================

ResumeModel references MetadataModel.

Examples

Experience

↓

Technologies

↓

MetadataModel

Projects

↓

Technologies

↓

MetadataModel

Personal

↓

Departments

↓

MetadataModel

This prevents duplicated values.

==================================================
31. PERFORMANCE GUIDELINES
==================================================

Metadata should be loaded once during startup.

Search indexes may be cached.

Autocomplete should avoid scanning the complete dataset repeatedly.

Future optimization

Trie Index

Search Index

Fuzzy Matching

==================================================
32. SECURITY
==================================================

Metadata contains no confidential information.

Runtime cache should never be exported.

Imported metadata must be validated.

==================================================
33. FUTURE EXTENSIONS
==================================================

Reserved Metadata

Industries

Job Roles

Universities

Companies

Countries

Cities

Certificates

Cloud Providers

Programming Languages

Framework Versions

License Types

==================================================
34. IMPLEMENTATION CHECKLIST
==================================================

MetadataModel.js

✓ Departments

✓ Technologies

✓ Skill Categories

✓ Employment Types

✓ Work Modes

✓ Degree Types

✓ Education Levels

✓ Profile Types

✓ Templates

✓ Themes

✓ Languages

--------------------------------------------------

MetadataService.js

✓ Load

✓ Save

✓ Merge

✓ Search

✓ Autocomplete

✓ Import

✓ Export

==================================================
35. ARCHITECTURE DECISION RECORD
==================================================

ADR-MM-004

Decision

Metadata is categorized.

Reason

Simplifies searching and maintenance.

--------------------------------------------------

ADR-MM-005

Decision

System and user metadata remain separate.

Reason

Allows application updates without overwriting user data.

--------------------------------------------------

ADR-MM-006

Decision

Autocomplete uses MetadataService.

Reason

Keeps UI components stateless.

==================================================
36. REVISION HISTORY
==================================================

Version 1.0.0

• Initial frozen MetadataModel specification.

==================================================
END OF DOCUMENT
==================================================
