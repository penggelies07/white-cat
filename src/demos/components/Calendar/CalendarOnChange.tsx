import * as React from 'react'
import {Calendar} from '../../../index'

export interface ICalendarOnChangeProps {}

export interface ICalendarOnChangeState {
  date: Date | null
}

export default class CalendarOnChange extends React.Component<ICalendarOnChangeProps, ICalendarOnChangeState> {

  constructor (props: ICalendarOnChangeProps) {
    super(props)
    this.state = {
      date: null
    }
  }

  onChange = (date: Date) => {
    this.setState({date})
  }

  render () {
    const {date} = this.state

    return (
      <div>
        <Calendar value={date} onChange={this.onChange}/>
        <div>{date && date.toString()}</div>
      </div>
    )
  }
}
