import React from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

const imageContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 2,
}

const Card = (props) => {
  const imageProps = {
    className: "card-image",
    src: props.image,
    alt: `${props.title} cover`,
    width: props.imageWidth ? props.imageWidth : "100%",
  }

  return (
    <div className="card">
      {props.title && <div className="card-title">{props.title}</div>}
      {props.children && <div className="card-content">{props.children}</div>}
      {props.image && (<div style={imageContainerStyle}>
        <div>
          <a href={props.imageLink} target="_blank">
            <LazyLoadImage {...imageProps}/>
          </a>
        </div>
      </div>)}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
