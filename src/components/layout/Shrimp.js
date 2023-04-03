import React from 'react'
import PropTypes from 'prop-types'

import ShrimpPic from '../../assets/shrimp.png';

const Shrimp = props => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <img className="shrimp-pic" src={ShrimpPic} />
    </div>
  )
}

Shrimp.propTypes = {}

export default Shrimp