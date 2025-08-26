# 🚀 Jashwanth Reddy – Portfolio Website

A personal cyberpunk-themed portfolio built with HTML, CSS, and JavaScript, featuring animated glitch text, rotating titles, project showcase cards, skill progress bars, and a contact form integrated with Google Apps Script.

⸻

# 🌟 Features
•	⚡ Glitch Hero Title with animated text rotation (Cybersecurity Student, Ethical Hacker, Web Developer)
•	🎭 Cyberpunk background (animated grid + gradient effects)
•	🖼 Responsive Design (optimized for desktop & mobile)
•	🔄 Rotating Text Animation (hero section headline cycles)
•	🏆 Skills Section with animated percentage bars
•	🛠 Tools Section with sliding card animations
•	💻 Projects Section with interactive flip cards
•	📩 Contact Form connected to Google Sheets via Apps Script

⸻

# 🛠️ Technologies Used
•	Frontend: HTML5, CSS3, JavaScript (Vanilla)
•	Fonts: Orbitron, Rajdhani
•	Icons: Font Awesome
•	Hosting: Works with GitHub Pages, Netlify, or Vercel

⸻

# 📂 Project Structure
```bash
📁 portfolio/
 ├── 📄 index.html        # Main HTML
 ├── 📄 style.css         # Stylesheet
 ├── 📄 script.js         # JavaScript animations & logic
 ├── 📁 images/           # Assets (profile, projects, avatar, etc.)
 └── 📄 README.md         # Documentation
```
# ⚡ Setup & Usage
1.	Clone Repository
	
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```
2.	Open in Browser
Just double-click index.html or use a local server:
```bash
npx live-server
```
3.	Deploy Online
	•	GitHub Pages → push repo & enable Pages in settings
	•	Netlify/Vercel → drag & drop project folder

⸻

# 🎨 Customization
Update Hero Text: in index.html
```html
<h1 class="glitch-text break-mobile" data-text="Cybersecurity Student">
   Cybersecurity Student
</h1>
```
# Change to your roles (supports looping).

•	Projects Section: replace images + links inside <section id="projects">.
•	Skills Section: update data-percent values inside style.css & script.js.
•	Contact Form: edit your Google Apps Script URL inside script.js:
 
```js
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
```
# 📱 Responsive Design
•	Desktop: Full cyberpunk layout
•	Mobile:
•	Adjusted font sizes for glitch text
•	Special handling for long text (Cybersecurity Student breaks neatly)
•	Hamburger navigation menu

⸻

# ⚖️ License

MIT License – free to use & customize.

# 📩 Contact

•📧 Email: nandyalajashwanthreddy317@gmail.com

•🌐 GitHub: [@jashwanthreddy21](https://github.com/jashwanthreddy21/)

•💼 LinkedIn: [Nandyala Jashwanth Reddy](https://www.linkedin.com/in/nandyala-jashwanth-reddy-49b4552bb/)


# Live Demo
click [Here](https://jashwanthreddy21.github.io/MyPortfolio/)
