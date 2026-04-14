import React from 'react'
import "./Contact.css"
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BodyContainer from '../../Components/BodyContainer/BodyContainer';
import PageTitle from '../../Components/PageTitle/PageTitle';


function Contact() {
  return (
    <div>
      <Navbar active = "contact"/>

      <PageTitle title={"Connect with us"}  subtitle={"We are just one call away.."}/>

      <BodyContainer>
        <div className="contact-container">
        <div className='contact-form'>
        <form>
          <h3 className='contact-heading'>Contact Us</h3>
          <label>Name:</label>
        <input type="text" placeholder="Enter your name" className='input-box' />

                <label>Email:</label>
        <input type="email" placeholder="Enter your email" className='input-box' />

        <label>Message:</label>
        <textarea placeholder="Your message" className='input-box'></textarea>
        <br/>
        <button type="submit" className='btn'>Send</button>
      </form>
      </div>
      </div>
      </BodyContainer>
      
      <Footer/>
    </div>
  );
}

export default Contact;