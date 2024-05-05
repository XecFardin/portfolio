import React from "react";
import "./skills.css";
import aws from "../../assets/aws.png";
import react from "../../assets/react.png";
import go from "../../assets/go.png";
import psql from "../../assets/psql.png";
import docker from "../../assets/docker.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Skilled in Go (Golang), known for building scalable and concurrent
        applications with simplicity and efficiency. Proficient in JavaScript
        (Node, React, React Native) and Spring framework. Experienced in
        development processes, regulatory standards, and clean code practices.
        Familiar with Java, Apache Kafka, AWS services (EC2, S3, Lambda, RDS),
        RDBMS (MySQL), TypeScript, GraphQL, and Blockchain Technology
        (Ethereum). Committed to tech innovation, automated testing, and
        user-centric problem-solving. Strong analytical skills, proactive
        communication, and excellent teamwork.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={go} alt="go" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Golang (backend development)</h2>
            <p>
              Experienced in developing scalable and concurrent applications
              using Go (Golang), a language renowned for its simplicity,
              efficiency, and reliability, harnessing its powerful standard
              library and ecosystem for robust software solutions.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={aws} alt="aws" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Amazon Web Service</h2>
            <p>
              Proficient in AWS, utilizing its suite of cloud computing services
              such as EC2, S3, Lambda, and RDS to architect scalable, secure,
              and highly available solutions tailored to diverse business needs.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={docker} alt="docker" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Docker</h2>
            <p>
              Proficient in Docker, leveraging its containerization technology
              to streamline development, deployment, and scalability of software
              applications across diverse environments with ease and efficiency
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={react} alt="react" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Reactjs (Frontend development)</h2>
            <p>
              Experienced in React, a popular JavaScript library for building
              user interfaces, adept at creating dynamic and interactive web
              applications with reusable components and efficient state
              management.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={psql} alt="psql" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>PostgreSQL (RDBMS)</h2>
            <p>
              Proficient in PostgreSQL (often abbreviated as "psql"), a powerful
              open-source relational database management system, skilled in
              designing and optimizing database schemas, writing complex
              queries, and ensuring data integrity for scalable and reliable
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
