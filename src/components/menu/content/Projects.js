import React from 'react'

import CardContainer from '../cards/Container';
import Card from '../cards/Card';

import GhostWriter from "../../../assets/project-logos/ghostwriter-logo.png";
import Pigment from "../../../assets/project-logos/pigment-logo.png";
import GitBean from "../../../assets/project-logos/gitbean-logo.png";

const Projects = props => {
  return (
    <div className="menu-content">
      <CardContainer>
        <Card title="GhostWriter" image={GhostWriter} imageLink="https://ghost-writer.herokuapp.com"></Card>
        <Card title="Pigment" image={Pigment} imageLink="https://shrimpactivity.github.io/pigment/"></Card>
        <Card title="GitBean" image={GitBean} imageLink="https://github.com/shrimpactivity/gitbean"></Card>
      </CardContainer>
    </div>
  )
}

export default Projects