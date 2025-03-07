import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ey88e6r', e.target, 'user_gguhLuc1pow2SYm13jQT6')
      .then((result) => {
        console.warn(result.text);
      }, (error) => {
        console.warn(error.text);
      });
    e.target.reset();
  }

  // TO DO: Submit success pop up

  return (
    <div className="Contact page">
      <div className='contact-form-banner'>
        <h1 className='contact-form-header'>Contact Us</h1>
        <p className='email'>nashvilleshineulti@gmail.com</p>
      </div>
      <div class="contact-form">
        <form id="contact-form" onSubmit={sendEmail}>
            <input name="name" type="text" className="form-control" placeholder="Name" required />
            <input name="email" type="text" className="form-control" placeholder="Email" required />
            <input name="subject" type="text" className="form-control" placeholder="Subject" required />
            <textarea name="message" type="text" className="form-control" placeholder="Message" rows="8" required></textarea><br/>
            <button type="submit" className='submit-button'>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
}
