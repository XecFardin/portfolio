import React, { useRef } from "react";
import "./contact.css";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedIn.png";
import github from "../../assets/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8mw3hsl", "template_jqh0n29", form.current, {
        publicKey: "3tPmu5O6CDO6t_VGx",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="message"
            name="message"
            rows={5}
            placeholder="Your Message"
          />
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://wa.me/qr/OIL3VSKZFZQIG1">
              <img src={whatsapp} alt="whatsapp" className="link"></img>
            </a>
            <a href="https://www.instagram.com/_fardin_xec?igsh=MXNkYXlocW8zY2xmeQ==">
              <img src={instagram} alt="instagram" className="link"></img>
            </a>
            <a href="https://www.linkedin.com/in/abdulla-shaikh-8256801b8">
              <img src={linkedin} alt="linkedin" className="link"></img>
            </a>
            <a href="https://github.com/XecFardin">
              <img src={github} alt="github" className="link"></img>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
