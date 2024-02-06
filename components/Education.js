import React from 'react';
import { 
  educationStyle, 
  educationTitleStyle, 
  educationItemStyle, 
  educationDegreeStyle, 
  educationSchoolStyle, 
  educationDurationStyle, 
  educationDescriptionStyle 
} from './EducationStyles';

function Education() {
  const educationList = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University A',
      duration: '2016 - 2020',
      description: 'Description about your course and achievements.'
    },
    {
      degree: 'High School Diploma',
      school: 'School B',
      duration: '2012 - 2016',
      description: 'Description about your course and achievements.'
    }
    // Add more education as needed
  ];

  return (
    <section style={educationStyle}>
      <h2 style={educationTitleStyle}>Education</h2>
      {educationList.map((education, index) => (
        <div key={index} style={educationItemStyle}>
          <h3 style={educationDegreeStyle}>{education.degree} at <span style={educationSchoolStyle}>{education.school}</span></h3>
          <p style={educationDurationStyle}>{education.duration}</p>
          <p style={educationDescriptionStyle}>{education.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
