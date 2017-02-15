import React, {Component} from 'react';
import {TimeLogForm} from './time_log/time_log_form.component';
import {TimeLogs} from './time_log/time_logs.component'

export default class Application extends Component {
    constructor() {
      super()

      this.state = {
        timeLogs: [
          {id: 1, isRunning: true, description: "Do something weird", startTime: '88:88'},
          {id: 2, isRunning: true, description: "Play chess", startTime: '88:88'},
          {id: 3, isRunning: false, description: "Some really long, and important super-duper task, I've done today", startTime: '88:88', timeSpent: '1:33'}
        ],
        newTimeLog: {
          description: ''
        }
      }

      this.handleInputChange = this.handleInputChange.bind(this)
    }

    render() {
        return (
          <div className = "application__container">
            <TimeLogForm
              description = {this.state.newTimeLog.description}
              handleInputChange = {this.handleInputChange}
            />
            <TimeLogs
              timeLogs = {this.state.timeLogs}
            />
          </div>
        );
    }
    
    handleInputChange (e) {
      this.setState({
        newTimeLog: {
          description: e.target.value
        }
      })
    }
}
