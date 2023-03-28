import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

import ArrowDown from "../assets/icons/caret-down.png";
import ArrowUp from "../assets/icons/caret-up.png";

const ScrollButton = (props) => {
  return (
    <div className="scroll-button">
      <Link to={props.to} smooth={true}>
        <img className="caret-icon" src={props.direction === "up" ? ArrowUp : ArrowDown} />
      </Link>
    </div>
  );
};

ScrollButton.propTypes = {
  to: PropTypes.string.isRequired,
  direction: PropTypes.string,
};

export default ScrollButton;
