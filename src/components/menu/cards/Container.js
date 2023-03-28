import React from 'react'
import PropTypes from 'prop-types'

const Container = props => {
  return (
    <div className="card-container">
      {props.children}
    </div>
  )
}

Container.propTypes = {}

export default Container