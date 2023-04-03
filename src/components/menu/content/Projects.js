import React from 'react'

import CardContainer from '../cards/CardContainer';
import Card from '../cards/Card';

import GhostWriter from "../../../assets/project-logos/ghostwriter-logo.png";
import Pigment from "../../../assets/project-logos/pigment-logo.png";
import GitBean from "../../../assets/project-logos/gitbean-logo.png";

const Projects = props => {
  return (
    <div className="menu-content projects-tab">
      <div className="menu-content-header">
        <p style={{textAlign: "center"}}>
          Check out some of my personal projects. Click a logo to see it in action.
        </p>
      </div>
      <CardContainer>
        <Card title="GhostWriter" image={GhostWriter} imageLink="https://ghost-writer.herokuapp.com">
          Home-brewed text suggestion lets you 'co-write' with another author. React frontend, Express backend. 
          Fetches and processes texts from free online libraries.
        </Card>
        <Card title="Pigment" image={Pigment} imageLink="https://shrimpactivity.github.io/pigment/">
          Particle painting application built with vanilla ES6 JS. Currently adding CRUD functionality for paintbrush sharing.
        </Card>
        <Card title="GitBean" image={GitBean} imageLink="https://github.com/shrimpactivity/gitbean">
          Emulates functionality of Git VCS in Java.
        </Card>
      </CardContainer>
    </div>
  )
}

export default Projects