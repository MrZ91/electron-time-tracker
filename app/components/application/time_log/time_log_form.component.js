import React, {Component} from 'react'
import {generateId} from '../../../lib/time_log_helpers'


export class TimeLogForm extends Component {
  state = { 
    newTimeLog: {
        description: ''
      }
  }

  render() {
    return(
      <div className = "application__new-time-log">
        <form className = "time-log__form"
              onSubmit = {this.handleSubmit}>
              
          <div className = "time-log__button"
               onClick = {this.handleSubmit}>
               PLAY
          </div> 

          <input type = "text"
                 className = "time-log__description" 
                 value = {this.state.newTimeLog.description}
                 onChange = {this.handleInputChange}
          />
          <div className = "time-log__timer"> 88:88 </div>
        </form>
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

    var newTimeLog = Object.assign({ ...this.state.newTimeLog }, { isRunning: true, startTime: new Date() })
    
    this.props.handleSubmit(newTimeLog)

    this.setState({ ...this.state, newTimeLog: { description: '' } })
  } 
}

TimeLogForm.propTypes = {
  timeLog: React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
  }),
  handleSubmit: React.PropTypes.func.isRequired
}
