import React, { useState } from "react";
import PropTypes from "prop-types";

const Tile = (props) => {
  const [hover, setHover] = useState(false);
  const stripeSize = props.borderSize ? props.borderSize : '4px';

  const tileStyle = {
    width: props.width, 
    height: props.height, 
    maxWidth: props.maxWidth, 
    height: props.maxHeight,
  }

  const horizontalStripeStyle = {
    transition: hover || props.selected ? "width 0.75s" : "none",
    width: hover || props.selected ? "100%" : "0",
    height: stripeSize,
  };

  const verticalStripeStyle = {
    transition: hover || props.selected ? "height 0.75s" : "none",
    width: stripeSize,
    height: hover || props.selected ? "100%" : "0",
  };

  return (
    <div
      className={`tile ${props.selected ? "selected" : ""}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={tileStyle}
    >
      <div style={{textAlign: 'center'}}>{props.children}</div>
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
  width: PropTypes.string,
  height: PropTypes.string,
  borderSize: PropTypes.string,
  selected: PropTypes.bool,
};

export default Tile;
