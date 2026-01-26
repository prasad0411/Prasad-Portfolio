# Design Document — Prasad Kanade Portfolio

## Project Description

This project is a static personal portfolio website built with vanilla HTML5, CSS3, and ES6 modules. It showcases my experience, education, leadership, skills, projects, and contact information in a clean, developer-themed UI with Matrix rain background and neural network visualization.

Key interactive elements include:

- Animated Matrix rain canvas background with mouse interaction
- Neural network training visualization on AI/ML project
- Scroll-reveal animations for all content sections
- Animated skill bars with staggered timing
- Animated stats counter with scroll-based triggering
- Copy-to-clipboard email functionality
- Professional timeline with hover effects

## Target Users (Personas)

### Persona 1 — Recruiter Rachel

- **Role**: Technical recruiter evaluating candidates quickly
- **Goals**: Confirm role fit, see strongest skills, find resume and contact information fast
- **Needs**: Clear about section, measurable impact, easy access to resume and LinkedIn
- **Pain points**: Overly long pages, hard-to-find contact information

### Persona 2 — Hiring Manager Harish

- **Role**: Engineering manager reviewing depth and project quality
- **Goals**: Validate experience, see project complexity, assess engineering clarity
- **Needs**: Project details, metrics, links to work, clear structure
- **Pain points**: Unclear impact, missing proof or links, cluttered visuals

### Persona 3 — Peer/Student Priya

- **Role**: Student or peer looking for inspiration and references
- **Goals**: Understand how portfolio is built, learn design patterns, reuse ideas
- **Needs**: Organized structure, readable code, documentation, clear build steps
- **Pain points**: No setup guide, messy folders, unclear tech choices

## User Stories

- As a recruiter, I want to see a short summary and key skills immediately so I can decide whether to proceed in under 60 seconds.
- As a recruiter, I want a resume download button so I can share it internally.
- As a hiring manager, I want to see projects with measurable outcomes so I can judge impact.
- As a hiring manager, I want outbound links to GitHub, publications, and company sites so I can validate work.
- As a visitor, I want the page to feel interactive but fast so it does not feel laggy.
- As a visitor, I want to copy the email address with one click so I can contact quickly.
- As a developer, I want to see technical creativity through animations and visualizations so I know the candidate has strong frontend skills.

## Design Mockups

Visual mockups were created during the planning phase to establish layout structure, visual hierarchy, and user flow before implementation. All mockup files are located in the docs folder.

### Wireframe Mockups

- wireframe-homepage.jpg - Homepage layout structure showing navigation, hero section with profile photo, about section, professional timeline, leadership cards, skills categories, impact metrics, GitHub activity, and contact section
- wireframe-projects.jpg - Projects page layout displaying project cards with neural network visualization for AI/ML research project, tech stack tags, and external links
- wireframe-ai-page.jpg - AI-generated article page layout with blog post structure, multiple content sections, and prominent AI disclosure

### Implementation Screenshots

- Home Page.png - Homepage implementation
- Projects.png - Projects page implementation
- AI Generated Page.png - AI-generated article page implementation

These mockups guided the development process and ensured consistent visual design across all pages.

## Information Architecture

### Home Page (index.html)

- Hero Section: Professional subtitle, binary quote, action buttons, profile photo
- About: Educational background and research achievements
- Professional Journey: Timeline with 5 career milestones showing education, internships, full-time experience, and graduate studies
- Leadership and Mentorship: 3 cards showing training, mentoring, and collaboration achievements
- Technical Expertise: 6 skill categories with animated progress bars
- Quantified Impact: 4 key metrics with context
- GitHub Activity: Contribution stats and featured repositories
- Contact: Email with copy-to-clipboard, LinkedIn, GitHub links

### Projects Page (projects.html)

- Page Header: Title and subtitle
- Project Cards: 4 detailed projects with icons, badges, descriptions, highlights, tech tags, and links
- Special Feature: Neural network canvas visualization on Thyroid AI project
- Footer: Copyright information

### AI-Generated Page (ai-generated.html)

- Article Header: Title and subtitle
- Content: 13 sections covering Spring Boot microservices architecture
- AI Disclosure: Prominent section with model details, prompt, date, and usage description
- Footer: Copyright information

## Technical Implementation

### Creative Components

1. Matrix Rain Background - Canvas-based animation with mouse interaction using vanilla JavaScript
2. Neural Network Visualization - Animated AI training process showing nodes, connections, and accuracy counter
3. Scroll-Based Animations - Intersection Observer API for progressive content reveal

### Technology Stack

- HTML5 with semantic markup
- CSS3 with Grid, Flexbox, animations, and custom properties
- ES6+ JavaScript with modules and Canvas API
- No external libraries or frameworks

### File Organization

```
Prasad-Portfolio/
├── index.html
├── projects.html
├── ai-generated.html
├── css/
│   ├── main.css
│   └── components.css
├── js/
│   ├── main.js
│   ├── projects.js
│   └── utils.js
├── images/
│   ├── favicon.ico
│   ├── profile.jpg
│   └── projects/
├── assets/
│   └── resume.pdf
├── docs/
│   ├── DESIGN.md
│   ├── Home Page.png
│   ├── Projects.png
│   ├── LinkedIn.png
│   ├── Github.png
│   ├── AI Generated Page.png
│   ├── wireframe-homepage.jpg
│   ├── wireframe-projects.jpg 
│   └── wireframe-ai-page.jpg
├── package.json
├── .prettierrc
├── .eslintrc.cjs
├── LICENSE
└── README.md
```
