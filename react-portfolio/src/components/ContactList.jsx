import React from 'react';
import contactData from '../data/contactData.json';
import ContactCard from './ContactCard';

const ContactList = () => {
  const contactInfoList = contactData.map((contact, i) => (
    <ContactCard {...contact} key={i} />
  ));

  return <footer className="contact-list">{contactInfoList}</footer>;
};

export default ContactList;