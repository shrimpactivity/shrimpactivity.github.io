import React from 'react'

import CardContainer from '../cards/CardContainer';
import Card from '../cards/Card';

import GhostWriter from "../../../assets/project-logos/ghostwriter-logo.png";
import Pigment from "../../../assets/project-logos/pigment-logo.png";
import GitBean from "../../../assets/project-logos/gitbean-logo.png";

const Projects = props => {
  return (
    <div className="menu-content">
      <div className="menu-content-header">
        <p style={{textAlign: "center"}}>
          Check out some of my personal projects. Click the image to be redirected.
        </p>
      </div>
      <CardContainer>
        <Card title="GhostWriter" image={GhostWriter} imageLink="https://ghost-writer.herokuapp.com"></Card>
        <Card title="Pigment" image={Pigment} imageLink="https://shrimpactivity.github.io/pigment/"></Card>
        <Card title="GitBean" image={GitBean} imageLink="https://github.com/shrimpactivity/gitbean"></Card>
      </CardContainer>
    </div>
  )
}

export default Projects