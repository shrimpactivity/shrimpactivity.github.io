import React from 'react'
import PropTypes from 'prop-types'

import ShrimpPic from '../../assets/shrimp.png';

const Shrimp = props => {
  return (
    <div className="shrimp-pic-wrapper" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img className="shrimp-pic" src={ShrimpPic} alt="shrimp in office chair at computer"/>
      <figcaption>Actual photo of Carson at his desk</figcaption>
    </div>
  )
}

Shrimp.propTypes = {}

export default Shrimp