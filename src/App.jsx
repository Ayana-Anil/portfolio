import './App.css'
import { Reveal } from './Reveal'

function App() {
  return (
    <div className="portfolio">

      {/* SECTION 1: HERO */}
      <section className="section-hero bg-green">
        <header className="nav">
          <div className="logo"><span>✦</span>Ayana Anil</div>
          <div className="nav-links">
            {/* <a href="#work">Work</a> */}
            {/*<a href="#contact" className="btn-primary">Get in touch!</a>*/
            }
          </div>
        </header>

        <div className="hero-bg-text">
          <div className="solid left-align">AYANA</div>
          <div className="outline right-align">AYANA</div>
          <div className="outline left-align">AYANA</div>
          <div className="outline right-align">AYANA</div>
        </div>

        <div className="hero-content">
          <div className="hero-image-section">
            <div className="hero-brown-box">
              <div className="hero-image"></div>
            </div>
            <Reveal className="hero-intro" delay={0.2}>
              I am a Computer Science student.<br />
              I am a full stack developer. I am developing my skills in AI/ML and UI/UX dev.<br />
              I am passionate about programming and technology<br />
              I wanna builtt
            </Reveal>
          </div>
          <div className="hero-socials">
            <p>IG: @ixnahh_</p>
            <p>LI: /ayana-anil</p>
          </div>
        </div>

        <div className="black-bar"></div>

        <div className="scroll-down">
          Scroll<br />down
        </div>
      </section>

      {/* SECTION 2: INTRO */}
      <section className="section-intro bg-cream">
        <header className="nav nav-dark">
          <div className="logo logo-accent"><span>✦</span> Ayana Anil</div>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#contact" className="btn-primary">Get in touch!</a>
          </div>
        </header>

        <div className="intro-content">
          <Reveal className="intro-text-col" delay={0.1}>
            <h1 className="main-title">Hello,<br />I'm Ayana !</h1>
            <p className="intro-desc">
              I am a Computer Science student.<br />
              I am a full stack developer. I am developing my skills in AI/ML and UI/UX dev.<br />
              I am passionate about programming and technology<br />
              I wanna built the next big thing
            </p>
            <a href="https://linkedin.com/in/ayana-anil" className="btn-linkedin" target="_blank" rel="noopener noreferrer">
              <span className="search-icon">🔍</span> linkedin.com/in/ayana-anil
            </a>
          </Reveal>
        </div>

        {/* OVERLAPPING CONTACT CARD */}
        <div className="contact-wrapper">
          <div className="contact-green-bg"></div>
          <div className="contact-photo"></div>
          <div className="contact-badge-left">22nd Jan 2006</div>
          <div className="contact-badge-right">Indian</div>
          <div className="contact-info">
            <h3>Contact</h3>
            <p>📍 Kochi,Kerala</p>
            <p>✉️ ayanaanil2006@gmail.com</p>
            <p>📞 8848543186</p>
          </div>
          <div className="resume-bg-text">
            <div>RESUME</div>
            <div>RESUME</div>
            <div>RESUME</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SKILLS & EDU */}
      <section className="section-skills bg-green">
        <div className="grid-2-col">
          <div className="edu-col">
            <Reveal className="experience-box" delay={0.1}>
              <h2 className="section-title dark-text">Experience</h2>
              <div className="timeline dark-timeline">
                <div className="timeline-item">
                  <div className="year">2026-present</div>
                  <div className="details">
                    <strong>Developer intern at PMAccelerator</strong>
                    <span>Built and deployed AI applications using Python and LLM APIs. Developed mainly frontend along with backend services and integrated AI models into production workflows. Collaborated with engineers and product managers in an Agile environment.</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="year">2025</div>
                  <div className="details">
                    <strong>AI engineer Intern at RavnX Cineverse</strong>
                    <span>Contributing to developing AI-driven filmmaking tools and cinematic education initiatives integrating emotion analytics, storytelling, and technology.</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="year">2024</div>
                  <div className="details">
                    <strong>Frontend Developer intern at Gothree solutions</strong>
                    <span>Designed and deployed responsive, mobile-first UI components for core web pages using React/Tailwind/HTML/CSS for client companies.</span>
                  </div>
                </div>
              </div>

              <div className="pills dark-pills">
                <span className="pill dark-pill">#Creativity</span>
                <span className="pill dark-pill">#Communication</span>
                <span className="pill dark-pill">#Detail-oriented</span>
                <span className="pill dark-pill">#Adaptability</span>
              </div>
            </Reveal>
          </div>

          <div className="skills-col">
            <h2 className="section-title yellow-text">Skills</h2>

            <div className="skills-category-list">
              <Reveal className="skill-category" delay={0.1}>
                <h3>Programming Languages:</h3>
                <p>Python, C++, C, JavaScript, MATLAB, Java, SQL</p>
              </Reveal>
              <Reveal className="skill-category" delay={0.2}>
                <h3>Web Technologies:</h3>
                <p>HTML, CSS, JavaScript, Node.js(Express), React, Mysql, Flutter, React native</p>
              </Reveal>
              <Reveal className="skill-category" delay={0.3}>
                <h3>Development Skills:</h3>
                <p>Object-Oriented Programming (OOP), Debugging, Code Optimization, Game Development (Frontend)</p>
              </Reveal>
              <Reveal className="skill-category" delay={0.4}>
                <h3>AI/ML Skills:</h3>
                <p>Machine Learning, Image Classification, Natural Language Processing (NLP), Neural Networks, MATLAB Deep Learning and machine learning Toolbox</p>
              </Reveal>
              <Reveal className="skill-category" delay={0.5}>
                <h3>Tools & Technologies:</h3>
                <p>Git, Linux, Arduino, Servo Motors, MATLAB.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: EDUCATION & MORE */}
      <section className="section-more bg-cream">
        <div className="grid-2-col">
          <div className="exp-col">
            <Reveal className="education-section" delay={0.1}>
              <h2 className="section-title dark-text">Education</h2>
              <div className="timeline dark-timeline large-timeline">
                <div className="timeline-item">
                  <div className="year">Expected<br />04/2028</div>
                  <div className="details">
                    <strong>Bachelor Of Technology, Computer Science</strong>
                    <span>Cochin University Of Science And Technology, Kalamassery, Kochi<br />9.15 CGPA</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="year">2010 - 2012</div>
                  <div className="details">
                    <strong>Kendriya Vidyalaya</strong>
                    <span>94%</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="more-col">
            <div className="language-section">
              <h2 className="section-title dark-text">Language</h2>
              <div className="lang-grid">
                <div>
                  <strong>English</strong>
                  <span>Fluent</span>
                </div>
                <div>
                  <strong>Hindi</strong>
                  <span>Professional</span>
                </div>
                <div>
                  <strong>Malayalam</strong>
                  <span>Native</span>
                </div>
              </div>
            </div>

            <div className="hobbies-section mt-4">
              <h2 className="section-title dark-text">Hobbies & Interests</h2>
              <div className="hobbies-grid">
                <div className="hobby">
                  <div className="hobby-icon">🎷</div>
                  <span>Classical<br />Dance </span>
                </div>
                <div className="hobby">
                  <div className="hobby-icon">🧶</div>
                  <span>Builting stuff</span>
                </div>
                <div className="hobby">
                  <div className="hobby-icon">🎨</div>
                  <span>Digital art<br /> Design</span>
                </div>
                <div className="hobby">
                  <div className="hobby-icon">🐾</div>
                  <span>Cat, cat<br />and cat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer bg-green">
        <Reveal className="footer-content" delay={0.2}>
          <h2 className="footer-title">Let's build<br />something great.</h2>
          <div className="footer-bottom">
            <div className="footer-logo"><span>✦</span> Ayana Anil</div>
            <div className="footer-socials">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </Reveal>
        <div className="footer-huge-text">AYANA</div>
      </footer>

    </div>
  )
}

export default App
