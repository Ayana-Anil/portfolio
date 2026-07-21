import './App.css'

function App() {
  return (
    <div className="portfolio">
      
      {/* SECTION 1: HERO */}
      <section className="section-hero bg-green">
        <header className="nav">
          <div className="logo"><span>✦</span> Han Nguyen</div>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#contact" className="btn-primary">Get in touch!</a>
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
             <div className="hero-intro">
               I love design and anything related to art.<br/>
               I approach problems in a rational, pragmatic<br/>
               way and seek the simplest, most functional<br/>
               solutions possible.
             </div>
          </div>
          <div className="hero-socials">
            <p>BE: /hannnb</p>
            <p>IG: @han.nnb</p>
            <p>LI: /han-nnb</p>
          </div>
        </div>

        <div className="black-bar"></div>
        
        <div className="scroll-down">
           Scroll<br/>down
        </div>
      </section>

      {/* SECTION 2: INTRO */}
      <section className="section-intro bg-cream">
        <header className="nav nav-dark">
          <div className="logo logo-accent"><span>✦</span> Han Nguyen</div>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#contact" className="btn-primary">Get in touch!</a>
          </div>
        </header>

        <div className="intro-content">
          <div className="intro-text-col">
            <h1 className="main-title">Hello,<br/>I'm Han !</h1>
            <p className="intro-desc">
              I am a self-taught Graphic Designer based in Viet Nam with extensive marketing and communication experience. I am currently living in France and pursuing a degree in Web and Digital Project Management.
            </p>
            <a href="#" className="btn-linkedin">
              <span className="icon">🔍</span> linkedin.com/in/han-nnb
            </a>
          </div>
        </div>

        {/* OVERLAPPING CONTACT CARD */}
        <div className="contact-wrapper">
           <div className="contact-green-bg"></div>
           <div className="contact-photo"></div>
           <div className="contact-badge-left">2nd August 1999</div>
           <div className="contact-badge-right">Vietnamese</div>
           <div className="contact-info">
              <h3>Contact</h3>
              <p>📍 Narbonne, France</p>
              <p>✉️ nnbh928@gmail.com</p>
              <p>📞 07 82 84 ** **</p>
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
            <div className="experience-box">
              <h2 className="section-title dark-text">Experience</h2>
              <div className="timeline dark-timeline">
                <div className="timeline-item">
                  <div className="year">2023</div>
                  <div className="details">
                    <strong>Illustrator & Graphic Design Intern</strong>
                    <span>Designed graphic for learning materials<br/>Learny Bloom, La Rochelle, France</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="year">2022</div>
                  <div className="details">
                    <strong>Marketing Intern</strong>
                    <span>Created content on social media<br/>Bi Ethic, Narbonne, France</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="year">2020</div>
                  <div className="details">
                    <strong>Graphic Designer</strong>
                    <span>Designed promotional materials for events<br/>Songhan Incubator, Viet Nam</span>
                  </div>
                </div>
              </div>
              
              <div className="pills dark-pills">
                <span className="pill dark-pill">#Creativity</span>
                <span className="pill dark-pill">#Communication</span>
                <span className="pill dark-pill">#Detail-oriented</span>
                <span className="pill dark-pill">#Adaptability</span>
              </div>
            </div>
          </div>
          
          <div className="skills-col">
            <h2 className="section-title yellow-text">Technical skills</h2>
            <div className="skills-grid">
              <div className="software-tools">
                <h3>Software tools</h3>
                <div className="icons-grid">
                  <div className="icon-box">Ps</div>
                  <div className="icon-box">Ai</div>
                  <div className="icon-box">Id</div>
                  <div className="icon-box">F</div>
                  <div className="icon-box">Xd</div>
                  <div className="icon-box">Pr</div>
                  <div className="icon-box">Ae</div>
                </div>
              </div>
              <div className="web-dev">
                <h3>Web Development</h3>
                <p>Basic knowledge of:</p>
                <div className="dev-list">
                  <div>HTML<br/>CSS<br/>JavaScript</div>
                  <div>PHP<br/>SQL<br/>CMS (Wordpress)</div>
                </div>
              </div>
            </div>
            
            <div className="pills">
              <span className="pill">Web Design</span>
              <span className="pill">UI/UX</span>
              <span className="pill">Motion design</span>
              <span className="pill">Illustration</span>
              <span className="pill">Digital campaign</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: EDUCATION & MORE */}
      <section className="section-more bg-cream">
        <div className="grid-2-col">
          <div className="exp-col">
            <div className="education-section">
              <h2 className="section-title dark-text">Education</h2>
              <div className="timeline dark-timeline">
                <div className="timeline-item">
                  <div className="year">2022 - 2023</div>
                  <div className="details">
                    <strong>Digital Campus, Montpellier</strong>
                    <span>Web & Digital project Management</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="year">2021 - 2022</div>
                  <div className="details">
                    <strong>IUT de Béziers</strong>
                    <span>Commercialisation Technique</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="year">2017 - 2020</div>
                  <div className="details">
                    <strong>Economic University, Danang</strong>
                    <span>International Business</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="activities-section mt-4">
              <h2 className="section-title dark-text">Activities</h2>
              <div className="timeline dark-timeline red-timeline">
                <div className="timeline-item">
                  <div className="year">2021</div>
                  <div className="details">
                    <strong>Your Dream exhibition</strong>
                    <span>Concept artist of autism in society</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="year">2020</div>
                  <div className="details">
                    <strong>'Danang tui' exhibition</strong>
                    <span>Artist of miniature art about tradition<br/>craft village around Danang</span>
                  </div>
                </div>
              </div>
            </div>
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
                  <strong>French</strong>
                  <span>Intermediate</span>
                </div>
                <div>
                  <strong>Vietnamese</strong>
                  <span>Native</span>
                </div>
              </div>
            </div>

            <div className="hobbies-section mt-4">
              <h2 className="section-title dark-text">Hobbies & Interests</h2>
              <div className="hobbies-grid">
                <div className="hobby">
                  <div className="hobby-icon">🎷</div>
                  <span>Classical<br/>Funky/Gypsy Jazz</span>
                </div>
                <div className="hobby">
                  <div className="hobby-icon">🧶</div>
                  <span>Crochet<br/>Knitting</span>
                </div>
                <div className="hobby">
                  <div className="hobby-icon">🎨</div>
                  <span>Digital art<br/>Miniature craft</span>
                </div>
                <div className="hobby">
                  <div className="hobby-icon">🐾</div>
                  <span>Cat, cat<br/>and cat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
