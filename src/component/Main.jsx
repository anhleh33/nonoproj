import { useState, useEffect, useRef } from "react";
import "./Main.css";
import emailjs from "emailjs-com";
import CustomCursor from "./CustomCursor";
import SkillBlurb from "./SkillBlurb";
import ProjectCard from "./ProjectCard";
import ResearchCard from "./ResearchCard";

export default function Main() {
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNavbar = () => setShowNavbar(!showNavbar);
  const projectGridRef = useRef(null);

  const scrollLeft = () => {
    projectGridRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    projectGridRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  function getRandomColor() {
    const colors = ["#d41c23", "#ffd700", "#0d3d8f", "#1a1a1a"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function SlidingBanner() {
    return (
      <section className="banner">
        <div className="slide-text">Welcome to my portfolio!</div>
      </section>
    );
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h8yhdvt", // Replace with your Service ID
        "template_r6hadls", // Replace with your Template ID
        e.target,
        "edGJNWRpz1si68JjH" // Replace with your User/Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("❌ Failed to send. Try again.");
        }
      );

    e.target.reset(); // Optional: clears the form after submit
  };

  return (
    <>
      <div className="main-content">
        <CustomCursor />
        <button className="nav-toggle" onClick={toggleNavbar}>
          <img src="/logo.png" alt="" className="logo" />
        </button>

        <nav className={`sidebar ${showNavbar ? "show" : ""}`}>
          <ul>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#research">Research</a>
            </li>
            <li>
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        </nav>

        <section id="header">
          <h1>LE HOANG ANH</h1>
          <p>Software Engineering</p>
        </section>
        <SlidingBanner />
        <section id="about">
          <div className="panel intro">
            <img
              src="/avatar.png"
              alt="Vintage Wonder Woman"
              className="character-img"
            />
            <h2>Introduction</h2>
            <p>
              My name is Lê Hoàng Anh, a senior Information Technology student at Ho Chi Minh City University of Education with a strong passion for software engineering. I enjoy exploring various aspects of software development, with hands-on experience in both academic and personal projects. I’m proficient in HTML, CSS, JavaScript, and React, and continuously expanding my skill set to include modern development tools and best practices. I'm eager to contribute to a dynamic engineering team, learn from experienced professionals, and apply my knowledge to build impactful and user-friendly solutions.
            </p>

            <div className="social">
              <a
                href="https://www.linkedin.com/in/hoang-anh-le-320924286"
                className="social-item"
                data-tooltip="LinkedIn"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="social-item"
                data-tooltip="0903849635"
              // target="_blank"
              >
                <i class="fa-solid fa-phone"></i>
              </a>
              <a
                href="https://github.com/anhleh33"
                className="social-item"
                data-tooltip="GitHub"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="panel">
            <h2>Skills</h2>
            <SkillBlurb text="HTML5" />
            <SkillBlurb text="PHP" />
            <SkillBlurb text="ReactJS" />
            <SkillBlurb text="React" />
            <SkillBlurb text="Tailwind CSS" />
            <SkillBlurb text="Bootstrap" />
            <SkillBlurb text="Figma" />
            <br /> <br />
            <SkillBlurb text="Javascript" />
            <SkillBlurb text="MongoDB" />
            {/* <SkillBlurb text="MySQL" /> */}
            <SkillBlurb text="SQL Server" />
            <br /> <br />
            <SkillBlurb text=".NET" />
            <SkillBlurb text="Python" />
            <SkillBlurb text="C++" />
          </div>
        </section>

        <section id="projects">
          <div className="panel">
            <h2>Projects</h2>

            <div className="comic-grid" ref={projectGridRef}>
              <ProjectCard
                image="/nutribite.png"
                alt="Diet Recommender System"
                title="Diet Recommender System"
                role="Frontend, Tester"
                techStack="Python, Flask, HTML, CSS, Bootstrap, JavaScript, SQL Server 2022, Figma"
                githubLink="https://github.com/QC2k4/HTVTT_NutriBite.git"
                figmaLink="https://www.figma.com/design/2Twkxks3Z2fueeDF2UajHK/Food-Recommender-System?node-id=0-1&t=AsszkMIF75nO8XTp-1"
              />

              <ProjectCard
                image="/passport.png"
                alt="Passport System"
                role="Frontend, Tester"
                title="Passport System"
                techStack="ASP.NET Core 8.0, SQL Server 2022, Razor View, HTML, CSS, Bootstrap, JavaScript, Figma"
                githubLink="https://github.com/QC2k4/BMCSDL_QLCapHoChieu.git"
                figmaLink="https://www.figma.com/design/NBjQRVfkDixuzfR1Eh9deo/Passport-system?node-id=0-1&t=3Q6mNHWvhS1Mt6XO-1"
              />

              <ProjectCard
                image="/quizz.png"
                alt="Quiz Website"
                role="Frontend, Backend, Tester"
                title="Quiz Website"
                techStack="PHP, HTML, CSS, Bootstrap, Javascript, MongoDB"
                githubLink="https://github.com/anhleh33/php-project"
              />
            </div>

            <button className="chevron" onClick={scrollLeft}>
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button className="chevron">
              <i class="fa-solid fa-chevron-right" onClick={scrollRight}></i>
            </button>
          </div>
        </section>

        <section id="research">
          <div className="panel">
            <h2>Scientific researchs</h2>
            <ResearchCard
              title="Determination of Users’ Sentiments through Posts on Social Media"
              description="The research prioritizes to the development of a machine
                learning model designed to classify user-generated posts on
                social media platforms into two distinct sentiment categories:
                positive and negative. The primary objective is to accurately
                identify the emotional tone of each post, thereby enabling more
                effective analysis of public senttiment across digital platforms."
              link="https://www.dsjournals.com/dst/DST-V3I4P104"
            />
            <ResearchCard
              title="Constructing a Multi-Modal Dataset for Digital Learning Feature Extraction"
              description="This study aims to address this need by constructing VNEC2018, a standardized image dataset derived from Vietnam’s 2018 General Education Program. The dataset is designed to support and elevate student learning outcomes through accurate and representative digital resources."
              link="https://www.dsjournals.com/dst/DST-V4I2P102"
            />
          </div>
        </section>

        <section id="contacts">
          <div className="panel">
            <h2>Contact</h2>
            <form className="contact-form" onSubmit={sendEmail}>
              <label htmlFor="subject">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />

              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Your Subject"
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="10"
                name="message"
                placeholder="Write your message..."
                required
              ></textarea>

              <button type="submit">Send</button>
            </form>
          </div>
        </section>

        <section id="footer">
          <p>© 2025 Le Hoang Anh, All Rights Reserved</p>
        </section>
      </div>
    </>
  );
}
