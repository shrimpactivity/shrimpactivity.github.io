import React from 'react'

import Tile from './menu/Tile'

const Footer = props => {
  const width = "80px"
  const height = "50px";
  const borderSize = "2px";

  return (
    <div className="links-container">
      <span>Built with React</span>
      <span>What is shrimp activity?</span>
    </div>
  )
}

export default Footer