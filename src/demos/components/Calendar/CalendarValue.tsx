import * as React from 'react'
import {Calendar} from '../../../index'

export default class CalendarValue extends React.Component {

  render () {
    const date = new Date()

    return (
      <div>
        <Calendar value={date}/>
      </div>
    )
  }
}
