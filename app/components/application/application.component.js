import React, {Component} from 'react';
import {TimeLogForm} from './time_log/time_log_form.component';
import {TimeLogs} from './time_log/time_logs.component'
import {addTimeLog, generateId} from '../../lib/time_log_helpers'

export default class Application extends Component {
    state = {
      timeLogs: [
        {id: 1, isRunning: true, description: "Do something weird", startTime: new Date(2017,1,18,13,0,0)},
        {id: 2, isRunning: true, description: "Play chess", startTime: new Date(2017,1,18,16,0,0)},
        {id: 3, isRunning: false, description: "Some really long, and important super-duper task, I've done today", startTime: new Date(2017,1,18,19,0,0), stopTime: new Date(2017,1,18,20,15,0)}
      ],
      newTimeLog: {
        description: ''
      }
    }

    render() {
        return (
          <div className = "application__container">
            <TimeLogForm
              description = {this.state.newTimeLog.description}
              handleInputChange = {this.handleInputChange}
              handleSubmit = {this.handleSubmit}
            />
            <TimeLogs
              timeLogs = {this.state.timeLogs}
            />
          </div>
        )
    }
    
    handleInputChange = (e) => {
      this.setState({
        newTimeLog: {
          description: e.target.value
        }
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const newTimeLog = Object.assign(this.state.newTimeLog, {id: generateId(), isRunning: true, startTime: new Date()})
      const newTimeLogs = addTimeLog(this.state.timeLogs, newTimeLog)

      this.setState({
        timeLogs: newTimeLogs,
        newTimeLog: {
          description: ''
        }
      })
    }
}
