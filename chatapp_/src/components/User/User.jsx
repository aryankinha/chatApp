import React from 'react'
import './User.css'

const User = ({imgL,name,text}) => {
  return (
    <div className="user-container">
      <div>
        <img src={imgL} alt={name} />
      </div>
      <div className="user-details">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default User