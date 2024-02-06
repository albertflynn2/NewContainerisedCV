import React from 'react';
import { headerStyle, titleStyle, subtitleStyle, introStyle } from './HeaderStyles';

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Your Name</h1>
      <h2 style={subtitleStyle}>Your Title</h2>
      <p style={introStyle}>A small introduction or tagline about yourself.</p>
    </header>
  );
}

export default Header;
