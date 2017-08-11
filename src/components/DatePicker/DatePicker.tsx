import * as formatDate from 'date-fns/format'
import * as React from 'react'
import Base from '../../libs/Base'
import Button from '../Button'
import Calendar from '../Calendar'
import Icon from '../Icon'
import Input from '../Input'
import Popover from '../Popover'
import './DatePicker.less'

export interface IDatePickerProps {
  type?: 'text' | 'input',
  value?: Date | string | null,
  format?: string,
  icon?: string | false,
  placeholder?: string,
  full?: boolean,
  disabled?: boolean,
  onChange?: (value: Date | null) => void
}

export interface IDatePickerState {
  value: Date | null,
  visible: boolean
}

export default class DatePicker extends Base<IDatePickerProps, IDatePickerState> {

  static defaultProps = {
    type: 'text',
    icon: 'calendar',
    format: 'YYYY-MM-DD'
  }

  constructor (props: IDatePickerProps) {
    super(props)

    this.state = {
      value: typeof props.value === 'string' ? new Date(props.value) : props.value || null,
      visible: false
    }
  }

  componentWillReceiveProps ({value}: IDatePickerProps) {
    value = (typeof value === 'string' ? new Date(value) : value || null) as Date
    this.setState({value})
  }

  onVisibleChange = (visible: boolean) => {
    if (visible) {
      const {value} = this.props
      this.setState({
        visible,
        value: typeof value === 'string' ? new Date(value) : value || null
      })
    } else {
      this.setState({visible})
    }
  }

  onChange = (value: Date) => {
    this.setState({value})
  }

  onConfirm = () => {
    this.setState({visible: false})
    if (this.props.onChange) {
      this.props.onChange(this.state.value)
    }
  }

  onCancel = () => {
    this.setState({visible: false})
  }

  onClear = () => {
    this.setState({value: null, visible: false})
    if (this.props.onChange) {
      this.props.onChange(null)
    }
  }

  render () {
    const {value: defaultValue, type, format, icon, placeholder, full, disabled} = this.props
    const {value, visible} = this.state
    const valueText = defaultValue ? formatDate(defaultValue, format) : ''
    return (
      <Popover
        {...this.rootProps(['whc-date-picker', {full}])}
        visible={visible && !disabled}
        onChange={this.onVisibleChange}
        content={(
        <div className='whc-date-picker__popover'>
          <Calendar value={value} onChange={this.onChange}/>
          <div className='whc-date-picker__actions'>
            <Button type='primary' size='small' onClick={this.onConfirm}>确定</Button>
            <Button type='basic' size='small' onClick={this.onClear}>清除</Button>
            <Button type='basic' size='small' onClick={this.onCancel}>取消</Button>
          </div>
        </div>
      )}>
        {type === 'text' ? (
          <div className='whc-date-picker__text'>
            <Icon name={icon || undefined} clickable>{valueText || placeholder}</Icon>
          </div>
        ) : (
          <Input prefix={(
            icon && <Icon name={icon}/>
          )} value={valueText} placeholder={placeholder} disabled={disabled} full={full}/>
        )}
      </Popover>
    )
  }
}
