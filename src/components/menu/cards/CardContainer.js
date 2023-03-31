import React from 'react'
import PropTypes from 'prop-types'

const CardContainer = props => {
  return (
    <div className="card-container">
      {props.children}
    </div>
  )
}

CardContainer.propTypes = {}

export default CardContainer