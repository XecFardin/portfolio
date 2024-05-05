import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="IntroText">
          I'm<span className="IntroName"> Abdulla </span>
          <br />
          Software Engineer
        </span>
        <p className="introText">
          I'm a driven Senior Full Stack Engineer with a focus on backend
          development. Proficient in JavaScript/TypeScript, React,
          <br />
          Express and NestJS . I excel in CI/CD pipelines, AWS services, MySQL
          databases, and Elastic monitoring.
          <br />
          Passionate about blockchain tech. Committed to continuous learning, I
          thrive in collaborative environments,
          <br />
          prioritizing user experience and proactive communication.
        </p>
        <Link>
          <button className="introBtn">
            <img className="btnImg" src={btnImg} alt="Hire me"></img>
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} className="bg" alt="profile" />
    </section>
  );
};

export default Intro;
