==================================================
Resume Builder Specification
==================================================

Document
04_DATA_MODEL.md

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
3. Data Design Rules
4. Root Resume Object
5. Common Object Structure
6. Metadata Block
7. Personal Information
8. Contact Information
9. Profile Links
10. Summary

(Experience begins in Part 2)

==================================================
1. PURPOSE
==================================================

This document defines the official ResumeModel used by the Resume Builder.

It is the single source of truth for every piece of resume information.

Every module, service, template and exporter shall use this model.

The model defined in this document is frozen under Specification Version 1.0.0.

==================================================
2. DESIGN PHILOSOPHY
==================================================

The ResumeModel has been designed with the following principles.

• Single Source of Truth

• Offline First

• Template Independent

• Export Independent

• Extensible

• Stable

• Human Readable

• JSON Friendly

The same ResumeModel shall generate every supported template.

Templates must never modify ResumeModel.

==================================================
3. DATA DESIGN RULES
==================================================

Rule 1

Every object owns its own data.

--------------------------------------------------

Rule 2

Every repeatable object owns a unique id.

--------------------------------------------------

Rule 3

Every repeatable object has ordering information.

--------------------------------------------------

Rule 4

Every repeatable object stores timestamps.

--------------------------------------------------

Rule 5

Every repeatable object supports visibility.

--------------------------------------------------

Rule 6

Modules may only modify their own section.

==================================================
4. ROOT RESUME OBJECT
==================================================

Resume

│

├── schemaVersion

├── createdAt

├── updatedAt

├── locale

├── template

├── metadata

│

├── personal

├── contact

├── profiles

├── summary

│

├── experience[]

├── education[]

├── skills[]

├── projects[]

├── achievements[]

├── certifications[]

├── publications[]

├── volunteer[]

├── languages[]

├── references[]

├── extra[]

└── others[]

--------------------------------------------------

Field Definitions

schemaVersion

Type

String

Example

1.0.0

Purpose

Resume schema compatibility.

--------------------------------------------------

createdAt

Type

ISO Date String

Purpose

Resume creation time.

--------------------------------------------------

updatedAt

Type

ISO Date String

Purpose

Last modification.

--------------------------------------------------

locale

Example

en

bn

Purpose

Language preference.

--------------------------------------------------

template

Stores the selected resume template.

==================================================
5. COMMON OBJECT STRUCTURE
==================================================

Every repeatable item shall follow the same structure.

Example

{
    id,
    order,
    visible,
    createdAt,
    updatedAt,
    data
}

--------------------------------------------------

Field Definitions

id

Unique identifier.

UUID preferred.

--------------------------------------------------

order

Integer

Controls rendering order.

--------------------------------------------------

visible

Boolean

Allows template-specific hiding.

--------------------------------------------------

createdAt

Creation timestamp.

--------------------------------------------------

updatedAt

Modification timestamp.

--------------------------------------------------

data

Stores the actual content.

==================================================
6. METADATA BLOCK
==================================================

Purpose

Stores application-level metadata.

Structure

metadata

│

├── completion

├── favorite

├── theme

├── lastEdited

├── notes

└── custom

--------------------------------------------------

completion

Calculated percentage.

Read-only.

--------------------------------------------------

favorite

Boolean

Allows bookmarking resumes.

--------------------------------------------------

theme

Future UI theme.

--------------------------------------------------

notes

Private notes.

Never exported.

==================================================
7. PERSONAL INFORMATION
==================================================

personal

│

├── fullName

├── preferredName

├── title

├── departments[]

├── dateOfBirth

├── nationality

├── city

├── country

├── portfolioPhoto

├── availability

└── workAuthorization

--------------------------------------------------

Field Details

fullName

Required

Maximum

100 characters.

--------------------------------------------------

preferredName

Optional.

--------------------------------------------------

title

Example

Software Engineer

Machine Learning Engineer

Backend Developer

--------------------------------------------------

departments[]

Supports multiple departments.

Examples

Computer Science

Artificial Intelligence

Cyber Security

Embedded Systems

--------------------------------------------------

availability

Example

Immediately

30 Days

60 Days

Student

==================================================
8. CONTACT INFORMATION
==================================================

contact

│

├── phones[]

├── emails[]

├── addresses[]

├── preferredContact

└── emergencyContact

--------------------------------------------------

phones[]

Each phone stores

Number

Country Code

Label

Visible

--------------------------------------------------

emails[]

Each email stores

Address

Label

Visible

--------------------------------------------------

addresses[]

Supports

Home

Office

Current

Permanent

==================================================
9. PROFILE LINKS
==================================================

profiles[]

Each profile object

{

type,

label,

url,

username,

visible

}

--------------------------------------------------

Supported Types

GitHub

LinkedIn

Portfolio

Kaggle

LeetCode

Codeforces

HackerRank

ResearchGate

Google Scholar

ORCID

Medium

YouTube

Behance

Dribbble

Custom

--------------------------------------------------

New profile types should be added through MetadataModel.

Never modify ResumeModel.

==================================================
10. SUMMARY
==================================================

summary

│

├── text

├── lastGenerated

├── aiGenerated

└── visible

--------------------------------------------------

text

Stores the official professional summary.

Markdown supported.

--------------------------------------------------

aiGenerated

Boolean

Reserved for future AI assistance.

--------------------------------------------------

visible

Allows hiding summary in selected templates.

==================================================
ARCHITECTURE DECISION RECORD
==================================================

ADR-DM-001

Decision

Every repeatable object follows the same structure.

Reason

Consistency.

Future drag-and-drop support.

Undo/Redo compatibility.

--------------------------------------------------

ADR-DM-002

Decision

Support multiple departments.

Reason

Modern professionals often belong to multiple domains.

--------------------------------------------------

ADR-DM-003

Decision

Support unlimited profile links.

Reason

Avoid future schema changes.

==================================================
11. EXPERIENCE
==================================================

Every work experience shall use the Common Object Structure.

experience[]

↓

Common Object

↓

data

--------------------------------------------------

Experience Data

data

│

├── company

├── website

├── logo

├── employmentType

├── jobTitle

├── department

├── location

├── workMode

├── dateRange

├── current

├── responsibilities[]

├── achievements[]

├── technologies[]

├── projects[]

├── manager

├── reference

├── salary

├── reasonForLeaving

├── attachments[]

├── links[]

└── notes

--------------------------------------------------

company

Type

String

Required

Yes

Maximum

100 characters

--------------------------------------------------

website

Type

URL

Optional

--------------------------------------------------

employmentType

Allowed Values

Full Time

Part Time

Internship

Contract

Freelance

Remote Contract

Volunteer

Research

Teaching Assistant

Other

--------------------------------------------------

workMode

Allowed Values

On Site

Hybrid

Remote

--------------------------------------------------

dateRange

Uses the shared DateRange object.

dateRange

{

start,

end,

current

}

--------------------------------------------------

responsibilities[]

Ordered list.

Markdown supported.

--------------------------------------------------

achievements[]

Ordered list.

Markdown supported.

--------------------------------------------------

technologies[]

References MetadataModel.

Each technology stores

{

name,

category,

version,

visible

}

--------------------------------------------------

projects[]

References project ids when applicable.

--------------------------------------------------

attachments[]

Future use.

Supports

Offer Letter

Experience Letter

Certificate

Evaluation

--------------------------------------------------

links[]

Supports

Company Profile

Portfolio

Article

Presentation

==================================================
12. EDUCATION
==================================================

education[]

↓

Common Object

↓

data

--------------------------------------------------

Education Data

data

│

├── institution

├── website

├── logo

├── degree

├── major

├── minor

├── specialization

├── dateRange

├── cgpa

├── gradingScale

├── classRank

├── supervisor

├── thesis

├── coursework[]

├── activities[]

├── honors[]

├── location

├── attachments[]

└── notes

--------------------------------------------------

degree

Examples

SSC

HSC

Diploma

BSc

MSc

MPhil

PhD

--------------------------------------------------

cgpa

Type

Number

Optional

--------------------------------------------------

gradingScale

Examples

4.00

5.00

100

--------------------------------------------------

thesis

Markdown supported.

--------------------------------------------------

coursework[]

Array

References MetadataModel.

--------------------------------------------------

honors[]

Dean List

Merit Scholarship

Gold Medal

Others

==================================================
13. SHARED SUB OBJECTS
==================================================

The following objects are reusable.

--------------------------------------------------

DateRange

{

start,

end,

current

}

--------------------------------------------------

Location

{

city,

state,

country,

remote

}

--------------------------------------------------

Link

{

label,

url,

type,

visible

}

--------------------------------------------------

Attachment

{

name,

type,

file,

description

}

==================================================
14. DATA MODEL DECISIONS
==================================================

ADR-DM-004

Decision

Use shared objects.

Reason

Reduces duplicated code.

Improves maintainability.

--------------------------------------------------

ADR-DM-005

Decision

Store responsibilities and achievements separately.

Reason

Resume templates frequently display them independently.

--------------------------------------------------

ADR-DM-006

Decision

Technology references use MetadataModel.

Reason

Allows autocomplete and avoids duplicated spellings.

==================================================
15. SKILLS
==================================================

skills[]

↓

Common Object

↓

data

--------------------------------------------------

Skill Data

data

│

├── name

├── category

├── proficiency

├── yearsOfExperience

├── lastUsed

├── verified

├── certification

├── keywords[]

├── visible

└── notes

--------------------------------------------------

name

Required

Examples

Java

Python

React

Docker

TensorFlow

--------------------------------------------------

category

Examples

Programming Language

Framework

Database

Cloud

DevOps

Operating System

Tool

Soft Skill

Language

--------------------------------------------------

proficiency

Allowed Values

Beginner

Intermediate

Advanced

Expert

--------------------------------------------------

yearsOfExperience

Number

Optional

--------------------------------------------------

verified

Boolean

Reserved for future credential verification.

--------------------------------------------------

keywords[]

Supports search and filtering.

==================================================
16. PROJECTS
==================================================

projects[]

↓

Common Object

↓

data

--------------------------------------------------

Project Data

data

│

├── name

├── subtitle

├── role

├── organization

├── teamSize

├── methodology

├── status

├── dateRange

├── description

├── responsibilities[]

├── achievements[]

├── technologies[]

├── github

├── demo

├── documentation

├── presentation

├── screenshots[]

├── awards[]

├── links[]

├── attachments[]

├── repositoryVisibility

├── featured

└── notes

--------------------------------------------------

status

Allowed Values

Completed

Ongoing

Archived

Research

Prototype

--------------------------------------------------

repositoryVisibility

Allowed Values

Public

Private

Not Available

--------------------------------------------------

featured

Boolean

Allows highlighting selected projects.

--------------------------------------------------

technologies[]

Uses MetadataModel references.

==================================================
17. ACHIEVEMENTS
==================================================

achievements[]

↓

Common Object

↓

data

--------------------------------------------------

Achievement Data

data

│

├── title

├── category

├── organization

├── date

├── description

├── link

├── attachment

├── featured

└── visible

--------------------------------------------------

category

Academic

Professional

Competition

Scholarship

Award

Research

Leadership

Community

==================================================
18. CERTIFICATIONS
==================================================

certifications[]

↓

Common Object

↓

data

--------------------------------------------------

Certification Data

data

│

├── name

├── issuer

├── credentialId

├── issueDate

├── expiryDate

├── neverExpires

├── credentialURL

├── skillsCovered[]

├── attachment

└── visible

==================================================
19. PUBLICATIONS
==================================================

publications[]

↓

Common Object

↓

data

--------------------------------------------------

Publication Data

data

│

├── title

├── publicationType

├── journal

├── conference

├── publisher

├── doi

├── isbn

├── publicationDate

├── authors[]

├── abstract

├── citation

├── url

├── attachment

└── visible

--------------------------------------------------

publicationType

Journal

Conference

Book

Book Chapter

Magazine

Patent

Technical Report

White Paper

==================================================
20. LANGUAGES
==================================================

languages[]

↓

Common Object

↓

data

--------------------------------------------------

Language Data

data

│

├── language

├── native

├── speaking

├── listening

├── reading

├── writing

├── certification

└── visible

--------------------------------------------------

Proficiency Scale

Basic

Conversational

Professional

Fluent

Native

==================================================
21. REFERENCES
==================================================

references[]

↓

Common Object

↓

data

--------------------------------------------------

Reference Data

data

│

├── name

├── designation

├── organization

├── relationship

├── email

├── phone

├── address

├── website

├── notes

└── visible

==================================================
22. VOLUNTEER EXPERIENCE
==================================================

volunteer[]

↓

Common Object

↓

data

--------------------------------------------------

Volunteer Data

data

│

├── organization

├── role

├── dateRange

├── location

├── description

├── achievements[]

├── hours

├── supervisor

├── certificate

└── visible

==================================================
23. EXTRA
==================================================

extra[]

↓

Common Object

↓

data

Supports user-defined resume sections that do not fit predefined categories.

Examples

Hackathons

Workshops

Competitions

Training

Leadership

Memberships

==================================================
24. OTHERS
==================================================

others[]

↓

Common Object

↓

data

Flexible key-value storage.

Examples

Driving License

Passport

Visa Status

Military Service

Security Clearance

Hobbies

Interests

Personal Website

Additional Notes

==================================================
ARCHITECTURE DECISION RECORD
==================================================

ADR-DM-007

Decision

Every repeatable section follows the Common Object Structure.

Reason

Consistency across rendering, validation, storage, import/export, and future drag-and-drop support.

--------------------------------------------------

ADR-DM-008

Decision

Skills are categorized instead of stored as a flat list.

Reason

Improves filtering, searching, and template customization.

--------------------------------------------------

ADR-DM-009

Decision

Projects support multiple external resources.

Reason

Modern software portfolios often include source code, live demos, presentations, documentation, and media.


==================================================
25. VALIDATION RULES
==================================================

Validation is performed at three levels.

--------------------------------------------------

Level 1

Component Validation

Purpose

Prevent invalid user input.

Examples

• Required fields
• Maximum length
• URL format
• Email format
• Phone format

--------------------------------------------------

Level 2

Module Validation

Purpose

Ensure section integrity.

Examples

Experience

Company Name is required.

Education

Institution is required.

Projects

Project Name is required.

--------------------------------------------------

Level 3

Model Validation

Purpose

Validate the complete ResumeModel.

Checks

• Schema Version
• Duplicate IDs
• Broken References
• Invalid Dates
• Invalid Metadata References

==================================================
26. DEFAULT VALUES
==================================================

ResumeModel

Default Values

schemaVersion

1.0.0

--------------------------------------------------

locale

en

--------------------------------------------------

template

modern

--------------------------------------------------

metadata

{

completion:0,

favorite:false,

theme:"default",

lastEdited:null,

notes:"",

custom:{}

}

--------------------------------------------------

summary

{

text:"",

visible:true,

aiGenerated:false

}

--------------------------------------------------

Every array defaults to

[]

Never null.

==================================================
27. IDENTIFIER RULES
==================================================

Every repeatable object owns a unique identifier.

Preferred Format

UUID v4

Example

550e8400-e29b-41d4-a716-446655440000

--------------------------------------------------

IDs never change.

Ordering changes

do NOT

modify IDs.

==================================================
28. ORDERING RULES
==================================================

Every repeatable object stores

order

Purpose

Display sequence.

Sorting

Ascending.

Templates should ignore insertion order and use

order

instead.

==================================================
29. VISIBILITY RULES
==================================================

Every repeatable object supports

visible

Purpose

Hide items without deleting them.

Examples

Hide

Old Internship

Show

Current Job

Templates respect

visible=true

==================================================
30. JSON COMPATIBILITY
==================================================

The ResumeModel shall be directly serializable.

Supported Operations

Export JSON

Import JSON

Clone Resume

Autosave

Undo (future)

Cloud Sync (future)

No transformation is required before serialization.

==================================================
31. MARKDOWN COMPATIBILITY
==================================================

Markdown Export reads only

data

objects.

System metadata is ignored.

Markdown supports

Lists

Paragraphs

Headings

Links

Inline Code

Bold

Italic

Markdown Import reconstructs ResumeModel using parsers.

==================================================
32. TEMPLATE COMPATIBILITY
==================================================

Templates consume ResumeModel.

Templates never modify ResumeModel.

Template Engine

↓

Reads ResumeModel

↓

Produces HTML

↓

Produces PDF

Future templates remain compatible provided they follow this rule.

==================================================
33. IMPORT COMPATIBILITY
==================================================

Supported

JSON

Markdown

Future

LinkedIn Import

Europass Import

Google Docs Import

Word Import

Each importer converts external data into ResumeModel.

==================================================
34. EXPORT COMPATIBILITY
==================================================

Supported

JSON

Markdown

Future

HTML

PDF

DOCX

LaTeX

ATS Plain Text

All exporters read the same ResumeModel.

==================================================
35. VERSION COMPATIBILITY
==================================================

Every ResumeModel stores

schemaVersion

Importers compare schema versions.

If versions differ,

MigrationService

(future)

performs conversion.

==================================================
36. FUTURE EXTENSIONS
==================================================

The following sections are reserved.

Awards

Patents

Research

Teaching

Courses

Books

Podcasts

Videos

Open Source Contributions

Mentoring

Speaking Engagements

Professional Memberships

These additions should be implemented as new modules.

Existing schema should remain unchanged.

==================================================
37. COMPLETE RESUMEMODEL STRUCTURE
==================================================

Resume

│

├── schemaVersion

├── createdAt

├── updatedAt

├── locale

├── template

├── metadata

│

├── personal

├── contact

├── profiles[]

├── summary

│

├── experience[]

├── education[]

├── skills[]

├── projects[]

├── achievements[]

├── certifications[]

├── publications[]

├── languages[]

├── volunteer[]

├── references[]

├── extra[]

└── others[]

==================================================
38. ARCHITECTURE DECISION RECORD
==================================================

ADR-DM-010

Decision

Arrays never store null.

Reason

Simplifies iteration and serialization.

--------------------------------------------------

ADR-DM-011

Decision

Templates are read-only consumers.

Reason

Preserves ResumeModel integrity.

--------------------------------------------------

ADR-DM-012

Decision

Every importer must convert external formats into ResumeModel before rendering.

Reason

Maintains a single internal representation.

==================================================
39. IMPLEMENTATION CHECKLIST
==================================================

ResumeModel.js

✓ Root structure

✓ Metadata

✓ Personal

✓ Contact

✓ Profiles

✓ Summary

✓ Experience

✓ Education

✓ Skills

✓ Projects

✓ Achievements

✓ Certifications

✓ Publications

✓ Languages

✓ Volunteer

✓ References

✓ Extra

✓ Others

--------------------------------------------------

MetadataModel.js

✓ Departments

✓ Technologies

✓ Skills

✓ Languages

✓ Profile Types

✓ Employment Types

✓ Degree Types

✓ Templates

==================================================
40. REVISION HISTORY
==================================================

Version 1.0.0

• Initial frozen ResumeModel specification.

==================================================
END OF DOCUMENT
==================================================
