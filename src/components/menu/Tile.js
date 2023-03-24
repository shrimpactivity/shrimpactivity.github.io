import React, { useState } from "react";
import PropTypes from "prop-types";

const Tile = (props) => {
  const [hover, setHover] = useState(false);

  const width = props.width ? props.width : '100px';
  const height = props.height ? props.height : '100px';
  const stripeSize = props.borderSize ? props.borderSize : '4px';

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
      style={{width: props.width, height: props.height}}
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
  borderSize: PropTypes.number,
  selected: PropTypes.bool,
};

export default Tile;
