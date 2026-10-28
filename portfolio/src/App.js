import React from 'react';
import './App.css';

const skills = ['JavaScript', 'React', 'Node.js', 'HTML / CSS', 'GitHub', 'UI Design'];

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern one-page portfolio crafted to present personal work, achievements, and contact details clearly.',
    stack: ['React', 'CSS', 'Responsive'],
  },
  {
    title: 'Business Landing Page',
    description: 'A clean marketing landing page designed to highlight services, social proof, and conversion-focused actions.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Web App Dashboard',
    description: 'A sleek interface for displaying analytics, quick actions, and key metrics in a minimal dashboard layout.',
    stack: ['React', 'Charts', 'Design System'],
  },
];

const stats = [
  { value: '3+', label: 'Years of learning' },
  { value: '6+', label: 'Projects built' },
  { value: '100%', label: 'Passion for design' },
];

function App() {
  return (
    <div className="portfolio-app">
      <header className="topbar">
        <div className="brand">Prashen</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer</p>
            <h1>I build simple, elegant digital experiences.</h1>
            <p className="lead">
              I’m Prashen, a developer focused on creating modern, responsive, and user-friendly web experiences.
            </p>
            <div className="cta-row">
              <a className="primary-btn" href="#projects">View Projects</a>
              <a className="secondary-btn" href="#contact">Let’s Talk</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="mini-label">Available for work</div>
            <h2>UI • Frontend • Web Design</h2>
            <ul>
              <li>Responsive web design</li>
              <li>Modern interface development</li>
              <li>Fast, clean, accessible pages</li>
            </ul>
          </div>
        </section>

        <section className="stats" aria-label="Highlights">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Turning ideas into clear, engaging user experiences.</h2>
          </div>
          <div className="about-grid">
            <p>
              I enjoy building websites that feel polished, approachable, and easy to use. My focus is on clean code,
              thoughtful design, and performance that works well for real users.
            </p>
            <p>
              Whether it’s a personal portfolio, a startup landing page, or a small business website, I aim to create
              digital experiences that are both functional and memorable.
            </p>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools and technologies I use.</h2>
          </div>
          <div className="skill-tags">
            {skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-badge">Featured</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer section" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something meaningful.</h2>
        <div className="footer-links">
          <a href="mailto:hello@prashen.dev">hello@prashen.dev</a>
          <a href="https://github.com/prashen" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
