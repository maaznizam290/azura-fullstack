import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found-page d-flex flex-col a-i-c j-c-c">
      <h4>404, Not found</h4>
      <NavLink replace to="/" className="btn btn-primary d-flex a-i-c j-c-c">Go Back</NavLink>
    </div>
  )
}

export default NotFound