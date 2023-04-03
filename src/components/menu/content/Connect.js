import React from "react";

import LinkedInIcon from "../../../assets/icons/linked-in.png";
import GithubIcon from "../../../assets/icons/github-mark-white.png";
import ArrowDown from "../../../assets/icons/arrow-down.png";
import Resume from "../../../assets/resume.pdf";

const Connect = (props) => {
  return (
    <div className="menu-content connect-tab">
      <div style={{ textAlign: "center" }}>
        Email me:{" "}
        <a style={{ color: "inherit" }} href="mailto:carsoncrow@pm.me">
          carsoncrow@pm.me
        </a>
      </div>
      <div style={{ textAlign: "center" }}>
        Find me on:
        <span className="link-icon">
          <a
            href="https://www.linkedin.com/in/carson-crow-29b83b254/"
            target="_blank"
          >
            <img src={LinkedInIcon} height="30px" width="30px" alt="linked in link"/>
          </a>
        </span>
        <span className="link-icon">
          <a
            href="https://github.com/shrimpactivity"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubIcon} height="30px" width="30px" alt="github link"/>
          </a>
        </span>
      </div>
      <a href={Resume} className="resume-anchor" download="Carson Crow Resume.pdf">
        <div className="resume-download">
          <span>Resume</span>
          <img src={ArrowDown} height="30px" alt="resume download button" />
        </div>
      </a>
    </div>
  );
};

export default Connect;
