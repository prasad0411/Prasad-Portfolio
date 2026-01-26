# Design Document — Prasad Kanade Portfolio

## Project description

This project is a static personal portfolio website built with vanilla HTML5, CSS3, and ES6 modules.
It showcases my experience, education, leadership, skills, projects, and contact information in a
clean, developer-themed UI.

Key interactive elements include:

- Scroll-reveal animations for content sections
- Animated “Matrix rain” canvas background on the homepage
- Animated skill bars
- Animated stats counter (count-up on scroll)
- Projects page neural-network canvas visualization
- “Copy email” interaction in the contact section

## Target users (personas)

### Persona 1 — Recruiter Rachel

- **Role**: Technical recruiter evaluating candidates quickly
- **Goals**: Confirm role fit, see strongest skills, find resume/contact fast
- **Needs**: Clear “About”, measurable impact, easy access to resume and LinkedIn
- **Pain points**: Overly long pages, hard-to-find contact/resume

### Persona 2 — Hiring Manager Harish

- **Role**: Engineering manager reviewing depth and project quality
- **Goals**: Validate experience, see project complexity, assess engineering clarity
- **Needs**: Project details, metrics, links to work, clear structure
- **Pain points**: Unclear impact, missing proof/links, cluttered visuals

### Persona 3 — Peer/Student Priya

- **Role**: Student/peer looking for inspiration and references
- **Goals**: Understand how portfolio is built, learn design patterns, reuse ideas
- **Needs**: Organized structure, readable code, documentation, clear build steps
- **Pain points**: No setup guide, messy folders, unclear tech choices

## User stories

- As a recruiter, I want to see a short summary and key skills immediately so I can decide whether
  to proceed in under 60 seconds.
- As a recruiter, I want a resume download button so I can share it internally.
- As a hiring manager, I want to see projects with measurable outcomes so I can judge impact.
- As a hiring manager, I want outbound links (GitHub/publication/company) so I can validate work.
- As a visitor, I want the page to feel interactive but fast so it doesn’t feel “laggy”.
- As a visitor, I want to copy the email address with one click so I can contact quickly.

## Design mockups / wireframes

Wireframes are provided as simple HTML pages under `docs/`:

- `docs/wireframe-homepage.html`
- `docs/wireframe-projects.html`
- `docs/wireframe-ai-page.html`

## Information architecture

- **Home (`index.html`)**
  - Hero (name + subtitle + buttons)
  - About
  - Journey / timeline
  - Leadership
  - Skills (skill bars)
  - Impact (stats counter)
  - GitHub activity (static metrics + repo links)
  - Contact (copy email + external links)
- **Projects (`projects.html`)**
  - Projects list with highlights, tags, and links
  - Neural network visualization for the research project
- **AI-generated page (`ai-generated.html`)**
  - AI-generated technical article
  - Clear AI disclosure section (model + prompt + usage)
