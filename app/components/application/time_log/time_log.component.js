import React from 'react'

export const TimeLog = (props) => {
  return (
    <div className = "time-log">
      <div className = "time-log__button">{props.isRunning ? 'STOP' : props.timeSpent}</div>
      <div className = "time-log__description">{props.description}</div>
      <div className = "time-log__timer"> {props.startTime} </div>
    </div>
    )
}