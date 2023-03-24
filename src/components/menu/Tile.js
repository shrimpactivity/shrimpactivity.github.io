import React, { useState } from "react";
import PropTypes from "prop-types";

const Tile = (props) => {
  const [showStripe, setShowStripe] = useState(false);
  const STRIP_SIZE = '4px';

  const handleMouseEnter = () => {
    setShowStripe(true);
  };

  const handleMouseLeave = () => {
    setShowStripe(false);
  };

  const horizontalStripeStyle = {
    transition: showStripe || props.selected ? "width 0.75s" : "none",
    width: showStripe || props.selected ? "100%" : "0",
    height: STRIP_SIZE,
  };

  const verticalStripeStyle = {
    transition: showStripe || props.selected ? "height 0.75s" : "none",
    width: STRIP_SIZE,
    height: showStripe || props.selected ? "100%" : "0",
  };

  return (
    <div
      className={`menu-tile ${props.selected ? "selected" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{props.text}</span>
      <div
        className="tile-stripe"
        style={{ ...horizontalStripeStyle, top: "0px" }}
      ></div>
      <div
        className="tile-stripe"
        style={{ ...horizontalStripeStyle, bottom: "0px" }}
      ></div>
      <div
        className="tile-stripe"
        style={{ ...verticalStripeStyle, left: "0px" }}
      ></div>
      <div
        className="tile-stripe"
        style={{ ...verticalStripeStyle, right: "0px" }}
      ></div>
    </div>
  );
};

Tile.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Tile;
