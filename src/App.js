import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const roles = ["React Developer", "AWS Engineer", "AI & ML Enthusiast"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  /* Typing Animation Effect */
  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setText(roles[index].slice(0, i));
      i++;

      if (i > roles[index].length) {
        clearInterval(typing);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1200);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <div style={mainContainer}>

      {/* NAVBAR */}
      <nav style={navbar}>
        <h2 style={{ color: "#38bdf8" }}>Hari Prasad</h2>

        <div>
          <a href="#about" style={navLink}>About</a>
          <a href="#skills" style={navLink}>Skills</a>
          <a href="#projects" style={navLink}>Projects</a>
          <a href="#contact" style={navLink}>Contact</a>

          <a href="/resume.pdf" download style={resumeBtn}>
            Resume
          </a>
        </div>
      </nav>


      {/* HERO */}
      <section style={heroSection}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={heroTitle}
        >
          Hi, I'm Hari Prasad 👋
        </motion.h1>

        <p style={typingText}>{text}</p>

        <a href="#projects">
          <button style={glowBtn}>Explore My Work</button>
        </a>
      </section>


      {/* ABOUT */}
      <section id="about" style={section}>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          style={sectionTitle}
        >
          About Me
        </motion.h2>

        <p style={sectionText}>
          I build scalable cloud-native applications using React, AWS Lambda,
          API Gateway, DynamoDB and Machine Learning models. Passionate about
          automation systems and real-world AI solutions.
        </p>
      </section>


      {/* SKILLS */}
      <section id="skills" style={section}>
        <h2 style={sectionTitle}>Skills</h2>

        <div style={skillsGrid}>
          {[
            "React",
            "AWS Lambda",
            "DynamoDB",
            "API Gateway",
            "Flask",
            "TensorFlow",
            "MySQL",
            "GitHub"
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              style={skillCard}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" style={section}>
        <h2 style={sectionTitle}>Projects</h2>

        <div style={projectGrid}>

          <ProjectCard
            title="AWS Serverless REST API"
            desc="Lambda + API Gateway + DynamoDB deployed using AWS CDK."
            github="https://github.com/HARISAM19"
          />

          <ProjectCard
            title="Sweet Potato Disease Detection"
            desc="TensorFlow Xception model integrated with Flask UI."
            github="https://github.com/HARISAM19"
          />

          <ProjectCard
            title="Smart Parking System"
            desc="QR-based entry/exit automation with billing generation."
            github="https://github.com/HARISAM19"
          />

        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" style={section}>
        <h2 style={sectionTitle}>Contact</h2>

        <p style={sectionText}>hariprasad@example.com</p>

        <div>
          <a href="https://github.com/HARISAM19" style={link}>GitHub</a>
          <a href="https://linkedin.com" style={link}>LinkedIn</a>
        </div>
      </section>


      {/* FOOTER */}
      <footer style={footer}>
        © 2026 Hari Prasad
      </footer>

    </div>
  );
}


/* PROJECT CARD COMPONENT */

function ProjectCard({ title, desc, github }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={projectCard}
    >
      <h3>{title}</h3>

      <p style={{ marginTop: "10px" }}>{desc}</p>

      <a href={github} target="_blank" rel="noreferrer">
        <button style={projectBtn}>View Code</button>
      </a>
    </motion.div>
  );
}


/* STYLES */

const mainContainer = {
  background: "#0f172a",
  color: "#e2e8f0",
  fontFamily: "Segoe UI, sans-serif"
};

const navbar = {
  position: "sticky",
  top: 0,
  padding: "18px 40px",
  background: "#020617",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const navLink = {
  margin: "0 15px",
  color: "#cbd5e1",
  textDecoration: "none"
};

const resumeBtn = {
  padding: "8px 16px",
  background: "#38bdf8",
  borderRadius: "6px",
  color: "#020617",
  textDecoration: "none",
  fontWeight: "bold"
};

const heroSection = {
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const heroTitle = {
  fontSize: "64px",
  color: "#38bdf8"
};

const typingText = {
  fontSize: "22px",
  color: "#94a3b8",
  marginTop: "10px",
  height: "30px"
};

const glowBtn = {
  marginTop: "30px",
  padding: "14px 30px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(90deg,#38bdf8,#6366f1)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

const section = {
  padding: "90px 20px",
  textAlign: "center"
};

const sectionTitle = {
  fontSize: "36px",
  color: "#38bdf8"
};

const sectionText = {
  maxWidth: "700px",
  margin: "20px auto"
};

const skillsGrid = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "15px",
  marginTop: "30px"
};

const skillCard = {
  background: "#1e293b",
  padding: "14px 22px",
  borderRadius: "8px"
};

const projectGrid = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "25px",
  marginTop: "40px"
};

const projectCard = {
  width: "320px",
  background: "#1e293b",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0px 0px 25px rgba(56,189,248,0.15)"
};

const projectBtn = {
  marginTop: "15px",
  padding: "8px 16px",
  borderRadius: "6px",
  border: "none",
  background: "#38bdf8",
  color: "#020617",
  fontWeight: "bold",
  cursor: "pointer"
};

const link = {
  margin: "0 12px",
  color: "#38bdf8",
  fontSize: "18px",
  textDecoration: "none"
};

const footer = {
  padding: "25px",
  textAlign: "center",
  background: "#020617",
  color: "#64748b"
};

export default App;