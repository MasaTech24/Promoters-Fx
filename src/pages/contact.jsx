import React from "react"
import NavigationBar from "./Navbar"
import FooterSection from './footer'
import '../styles/about.css'
import '../styles/page.css'

export default function ContactUs() {
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
            <img src="vite.svg" width='20px'/>
            <span>info@promoterstradingfx.com</span>
          </div>
          <form>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email"/>
            <textarea rows='5' placeholder="Message"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </section>
      <FooterSection/>
    </>
  )
}