import React from 'react'
import "./Head.css"

export const Head = () => {
  return (
    <div className='notifications-container'>
        <h3 className='notifications-container-h3'>
          Notifications <span>3</span>
        </h3>
        <a className='mark'>Mark all as read</a>
    </div>
  )
}
