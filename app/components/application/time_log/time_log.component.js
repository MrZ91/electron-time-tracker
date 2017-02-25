import React, {Component} from 'react'
import {getSpentTime} from '../../../lib/time_log_helpers'

export class TimeLog extends Component {
  state = {
    description: this.props.description,
    startTime: this.props.startTime,
    _id: this.props._id,
    isRunning: this.props.isRunning,
    stopTime: this.props.stopTime
  }

  render() {
    return (
      <div className = "time-log">
        <div className = "time-log__button" onClick = {this.handleStartStopClick}>{this.state.isRunning ? 'STOP' : 'DONE'}</div>
        <div className = "time-log__description">{this.state.description}</div>
        <div className = "time-log__timer"> {this.getSpentTime()} </div>
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
      var newState = { _id: this.state._id, description: this.state.description, isRunning: false, stopTime: new Date(), startTime: this.state.startTime }
      var _self = this
      this.props.handleUpdate(newState, (savedTimeLog) => {
        newState = Object.assign({..._self.state}, savedTimeLog)
        _self.setState(newState)
      })
    }
  }

  getSpentTime = () => {
    return(this.state.isRunning ? getSpentTime(this.state.startTime) : getSpentTime(this.state.startTime, this.state.stopTime))
  }
}

TimeLog.propTypes = {
  description: React.PropTypes.string.isRequired,
  startTime: React.PropTypes.instanceOf(Date).isRequired,
  _id: React.PropTypes.string.isRequired
}
