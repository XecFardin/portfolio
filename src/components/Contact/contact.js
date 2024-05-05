import React from "react";
import "./contact.css";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedIn.png";
import github from "../../assets/github.png";
const Contact = () => {
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Name" />
          <input type="email" className="email" placeholder="Email" />
          <textarea className="message" rows={5} placeholder="Message" />
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={whatsapp} alt="whatsapp" className="link"></img>
            <img src={instagram} alt="instagram" className="link"></img>
            <img src={linkedin} alt="linkedin" className="link"></img>
            <img src={github} alt="github" className="link"></img>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
