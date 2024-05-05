import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <span className="expTitle">Experience</span>
      <span className="expDesc">
        Experienced Backend Developer skilled in building robust backend
        infrastructures and RESTful APIs. Proficient in technologies such as
        NestJS, PostgreSQL, Prisma ORM, and Golang. Strong background in
        resolving technical issues, client communication, and task delegation.
        Demonstrated expertise in optimizing operational efficiency through
        integration of microservices and serverless applications on AWS Lambda.
        Passionate about fostering collaboration, providing valuable insights,
        and implementing cutting-edge CI/CD processes for enhanced workflow
        efficiency.
      </span>
      <div className="expBars">
        <div className="expBar">
          <div className="expBarText">
            <h3>Freelancing</h3>
            <div className="expBarText2">
              <p>(Aashiyana bestMe App) Backend Developer </p>
              <p1> Aug 2023 - Present</p1>
            </div>
            <ul>
              <li>
                Developed backend infrastructure using NestJS, PostgreSQL, and
                Prisma ORM, ensuring efficient data management and security.
              </li>
              <li>
                Designed and implemented RESTful APIs for seamless
                frontend-backend communication and integration.
              </li>
              <li>
                Collaborated with frontend team, provided ongoing maintenance,
                and documented system architecture for scalability and
                reliability.
              </li>
            </ul>
          </div>
        </div>
        <div className="expBar">
          <div className="expBarText">
            <h3>Spintly Private Limited</h3>
            <div className="expBarText2">
              <p>Software Engineer</p>
              <p1>Aug 2021 - Aug 2023</p1>
            </div>
            <ul>
              <li>
                Spearheaded the integration of backend microservices for face
                recognition devices optimizing operational efficiency.
                Engineered a robust and scalable backend infrastructure using
                Golang, ensuring security and performance using Kafka.
              </li>
              <li>
                Streamlined database support and testing processes by developing
                Python scripts.
              </li>
              <li>
                Orchestrated the development of serverless applications on AWS
                Lambda using Python and Chalice. Designed comprehensive backend
                architecture and API flows with Swagger.io.
              </li>
              <li>
                Fostered collaboration across cross-functional teams to deliver
                top-tier software solutions, integrating React Native and
                React.js for user-centric experiences.
              </li>
              <li>
                Provided valuable insights through meticulous code reviews and
                offered technical mentorship.
              </li>
              <li>
                Implemented cutting-edge continuous integration and delivery
                (CI/CD) processes, employing Git for version control to
                streamline workflow efficiency and enhance proactive
                communication.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
