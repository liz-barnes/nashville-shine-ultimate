import React from 'react';

export default function Contact() {
  return (
    <div className="Contact">
      <div className='contact-header'>
        <h1>Contact Us</h1>
      </div>
      <div class="contact-form">
        <form id="contact-form" method="POST" action="process.php">
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
