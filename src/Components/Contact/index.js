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
  return (
    <div className="Contact">
      <div className='contact-header'>
        <h1>Contact Us</h1>
      </div>
      <div class="contact-form">
        <form id="contact-form" onSubmit={sendEmail}>
            <input name="name" type="text" class="form-control" placeholder="Name" required /><br/>
            <input name="email" type="text" class="form-control" placeholder="Email" required /><br/>
            <input name="subject" type="text" class="form-control" placeholder="Subject" required /><br/>
            <textarea name="message" type="text" class="form-control" placeholder="Message" rows="4" required></textarea><br/>
            <button type="submit" name="submitbutton">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
