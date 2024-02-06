import React from 'react';
import { experienceStyle, experienceTitleStyle, experienceItemStyle, experienceJobTitleStyle, experienceCompanyStyle, experienceDurationStyle, experienceDescriptionStyle } from './ExperienceStyles';

function Experience() {
  const jobs = [
    {
      title: 'Software Engineer',
      company: 'Company A',
      duration: 'Jan 2020 - Present',
      description: 'Job description for Company A.'
    },
    {
      title: 'Junior Developer',
      company: 'Company B',
      duration: 'Jan 2018 - Dec 2019',
      description: 'Job description for Company B.'
    }
    // Add more jobs as needed
  ];

  return (
    <section style={experienceStyle}>
      <h2 style={experienceTitleStyle}>Experience</h2>
      <div style={experienceItemStyle}>
        {jobs.map((job, index) => (
          <div key={index} style={experienceItemStyle}>
            <div style={experienceDurationStyle}>{job.duration}</div>
            <h3 style={experienceJobTitleStyle}>{job.title} at <span style={experienceCompanyStyle}>{job.company}</span></h3>
            <p style={experienceDescriptionStyle}>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
