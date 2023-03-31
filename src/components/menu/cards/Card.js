import React from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = (props) => {
  return (
    <div className="card">
      {props.title && <div className="card-title">{props.title}</div>}
      {props.children && <div className="card-content">{props.children}</div>}
      {props.image && (
        <a href={props.imageLink} target="_blank">
          <div style={{display: "flex", justifyContent:"center"}}>
          <LazyLoadImage
            className="card-image"
            src={props.image}
            alt={`${props.title} logo`}
            width={props.imageWidth ? props.imageWidth : '100%'}
            height={props.imageHeight}
          />
          </div>
        </a>
      )}
      
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
