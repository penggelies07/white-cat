import * as cn from 'classnames'
import * as React from 'react'
import {dayNames, getDates, IDateItem, isSameDate} from '../utils'

interface IDatePanelProps {
  year: number,
  month: number,
  value?: Date | null,
  onSelect?: (date: Date) => void
}

interface IDatePanelState {
  dates: IDateItem[]
}

export default class DatePanel extends React.Component<IDatePanelProps, IDatePanelState> {

  constructor (props: IDatePanelProps) {
    super(props)
    this.state = {
      dates: getDates(props.year, props.month)
    }
  }

  componentWillReceiveProps ({year, month}: IDatePanelProps) {
    if (this.props.year !== year || this.props.month !== month) {
      this.state = {
        dates: getDates(year, month)
      }
    }
  }

  isSelected = (date: Date) => {
    const value = this.props.value
    return value && isSameDate(value, date)
  }
  
  onSelect = (date: Date) => {
    if (this.props.onSelect) {
      this.props.onSelect(date)
    }
  }

  render () {
    const {dates} = this.state

    return (
      <div className='whc-calendar__date-panel'>
        <div className='whc-calendar__date-panel-head'>
          {
            dayNames.map((name) => (
              <div className='whc-calendar__item' key={name}>{name}</div>
            ))
          }
        </div>
        {
          dates.map(({date, status, text, current}) => (
            <div
              className={cn('whc-calendar__item', status, {current, active: this.isSelected(date)})}
              key={status + text}
              onClick={() => this.onSelect(date)}>{text}</div>
          ))}
      </div>
    )
  }
}
