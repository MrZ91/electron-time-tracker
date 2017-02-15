import React from 'react'

export const TimeLogForm = (props) => (
  <div className = "application__new-time-log">
    <div className = "time-log">
      <div className = "time-log__button">PLAY</div>
      <input type = "text"
      className = "time-log__description" 
      value = {props.description}
      onChange = {props.handleInputChange}
      />
      <div className = "time-log__timer"> 88:88 </div>
    </div>
  </div> 
  )
