import * as cn from 'classnames'
import * as React from 'react'
import {getMonths, IMonthItem} from '../utils'

export interface IMonthPanelProps {
  value?: Date | null,
  onSelect?: (month: number) => void
}

export interface IMonthPanelState {
  months: IMonthItem[]
}

export default class MonthPanel extends React.Component<IMonthPanelProps, IMonthPanelState> {

  constructor (props: IMonthPanelProps) {
    super(props)
    this.state = {
      months: getMonths()
    }
  }

  isSelected = (month: number) => {
    const value = this.props.value
    return value && value.getMonth() === month - 1
  }

  onSelect = (month: number) => {
    if (this.props.onSelect) {
      this.props.onSelect(month)
    }
  }

  render () {
    const {months} = this.state
    return (
      <div className='whc-calendar__month-panel'>
        {
          months.map(({month, text, current}) => (
            <div
              className={cn('whc-calendar__item', {current, active: this.isSelected(month)})}
              key={month}
              onClick={() => this.onSelect(month)}>
              {text}
            </div>
          ))}
      </div>
    )
  }
}