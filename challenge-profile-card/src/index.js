import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill name="HTML" bgColor={"#e44d26"} emoji="💪" />
      <Skill name="CSS" bgColor={"#214ce5"} emoji="💅" />
      <Skill name="JavaScript" bgColor={"#f7df1e"} emoji="🚀" />
      <Skill name="React" bgColor={"#61dbfb"} emoji="⚛️" />
      <Skill name="Angular" bgColor={"#de002d"} emoji="🅰️" />
      <Skill name="Blazor" bgColor={"#5c2d91"} emoji="🔵" />
      <Skill name="SQL" bgColor={"blue"} emoji="🔍" />
      <Skill name="Python" bgColor={"#ffce3d"} emoji="🐍" />
      <Skill name="Java" bgColor={"#e00308"} emoji="☕" />
      <Skill name="C#" bgColor={"#512bd4"} emoji="🔵" />
      <Skill name="Git" bgColor={"#f05033"} emoji="🌳" />
      <Skill name="GitHub" bgColor={"#212c3e"} emoji="🐙" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
      <span>{props.backgroundColor}</span>
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
