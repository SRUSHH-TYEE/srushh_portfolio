import React from "react";
import "./Skills.scss";
import { skillsSection } from "../../portfolio";
import SkillsBackground from "../../components/floatingIcons/FloatingIcons";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  
  // Get your skills data from portfolio.js
  const { softwareSkills } = skillsSection;
  
  return (
    <div className="skills-section" id="skills">
      <div className="skills-container">
        {/* Floating background with animated icons */}
        <SkillsBackground icons={softwareSkills} />
        
        {/* Content overlay */}
        <div className="skills-content">
          <h1 className="skills-heading">
            {skillsSection.title}
          </h1>
          <p className="skills-subtitle">
            {skillsSection.subTitle}
          </p>
          
          {/* Skills text list */}
          <div className="skills-text-container">
            {skillsSection.skills.map((skill, i) => (
              <div key={i} className="skill-item">
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}