import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { name: "HTML", bgColor: "#e44d26", emoji: "💪" },
  { name: "CSS", bgColor: "#214ce5", emoji: "💅" },
  { name: "JavaScript", bgColor: "#f7df1e", emoji: "🚀" },
  { name: "React", bgColor: "#61dbfb", emoji: "⚛️" },
  { name: "Angular", bgColor: "#de002d", emoji: "🅰️" },
  { name: "Blazor", bgColor: "#5c2d91", emoji: "🔵" },
  { name: "SQL", bgColor: "blue", emoji: "🔍" },
  { name: "Python", bgColor: "#ffce3d", emoji: "🐍" },
  { name: "Java", bgColor: "#e00308", emoji: "☕" },
  { name: "C#", bgColor: "#512bd4", emoji: "🔵" },
  { name: "Git", bgColor: "#f05033", emoji: "🌳" },
  { name: "GitHub", bgColor: "#212c3e", emoji: "🐙" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="profile.jpg" alt="profile" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Billy Li</h1>
      <p>
        My name is Billy Li, and I am a 23-year-old Full Stack Developer based
        in Schiedam, The Netherlands. I am passionate about programming and
        enjoy working with different technologies to create innovative
        solutions. As a Full Stack Developer, I have experience in both
        front-end and back-end development. I am a quick learner who enjoys
        collaborating with other developers and has excellent communication
        skills. With every project, I am dedicated to delivering high-quality
        work and continuously improving my expertise.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => {
        return (
          <Skill
            name={skill.name}
            bgColor={skill.bgColor}
            emoji={skill.emoji}
          />
        );
      })}
    </div>
  );
}

function Skill({ name, bgColor, emoji }) {
  return (
    <div className="skill" style={{ backgroundColor: bgColor }}>
      <span>{name}</span>
      <span>{emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
