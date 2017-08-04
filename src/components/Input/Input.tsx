import * as React from 'react'
import Base from '../../libs/Base'
import './Input.less'

export interface IInputProps {
  type?: 'text' | 'password' | 'textarea' | 'number',
  value?: string | number,
  placeholder?: string,
  size?: 'small' | 'normal' | 'large',
  disabled?: boolean,
  full?: boolean,
  plain?: boolean,
  prefix?: React.ReactNode,
  suffix?: React.ReactNode,
  autoFocus?: boolean
  onChange?: (value: string | number) => void,
  onFocus?: React.FormEventHandler<any>,
  onBlur?: React.FormEventHandler<any>,
  onKeyDown?: React.FormEventHandler<any>
}

export default class Input extends Base<IInputProps> {

  static defaultProps = {
    type: 'text',
    size: 'normal'
  }

  autoFocus = (el: HTMLInputElement) => {
    if (this.props.autoFocus && el) {
      el.focus()
    }
  }
  
  onChange: React.FormEventHandler<any> = (e: any) => {
    const {onChange, type} = this.props
    let value = e.target.value
    if (type === 'number') {
      value = parseInt(value, 10) || 0
    }
    if (onChange) {
      onChange(value)
    }
  }

  render () {
    const {type, size, disabled, full, plain, prefix, suffix, onChange, value, style, ...rest} = this.props
    const _size = size && `whc-input--` + size
    const _prefix = !!prefix && `whc-input--has-prefix`
    const _suffix = !!suffix && `whc-input--has-suffix`

    if (type === 'textarea') {
      return (
        <div {...this.rootProps(['whc-input', _size, {disabled, full, plain}])}>
          <textarea {...rest}
            value={value}
            className='whc-input__original'
            disabled={disabled}
            onChange={this.onChange}/>
        </div>
      )
    } else {
      let val = value || ''
      if (type === 'number') {
        val = (parseInt(value + '') || 0) + ''
      }
      return (
        <div {...this.rootProps(['whc-input', _size, _prefix, _suffix, {disabled, full, plain}])}>
          {prefix && <div className='whc-input__prefix'>{prefix}</div>}
          <input {...rest}
            ref={this.autoFocus}
            type={type === 'password' ? 'password' : 'text'}
            value={val}
            disabled={disabled}
            className='whc-input__original'
            onChange={this.onChange}/>
          {suffix && <div className='whc-input__suffix'>{suffix}</div>}
        </div>
      )
    }
  }
}
