Digital Co UK - Website with GSAP Animations

Overview

This project is a visually appealing and interactive website showcasing digital performance solutions. The site employs GSAP (GreenSock Animation Platform) for dynamic animations and smooth transitions, creating an engaging user experience. The layout is responsive, with modern styling and clean design.

Features

1. GSAP Animations

The website utilizes GSAP animations to enhance visual appeal:

Banner Section Animations:

Images fade in and slide into place with slight delays.

Headings and buttons appear smoothly from offset positions.

Section About Animations:

Text and buttons fade in as they scroll into view using ScrollTrigger.

2. Responsive Design

The site uses CSS properties like vw, vh, and dvh for scalability across devices, ensuring a consistent user experience.

3. Interactive Elements

Hover effects on navigation links and buttons.

Dynamic hover interactions for images.

4. Modern Typography

Clear text hierarchy with headings and subheadings for readability.

5. Scalable Vector Graphics (SVG)

SVGs are used for logos and icons, ensuring sharpness on all screen sizes.

Technologies Used

Frontend:

HTML5

CSS3 (Flexbox, Grid, Transitions)

Animations:

GSAP (GreenSock Animation Platform)

ScrollTrigger plugin for scroll-based animations.

Installation

Clone the repository:

git clone https://github.com/<your-username>/digital-co-uk.git

Navigate to the project directory:

cd digital-co-uk

Open index.html in your preferred browser.

File Structure

|-- index.html
|-- style.css
|-- script.js
|-- /assets
    |-- images

index.html: Main HTML structure.

style.css: Styling for the website.

script.js: GSAP animations.

/assets/images: Image files for the site.

GSAP Animations Breakdown

Banner Section:

#img1, #img2, #img3: Fade and slide animations with delays.

.bannersection h1: Smooth fade-in from the top.

.findoutmore: Buttons fade and slide into view.

Section About:

.sectionabout h5, .sectionabout h2, .sectionabout .findoutmore:

Scroll-triggered animations using GSAP's ScrollTrigger plugin.

How to Customize

Modify Animations: Open script.js and adjust the GSAP animation properties (e.g., duration, delay, x, y, etc.).

Styling: Update style.css to change colors, fonts, or layouts.

Content: Edit index.html to replace text, images, or links.

Contribution

Contributions are welcome! Follow these steps:

Fork the repository.

Create a new branch:

git checkout -b feature-name

Make your changes and commit them:

git commit -m "Add feature-name"

Push to the branch:

git push origin feature-name

Submit a pull request.
