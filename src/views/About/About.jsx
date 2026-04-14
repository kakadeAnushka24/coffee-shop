import React from 'react'
import "./About.css"

import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BodyContainer from '../../Components/BodyContainer/BodyContainer';

import PageTitle from '../../Components/PageTitle/PageTitle';



function About() {
  return (
    <div>
      <Navbar active = "about" />
      <PageTitle title={"Learn more about us.."} subtitle={"We are dedicating to providing the best service."}/>

        
      <BodyContainer>
        <div className="about-container">

          <h2>Who We Are</h2>
          <p>
            Coffee House is a simple React application designed to showcase
            different types of coffee using reusable components.
          </p>

          <h2>What We Offer</h2>
          <p>
            We provide a variety of coffees like Chocolate Coffee, Cappuccino,
            Cold Coffee, Latte, and Espresso made with love and passion.
          </p>

          <h2>Our Goal</h2>
          <p>
            This project demonstrates core React concepts such as components,
            props, and dynamic rendering using map().
          </p>

          <h2>Technology Used</h2>
          <p>
            Built using React, CSS, and hosted on Netlify.
          </p>

        </div>
      </BodyContainer>

      <Footer/>
    </div>
  );
}

export default About;