import moment from 'moment'
export const addTimeLog = (timeLogsList, timeLog) => [...timeLogsList, timeLog]

export const generateId = () => Math.floor(Math.random()*10000)

export const getSpentTime = (startTime, stopTime = null) => {
  var spentTime, hours, minutes, seconds
  
  if (stopTime) {
    spentTime = moment.duration(stopTime - startTime)
  } else {
    spentTime = moment.duration(new Date() - startTime )
  }

  hours = spentTime.hours()
  minutes = spentTime.minutes()
  seconds = spentTime.seconds()
  
  return(hours + ':' + minutes + ':' + seconds)
}