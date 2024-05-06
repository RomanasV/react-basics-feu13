import React from 'react'
import './Card.css'

const Card = ({ children, borderStyle }) => {
  // const children = props.children
  const classes = borderStyle ? borderStyle : ''
  return (
    <div className={`card ${classes}`}>
      {children}
    </div>
  )
}

export default Card