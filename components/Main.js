import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import { mainStyle } from './MainStyles';

function Main() {
  return (
    <main style={mainStyle}>
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </main>
  );
}

export default Main;
