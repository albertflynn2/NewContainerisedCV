import React from 'react';
import { contactInfoStyle, contactInfoTitleStyle, contactInfoItemStyle } from './ContactInfoStyles';

function ContactInfo() {
  return (
    <section style={contactInfoStyle}>
      <h2 style={contactInfoTitleStyle}>Contact Info</h2>
      <p style={contactInfoItemStyle}>Email: your-email@example.com</p>
      <p style={contactInfoItemStyle}>Phone: (123) 456-7890</p>
    </section>
  );
}

export default ContactInfo;
