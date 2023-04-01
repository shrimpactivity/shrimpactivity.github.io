import React from "react";

import CardContainer from "../cards/CardContainer";
import Card from "../cards/Card";

import art1 from "../../../assets/art/1.jpg";
import art2 from "../../../assets/art/2.jpg";
import art3 from "../../../assets/art/3.jpg";
import art4 from "../../../assets/art/4.jpg";
import art5 from "../../../assets/art/5.jpg";
import art6 from "../../../assets/art/6.jpg";
import art7 from "../../../assets/art/7.jpg";
import art8 from "../../../assets/art/8.jpg";

const Art = (props) => {
  return (
    <div>
      <div className="menu-content-header">
        <p style={{textAlign: "center"}}>
          Cheap acrylic on cheaper canvas - a collection of some of my paintings. Pardon the poor photography.
        </p>
      </div>
      <CardContainer>
        <Card image={art6} />
        <Card image={art3} />
        <Card image={art4} />
        <Card image={art2} />
        <Card image={art8} />
        <Card image={art5} />
        <Card image={art1} />
        <Card image={art7} />
      </CardContainer>
    </div>
  );
};


export default Art;
