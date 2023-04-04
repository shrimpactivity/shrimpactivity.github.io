import React from 'react'
import ArrowDown from "../../assets/icons/arrow-down.png";

const resumeLink = 'https://drive.google.com/uc?export=download&id=1RmsBiU2MPudhDnUVPxB86EwwdhzAX_Pn';

const ResumeDownload = props => {
  return (
    <a href={resumeLink} className="resume-anchor" download="Carson Crow Resume.pdf">
        <div className="resume-download">
          <span>Resume</span>
          <img src={ArrowDown} alt="resume download button" />
        </div>
      </a>
  )
}

export default ResumeDownload