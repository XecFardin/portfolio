import React from "react";
import "./resume.css";
import download from "../../assets/download.png";

const Resume = () => {
  return (
    <section id="resume">
      <span className="resumeTitle">Resume</span>
      <span className="resume">
        <a
          href="https://drive.google.com/file/d/1K-5Mb95K0oEt-16e7kTuo7FQCsi7-Vwe/view?usp=drive_link"
          className="resumeMenuBtn"
          download="Abdulla_Shaikh-cv.pdf"
        >
          <img src={download} alt="resume" className="resumeDownloadImg" />
          Download Resume
        </a>
      </span>
    </section>
  );
};

export default Resume;
