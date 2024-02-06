import React from 'react';
import { skillsStyle, skillsTitleStyle, skillsListStyle, skillItemStyle } from './SkillsStyles';
import { FaCode } from "react-icons/fa"; // Importing a code icon from react-icons

function Skills() {
  const skills = [
    { name: 'JavaScript', icon: <FaCode /> },
    { name: 'React', icon: <FaCode /> },
    { name: 'Node.js', icon: <FaCode /> },
    // Replace this with your skills and corresponding icons
  ];

  return (
    <section style={skillsStyle}>
      <h2 style={skillsTitleStyle}>Skills</h2>
      <ul style={skillsListStyle}>
        {skills.map((skill, index) => (
          <li key={index} style={skillItemStyle}>
            {skill.icon} {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;