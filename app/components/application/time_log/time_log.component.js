import React, {Component} from 'react'
import {getSpentTime} from '../../../lib/time_log_helpers'

export class TimeLog extends Component {
  state = this.props

  render() {
    let spentTime = this.state.isRunning ? getSpentTime(this.state.startTime) : getSpentTime(this.state.startTime, this.state.stopTime)
    return (
      <div className = "time-log">
        <div className = "time-log__button" onClick = {this.handleStartStopClick}>{this.state.isRunning ? 'STOP' : 'DONE'}</div>
        <div className = "time-log__description">{this.state.description}</div>
        <div className = "time-log__timer"> {spentTime} </div>
      </div>
    ) 
  }

  componentDidMount = ()  => {
    if (this.state.isRunning) {
      this.interval = setInterval(this.updateTimer.bind(this), 1000)
    }
  }

  updateTimer = () => {
    this.forceUpdate()
  }

  handleStartStopClick = () => {
    if (this.state.isRunning) {
      var newState = {...this.state, isRunning: false, stopTime: new Date()}
      this.setState(newState)
    }
  }
}

TimeLog.propTypes = {
  description: React.PropTypes.string.isRequired,
  startTime: React.PropTypes.instanceOf(Date).isRequired,
  id: React.PropTypes.number.isRequired
}
