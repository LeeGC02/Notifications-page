import React from 'react'
import "./NotiPeople.css"

export const NotiPeople = (props) => {
    const people = props.people
  return (
    <div className='people-container'>
        <img src={people.imgsrc} alt=""/>
        <p><span className='name'>{people.name}</span>
        <span className='action'>{people.action}</span>
        <span className='post'>{people.post}</span>
        <span className='group'>{people.group}</span>
        <span className='point'>{people.point}</span><br></br>
        <span className='time'>{people.time}</span><br></br>
        <div  className='message'><span>{people.message}</span></div></p>
        
    </div>
  )
}
