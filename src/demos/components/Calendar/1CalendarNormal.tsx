import * as React from 'react'
import {Calendar} from '../../../index'

export interface ICalendarNormalProps {}

export interface ICalendarNormalState {
  date: Date | null
}

export default class CalendarNormal extends React.Component<ICalendarNormalProps, ICalendarNormalState> {

  constructor (props: ICalendarNormalProps) {
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
        <div>{date && date.toString()}</div>
        <Calendar value={date} onChange={this.onChange}/>
      </div>
    )
  }
}
