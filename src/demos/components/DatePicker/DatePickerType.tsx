import * as React from 'react'
import {DatePicker} from '../../../components'

export default class DatePickerType extends React.Component {

  render () {
    return (
      <div>
        <DatePicker type='text'/>
        <br/>
        <br/>
        <DatePicker type='input'/>
      </div>
    )
  }
}
