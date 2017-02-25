import React from 'react'

export const TimeLogForm = (props) => (
  <div className = "application__new-time-log">
    <form className = "time-log__form"
          onSubmit = {props.handleSubmit}>
          
      <div className = "time-log__button"
           onClick = {props.handleSubmit}>PLAY</div>
      <input type = "text"
      className = "time-log__description" 
      value = {props.description}
      onChange = {props.handleInputChange}
      />
      <div className = "time-log__timer"> 88:88 </div>
    </form>
  </div> 
  )

TimeLogForm.propTypes = {
  description: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
}