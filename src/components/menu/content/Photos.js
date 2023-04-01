import React from "react";

import CardContainer from "../cards/CardContainer";
import Card from "../cards/Card";

import photo1 from "../../../assets/photos/1.jpg"
import photo2 from "../../../assets/photos/2.jpg"
import photo3 from "../../../assets/photos/3.jpg"
import photo4 from "../../../assets/photos/4.jpg"
import photo5 from "../../../assets/photos/5.jpg"
import photo6 from "../../../assets/photos/6.jpg"
import photo7 from "../../../assets/photos/7.jpg"
import photo8 from "../../../assets/photos/8.jpg"
import photo10 from "../../../assets/photos/10.jpg"
import photo11 from "../../../assets/photos/11.jpg"
import photo12 from "../../../assets/photos/12.jpg"

const Photos = (props) => {
  return (
    <div>
      <div className="menu-content-header">
        <p style={{textAlign: "center"}}>
            A few nice photos I've taken of Texas and beyond.
        </p>
      </div>
      <CardContainer>
        <Card image={photo1} />
        <Card image={photo2} />
        <Card image={photo3} />
        <Card image={photo4} />
        <Card image={photo5} />
        <Card image={photo6} />
        <Card image={photo7} />
        <Card image={photo8} />
        <Card image={photo10} />
        <Card image={photo11} />
        <Card image={photo12} />
      </CardContainer>
    </div>
  );
};


export default Photos;