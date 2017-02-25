import React, {Component} from 'react';
import {TimeLogForm} from './time_log/time_log_form.component';
import {TimeLogs} from './time_log/time_logs.component'
import {addTimeLog} from '../../lib/time_log_helpers'
const timeLogStorage = window.require('electron').remote.app.timeLogStorage

export default class Application extends Component {

  state = {
    timeLogs: []
  }

  render() {
    return (
      <div className = "application__container">
        <TimeLogForm
          handleSubmit = {this.handleSubmitTimeLog}
        />
        <TimeLogs
          timeLogs = {this.state.timeLogs}
          handleUpdate = {this.handleUpdateTimeLog}
        />
      </div>
    )
  }
  
  handleSubmitTimeLog = (newTimeLog) => {
    var _self = this

    timeLogStorage.insert(newTimeLog, (error, savedTimeLog) => {
      if (error) {
        console.log(error)
      } else {
        const newTimeLogs = addTimeLog(_self.state.timeLogs, savedTimeLog)

        _self.setState({ timeLogs: newTimeLogs }) 
      }
    })
  }

  handleUpdateTimeLog = (timeLog, updateTimeLog) => {
    var { _id, ...data } = { ...timeLog }

    timeLogStorage.update({ _id: _id }, data, {}, (error, savedCount) => {
      if (error) {
        console.log(error)
      } else {
        if (savedCount > 0) {
          timeLogStorage.findOne({ _id: _id }).exec((_error, savedTimeLog) => updateTimeLog(savedTimeLog) )
        } 
      }
    })
  }

  componentDidMount = () => {
    var _self = this

    timeLogStorage.find({})
    .exec((error, loadedTimeLogs) => { 
        if (error) {
            console.log(error)
        } else {
          _self.setState({ timeLogs: loadedTimeLogs }) 
        }
      }
    )
  }
}
