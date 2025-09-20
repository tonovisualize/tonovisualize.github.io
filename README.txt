# tonovisualize.github.io

Project Title
TONO: Visualize Eczema in Multiple Skintones

***How to Access the Project***

There are two ways to access this project:

Locally (via files in this package):
- Open index.html in a web browser (recommended: Chrome or Safari) to access Homepage.
- Ensure the accompanying viewer.css, main.css, newviewer.js, data.js, and conditionContent.js files remain in their correct folders (styles.css/ and script.js/).
- The images/ folder must also be preserved so that image assets display correctly.

Hosted (via URL):
- If deployed to GitHub Pages or another hosting service, open the provided project URL in a browser.

Technologies Used To Generate the Project: 
- HTML5 — project structure.
- CSS3 — custom styles (viewer.css, main.css).
- JavaScript (ES6) — interactivity (newviewer.js, data.js, conditionContent.js).
- Google Fonts API — Inter font family.
- No frameworks (React, Vue, etc.) were used; the project is built with vanilla JavaScript.

To View the Project Browsers tested:
- Google Chrome Version 127.0.6533.99 (Official Build) (64-bit, macOS)
- Safari Version 18.6 (17618.3.12.11.7, macOS)
- Other modern browsers (Firefox, Edge) may work but were not tested extensively.

Operating System tested on:
- macOS Sonoma 14.6.1

Hardware tested on:
- MacBook Pro (Apple Silicon, M1)
- iPad Pro 12.9" (Safari iOS 18)
- Samsung S21, S23 (Android, Chrome 127.0.6533.99)
- IPhone 16 (Safari iOS 18)

Project Structure: 
- index.html → Homepage
- viewer.html → Main interactive eczema viewer page.
- viewer.css → Custom styles for the viewer UI (skin tone swatches, severity buttons, dropdowns, comparison mode).
- newviewer.js → JavaScript logic to update images based on eczema type, skin tone, severity, and region.
- data.js → Contains paths to images for dynamic rendering.
- conditionContent.js → Contains condition-specific descriptor text (About and Differential Diagnosis tabs).
- images/ → Eczema images, icons, and branding assets.

Requirements
- No database or external backend is required.
- Requires only a modern browser and local/hosted file access.
- Deploying on GitHub Pages
- Create a GitHub repository for your project.
- Push all project files (HTML, CSS, JS, and images) to the repository.
- In the repository, go to Settings → Pages.
- Under “Branch,” select main (or master) and set the folder to /root (if your index.html is in the root).
- Save the settings. GitHub will generate a deployment link in the format:
- https://<your-username>.github.io/<repository-name>/
- Access your project at that link. 

Example (this is my repository):
https://tonovisualize.github.io/