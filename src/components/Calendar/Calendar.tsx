import * as React from 'react'
import Base from '../../libs/Base'
import DatePanel from './panels/DatePanel'
import Icon from '../Icon'
import MonthPanel from './panels/MonthPanel'
import YearPanel from './panels/YearPanel'
import {monthNames} from './utils'
import './Calendar.less'

export enum viewTypes {
  YEAR = 0,
  MONTH = 1,
  DATE = 2
}

export interface ICalendarProps {
  value?: Date | null,
  onChange?: (value: Date) => void
}

export interface ICalendarState {
  status: viewTypes,
  year: number,
  month: number,
  value: Date | null
}

export default class Calendar extends Base<ICalendarProps, ICalendarState> {

  constructor (props: ICalendarProps) {
    super(props)

    const today = new Date()

    this.state = {
      status: viewTypes.DATE,
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      value: props.value || null
    }
  }

  componentWillReceiveProps ({value}: ICalendarProps) {
    this.setState({value: value || null})
  }

  onPrevious = () => {
    switch (this.state.status) {
      case viewTypes.DATE:
        const month = this.state.month - 1
        if (month < 1) {
          this.setState({year: this.state.year - 1, month: 12})
        } else {
          this.setState({month})
        }
        break
      case viewTypes.MONTH:
        this.setState({year:  this.state.year - 1})
        break
      case viewTypes.YEAR:
        this.setState({year: this.state.year - 12})
        break
      default:
        break
    }
  }

  onReturn = () => {
    switch (this.state.status) {
      case viewTypes.DATE:
        this.setState({status: viewTypes.MONTH})
        break
      case viewTypes.MONTH:
        this.setState({status: viewTypes.YEAR})
        break
      default:
        break
    }
  }

  onNext = () => {
    switch (this.state.status) {
      case viewTypes.DATE:
        const month = this.state.month + 1
        if (month > 12) {
          this.setState({year: this.state.year + 1, month: 1})
        } else {
          this.setState({month})
        }
        break
      case viewTypes.MONTH:
        this.setState({year: this.state.year + 1})
        break
      case viewTypes.YEAR:
        this.setState({year: this.state.year + 12})
        break
      default:
        break
    }
  }

  onSelectYear = (year: number) => {
    this.setState({
      year,
      status: viewTypes.MONTH
    })
  }

  onSelectMonth = (month: number) => {
    this.setState({
      month,
      status: viewTypes.DATE
    })
  }

  onSelectDate = (date: Date) => {
    this.setState({value: date})
    if (this.props.onChange) {
      this.props.onChange(date)
    }
  }

  renderTitle = () => {
    const  {status, year, month} = this.state
    switch (status) {
      case viewTypes.DATE:
        return `${year}年 ${monthNames[month - 1]}`
      case viewTypes.MONTH:
        return `${year}年`
      case viewTypes.YEAR:
        return `${year - 12} - ${year + 12}`
      default:
        return ''
    }
  }

  render () {
    const {status, year, month, value} = this.state

    return (
      <div {...this.rootProps('whc-calendar')}>
        <div className='whc-calendar__header'>
          <div className='whc-calendar__item' onClick={this.onPrevious}><Icon name='angle-left'/></div>
          <div className='whc-calendar__item whc-calendar__upper' onClick={this.onReturn}>
            {this.renderTitle()}
          </div>
          <div className='whc-calendar__item' onClick={this.onNext}><Icon name='angle-right'/></div>
        </div>
        <div className='whc-calendar__body'>
          <div className='whc-calendar__slide' style={{left: status * -100 + '%'}}>
            <YearPanel year={year} value={value} onSelect={this.onSelectYear}/>
            <MonthPanel value={value} onSelect={this.onSelectMonth}/>
            <DatePanel year={year} month={month} value={value} onSelect={this.onSelectDate}/>
          </div>
        </div>
      </div>
    )
  }
}