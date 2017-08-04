import * as cn from 'classnames'
import * as React from 'react'
import Input from '../Input'
import Popover from '../Popover'
import ScrollBar from '../ScrollBar'

export interface ITimeInputProps {
  min?: number,
  max?: number,
  diff?: number,
  value?: number,
  disabled?: boolean,
  onChange?: (value: number) => void
}

export interface ITimeInputState {
  value: number,
  text: string
}

export default class TimeInput extends React.Component<ITimeInputProps, ITimeInputState> {

  constructor (props: ITimeInputProps) {
    super(props)

    const value = this.toNumber(props.value)
    this.state = {
      value,
      text: this.toString(value)
    }
  }

  componentWillReceiveProps (nextProps: ITimeInputProps) {
    if (this.state.value !== nextProps.value) {
      const value = this.toNumber(nextProps.value)
      this.setState({
        value,
        text: this.toString(value)
      })
    }
  }

  // shouldComponentUpdate (nextProps: any, {text, value}: ITimeInputState) {
  //   return this.state.text !== text || this.state.value !== value
  // }
  
  getItems = () => {
    const {min = 0, max = 10, diff = 1} = this.props
    const items: number[] = [min]

    let i = min
    while ((i += diff) < max) {
      items.push(i)
    }

    return items
  }

  toNumber = (value?: string | number, defaultValue: number = 0) => {
    const {min = 0, max = 10} = this.props
    const num = Number(value) || defaultValue
    return num < min ? min : num > max ? max - 1 : num
  }

  toString = (value: number) => {
    const s = value.toString()
    return s.length < 2 ? '0' + s : s
  }

  isSelect = (i: number) => {
    return i === this.state.value
  }

  onSelect = (i: number) => {
    this.setState({
      value: i,
      text: this.toString(i)
    }, () => {
      this.onChange()
    })
  }

  onInputChange = (text: string) => {
    this.setState({text})
  }

  onInputBlur = () => {
    const text = this.state.text
    const value = this.toNumber(text)
    this.setState({
      value,
      text: this.toString(value)
    }, () => {
      this.onChange()
    })
  }

  onChange = () => {
    const {value} = this.state
    const {value: oldValue, onChange} = this.props
    if (onChange && value !== oldValue) {
      onChange(value)
    }
  }

  render () {
    const {disabled} = this.props
    const {text} = this.state

    return (
      <span className='whc-time-picker__input'>
        <Popover placement='top' disabled={disabled} content={(
          <ScrollBar className='whc-time-picker__items'>
            {this.getItems().map((i) => (
              <div
                key={i}
                className={cn('whc-time-picker__item', {active: this.isSelect(i)})}
                onClick={() => this.onSelect(i)}>
                {this.toString(i)}
              </div>
            ))}
          </ScrollBar>
        )}>
          <Input
            className='whc-time-picker__input-origin'
            value={text}
            disabled={disabled}
            onChange={this.onInputChange}
            onBlur={this.onInputBlur}/>
        </Popover>
      </span>
    )
  }
}
