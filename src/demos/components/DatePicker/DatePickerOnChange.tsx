import * as React from 'react'
import {DatePicker} from '../../../components'

export interface IDatePickerOnChangeState {
  value: Date | null
}

export default class DatePickerOnChange extends React.Component<IDatePickerOnChangeState> {

  state = {
    value: null
  }

  onDateChange = (value: Date | null) => {
    this.setState({value})
  }

  render () {
    const {value} = this.state

    return (
      <div>
        <DatePicker value={value} onChange={this.onDateChange}/>
      </div>
    )
  }
}
