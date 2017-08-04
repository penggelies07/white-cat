import * as React from 'react'
import Base from '../../libs/Base'
import TimeInput from './TimeInput'
import './TimePicker.less'

export interface ITimePickerProps {
  hours?: number,
  minutes?: number,
  seconds?: number,
  layout?: string[],
  disabled?: boolean,
  onChange?: (hours: number, minutes: number, seconds: number) => void
}

export interface ITimePickerState {}

export default class TimePicker extends Base <ITimePickerProps, ITimePickerState> {

  static defaultProps = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  constructor (props: ITimePickerProps) {
    super(props)
    this.state = {}
  }

  onHoursChange = (value: number) => {
    const {hours, minutes, seconds, onChange} = this.props as any
    if (onChange && hours !== value) {
      onChange(value, minutes, seconds)
    }
  }

  onMinutesChange = (value: number) => {
    const {hours, minutes, seconds, onChange} = this.props as any
    if (onChange && minutes !== value) {
      onChange(hours, value, seconds)
    }
  }

  onSecondsChange = (value: number) => {
    const {hours, minutes, seconds, onChange} = this.props as any
    if (onChange && seconds !== value) {
      onChange(hours, minutes, value)
    }
  }

  renderContent = (): JSX.Element[] => {
    const {layout = ['hours', 'minutes'], hours = 0, minutes = 0, seconds = 0, disabled} = this.props

    const template = {
      'hours': (
        <TimeInput
          key='hours'
          value={hours}
          max={24}
          disabled={disabled}
          onChange={this.onHoursChange}/>
      ),
      'minutes': (
        <TimeInput
          key='minutes'
          value={minutes}
          max={60}
          diff={10}
          disabled={disabled}
          onChange={this.onMinutesChange}/>
      ),
      'seconds': (
        <TimeInput
          key='seconds'
          value={seconds}
          max={60}
          diff={10}
          disabled={disabled}
          onChange={this.onSecondsChange}/>
      )
    }

    return layout.reduce((content: JSX.Element[], name, i) => {
      if (content.length) {
        content.push(<span key={'spt' + i} className='whc-time-picker__separator'>:</span>)
      }
      if (template[name]) {
        content.push(template[name])
      }
      return content
    }, [])
  }

  render () {
    return (
      <div {...this.rootProps('whc-time-picker')}>
        {this.renderContent()}
      </div>
    )
  }
}
