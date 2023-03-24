import React from 'react'

import Tile from './menu/Tile'

const Header = props => {
  const width = "80px"
  const height = "50px";
  const borderSize = 2;

  return (
    <div className="links-container">
      <Tile borderSize={borderSize}>Link 1</Tile>
      <Tile borderSize={borderSize}>Link 2</Tile>
      <Tile borderSize={borderSize}>Link 3</Tile>
    </div>
  )
}

export default Header