import React from 'react'
import PropTypes from 'prop-types'

const Section = props => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div className="section" style={{maxWidth: props.maxWidth, width: props.width}}>
        {props.children}
      </div>
    </div>
  )
}

Section.propTypes = {
  width: PropTypes.string,
  maxWidth: PropTypes.string,
}

export default Section