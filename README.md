# Prasad Kanade Portfolio

**Author**: Prasad Kanade  
**Course**: CS 5610 Web Development - Spring 2026  
**Institution**: Northeastern University  
**Deployed Site**: https://prasad0411.github.io/prasad-portfolio/

## Project Objective

A professional portfolio website showcasing software engineering experience, AI/ML research, and technical projects. Built with vanilla HTML5, CSS3, and ES6+ JavaScript featuring interactive Matrix rain background and neural network visualization to demonstrate advanced frontend development skills.

## Screenshots

### Homepage
![Portfolio Homepage](docs/Home%20Page.png)

### Projects Page
![Projects Page](docs/Projects.png)

### AI Generated Article
![AI Generated Page](docs/AI%20Generated%20Page.png)

### Design Wireframes

![Homepage Wireframe](docs/wireframe-homepage.jpg)

![Projects Wireframe](docs/wireframe-projects.jpg)

![AI Page Wireframe](docs/wireframe-ai-page.jpg)

## Features

- Matrix Rain Background: Canvas-based falling code animation with mouse interaction
- Neural Network Visualization: Animated AI training process on projects page
- Scroll Animations: Progressive content reveal using Intersection Observer
- Interactive Skills: Animated progress bars showing technical proficiency
- Stats Counter: Count-up animation for impact metrics
- Email Copy: One-click email copy-to-clipboard functionality
- Professional Timeline: Visual career progression with hover effects
- Responsive Design: Mobile-friendly layout with grid and flexbox

## Technologies Used

- HTML5 with semantic markup
- CSS3 with Grid, Flexbox, animations, and custom properties
- JavaScript ES6+ with modules, Canvas API, and Intersection Observer
- Git and GitHub for version control
- GitHub Pages for deployment

## Project Structure
```
Prasad-Portfolio/
├── index.html              # Homepage
├── projects.html           # Projects showcase
├── ai-generated.html       # AI-generated article
├── css/
│   ├── main.css           # Main stylesheet
│   └── components.css     # Component styles
├── js/
│   ├── main.js            # Homepage JavaScript
│   ├── projects.js        # Projects page JavaScript
│   └── utils.js           # Utility functions
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
├── package.json           # Dependencies
├── .prettierrc            # Code formatting config
├── .eslintrc.cjs          # Linting config
├── LICENSE                # MIT License
└── README.md              # This file
```

## Installation and Setup

### Prerequisites

- Node.js version 14 or higher
- Git

### Local Development
```bash
# Clone repository
git clone https://github.com/prasad0411/prasad-portfolio.git
cd prasad-portfolio

# Install dependencies
npm install

# Format code
npm run format

# Lint code
npm run lint

# Start local server
python3 -m http.server 8000

# Open browser at http://localhost:8000
```

## Creative Components

### Matrix Rain Background

- Canvas-based animation using vanilla JavaScript
- Real code characters from SQL, Java, and Python
- Mouse interaction - code parts away from cursor
- Runs continuously at 30fps
- No external libraries required

### Neural Network Visualization

- Canvas rendering of 5-8-8-3 neural network architecture
- Progressive node and connection activation
- Real-time accuracy counter from 0% to 97.6%
- Loads on scroll using Intersection Observer
- Represents Thyroid Disease Classification research project

### Scroll-Based Animations

- Timeline items fade in sequentially with staggered delays
- Leadership cards reveal on viewport entry
- Skill bars animate progressively on scroll
- Stats counter triggers when visible
- Smooth, performant animations throughout

## GenAI Usage Disclosure

### Claude 3.5 Sonnet (Anthropic) - January 25, 2026

**1. AI-Generated Blog Post**

- File: ai-generated.html
- Prompt: "Write a comprehensive technical article about building microservices with Spring Boot, covering architecture patterns, service discovery, API gateways, communication strategies, security, and deployment."
- Usage: 100% AI-generated content with human review for technical accuracy
- Disclosed: Prominent AI disclosure section included on the page

**2. Code Structure Assistance**

- Prompts: "Help optimize CSS animations", "Debug Canvas API rendering issues", "Improve code organization"
- Usage: Code suggestions, bug fixes, optimization recommendations
- Implementation: Human-written code with AI guidance for best practices

**3. Design Documentation**

- Prompts: "Help structure design document with user personas and user stories", "Format professional README"
- Usage: Documentation framework and content organization
- Implementation: Customized for specific project requirements

**4. Content Review**

- Prompts: "Review professional experience descriptions for clarity"
- Usage: Content refinement and clarity improvements
- Implementation: All personal content written by human, reviewed with AI assistance

**Human Contributions:**

- All creative component implementations including Matrix rain and Neural network
- Project architecture and design decisions
- Interactive functionality and user experience design
- All personal content writing
- Final testing, debugging, and deployment

## Rubric Compliance

- Design document with personas, stories, and mockups
- Meaningful homepage with professional content
- ES6 modules in package.json and script tags
- Deployed on GitHub Pages
- Original creative components
- Organized folder structure
- Meta tags for author, description, and icon
- Original JavaScript over 150 lines without libraries
- Prettier formatted
- W3C compliant HTML
- ESLint compliant with no errors
- All images include alt attributes
- 3 HTML pages with different URLs
- Class-based CSS selectors
- Standard HTML tags only
- Clean CSS without important declarations
- CSS Grid and Flexbox throughout
- Comprehensive README with screenshot and instructions
- package.json with dependencies listed
- MIT License included

## Contact

**Prasad Kanade**  
Email: kanade.pra@northeastern.edu  
LinkedIn: https://www.linkedin.com/in/prasad-kanade-/  
GitHub: https://github.com/prasad0411

## License

This project is licensed under the MIT License. See the LICENSE file for details.