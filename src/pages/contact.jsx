import React from "react"
import { useRef } from "react";
import emailjs from "@emailjs/browser"
import NavigationBar from "./Navbar"
import FooterSection from './footer'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  

import '../styles/about.css'
import '../styles/page.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactUs() {
  const form = useRef();
  
  function sendEmail(e) {
    e.preventDefault()
    const serviceId = 'service_ul0gipd';
    const templateId = 'template_i1cgepc';
    const publicId = 'NMdgxVkNH4qWPTEUQ';
  
    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicId
    ).then((result) => {
      console.log(result.text);
      alert('Message Successfuly Sent');
    }, (error) => {
      console.error(error.text);
    }) 
  }

  return (
    <>
      <NavigationBar/>
      <div className='About-us-container'>
        <h1>Contact Us</h1>
      </div>

      
      <section className='abt-section'>
        <div className="contact-div">
          <p>Want to consult about our services or having any troubles? just leave an email about your queries to get instant solution. Our support team is always glad to resolve your queries as soon as they can.</p>
          <h2>Leave A Message</h2>
          <div className="mail-div">
            <FontAwesomeIcon icon={faEnvelope} size="lg"/>
            <span>Pennywiseassets@gmail.com</span>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              placeholder="Name"
              name="fullname"
            />
            <input 
              type="text" 
              placeholder="Email"
              name="email"
            />
            <textarea 
              rows='5' 
              placeholder="Type your message"
              name='message'
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </section>
      <FooterSection/>
    </>
  )
}