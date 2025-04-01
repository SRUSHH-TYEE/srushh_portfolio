import React, { useContext} from "react";
import "./Progress.scss";
import { techStack, skillsForskills } from "../../portfolio";
import { Fade } from "react-reveal";
import SkillsBackground from "../../components/floatingIcons/FloatingIcons";
import StyleContext from "../../contexts/StyleContext";


export default function StackProgress() {
  const {isDark} = useContext(StyleContext);
  if (techStack.viewSkillBars) {
    return (
      <>
        <Fade bottom duration={1000} distance="20px">
          <div className="skills-container">
            <div className="main-skills">
              <div className="skills-bar">
                <h1 className={
                      isDark
                        ? "skills-heading-dark"
                        : "skills-heading"
                    }>Proficiency</h1>
                {techStack.experience.map((exp, i) => {
                  const progressStyle = {
                    width: exp.progressPercentage
                  }; 
                  return (
                    <div key={i} className={
                      isDark
                        ? "dark-skill"
                        : "skill"
                    }>
                      <p>{exp.Stack}</p>
                      <div className="meter">
                        <span style={progressStyle}></span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="more-skills">
                {skillsForskills.skills.map((skill, index) => (
                  <button key={index} className="more-skill">
                    {skill}
                  </button>
                ))}
              </div>


            </div>
            <div className="fp"> 
              <SkillsBackground />
            </div>
          </div>
        </Fade>
      </>
    );
  }
  return null;
}
