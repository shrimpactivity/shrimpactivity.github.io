import React, { useState, useRef } from "react";

import ReactLogo from "../../assets/icons/react.png";
import "../../styles/footer.css";
import Shrimp from "./Shrimp";

const Footer = (props) => {
  const [showShrimp, setShowShrimp] = useState(false);
  const shrimpRef = useRef(null);

  const handleShrimp = () => {
    console.log("clicked");
    setShowShrimp(!showShrimp);
    setTimeout(
      () => shrimpRef.current?.scrollIntoView({ behavior: "smooth" }),
      100
    );
  };

  return (
    <div className="footer">
      <div ref={shrimpRef} style={{ display: showShrimp ? "block" : "none" }}>
        {<Shrimp />}
      </div>
      <div className="footer-bar">
        <div style={{ marginRight: "5px", paddingRight: "5px" }}>
          Built with React
        </div>
        <div style={{ margin: "0px", padding: "0px" }}>
          <img className="react-logo" src={ReactLogo} />
        </div>
        <div className="shrimp-button" onClick={handleShrimp}>
          What is shrimp activity?
        </div>
      </div>
    </div>
  );
};

export default Footer;
