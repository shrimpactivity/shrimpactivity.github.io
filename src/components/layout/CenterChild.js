import React from 'react'
import PropTypes from 'prop-types'

const CenterChild = props => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="centered-content" style={{maxWidth: props.maxWidth, }}>
        {props.children}
      </div>
    </div>
  )
}

CenterChild.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.string,
}

export default CenterChild