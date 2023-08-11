import React from 'react';
import Form from './Form';
import './common.css';
function Contact() {
  return (
    <section> <h1>Contact Me</h1>
      <Form />
      <br />
      <br />
      <div className='socialsbox'>
        <a href='https://www.linkedin.com/in/porwalshreya/' className='socials'>Linkedin</a>
        <a href='https://github.com/porwalshreyaa' className='socials'>GitHub</a>
        <a href='https://medium.com/@porwalshreya' className='socials'>Medium</a>
      </div>
    </section>
  );
}


export default Contact;
