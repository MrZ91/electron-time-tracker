import React from 'react'
import {TimeLog} from './time_log.component'
export const TimeLogs = (props) => {
  return (
    <div className = "application__time-logs">
      {props.timeLogs.map(timeLog => <TimeLog key = {timeLog.id} {...timeLog}/>)}  
    </div>
    )
}