import React, { useRef } from 'react';
import "./contact.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';


const notify = () => {
  toast.success("Mail sent successfully!")
};


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_os9c1vi', 'template_uq5y1ib', form.current, 'DUwpHpX2m1EJDDFkk')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      }
      );
    e.target.reset();
  };

  return (
    <section className="contact_container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">Don't like forms? Send me an email 👋</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input type="text" name='user_name' className="contact_form-input" placeholder='Insert your name' required />
            </div>

            <div className="contact_form-div">
              <input type="email" name='user_email' className="contact_form-input" placeholder='Insert your email' required />
            </div>
          </div>

          <div className="contact_form-div">
            <input type="text" name='subject' className="contact_form-input" placeholder='Insert your subject' required />
          </div>

          <div className="contact_form-div contact_form-area">
            <textarea type="text" name='message' cols="30" rows="10" className="contact_form-input" placeholder="write your message" required></textarea>
          </div>
          <button onClick={notify} className="btn">Send Message</button>
          <Toaster/>
        </form>
      </div>
    </section>
  );
};

export default Contact;