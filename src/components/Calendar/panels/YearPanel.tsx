import * as cn from 'classnames'
import * as React from 'react'
import {getYears, IYearItem} from '../utils'

interface IYearPanelProps {
  year: number,
  value?: Date | null,
  onSelect?: (year: number) => void
}

interface IYearPanelState {
  years: IYearItem[]
}

export default class YearPanel extends React.Component<IYearPanelProps, IYearPanelState> {

  constructor (props: IYearPanelProps) {
    super(props)
    this.state = {
      years: getYears(props.year)
    }
  }

  componentWillReceiveProps ({year}: IYearPanelProps) {
    if (this.props.year !== year) {
      this.state = {
        years: getYears(year)
      }
    }
  }

  isSelected = (year: number) => {
    const value = this.props.value
    return value && value.getFullYear() === year
  }

  onSelect = (year: number) => {
    if (this.props.onSelect) {
      this.props.onSelect(year)
    }
  }

  render () {
    const {years} = this.state

    return (
      <div className='Calendar__year-panel'>
        {
          years.map(({year, current}) => (
            <div
              className={cn('Calendar__item', {current, active: this.isSelected(year)})}
              key={year}
              onClick={() => this.onSelect(year)}>
              {year}
            </div>
          ))}
      </div>
    )
  }
}