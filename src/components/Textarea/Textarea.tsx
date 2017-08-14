import * as React from 'react'
import Base from '../../libs/Base'
import './Textarea.less'

export interface ITextareaProps {
  value?: string,
  placeholder?: string,
  size?: 'small' | 'normal' | 'large',
  disabled?: boolean,
  full?: boolean,
  autoFocus?: boolean,
  onChange?: (e: React.ChangeEvent<any>, value: string) => void,
  onFocus?: React.FormEventHandler<any>,
  onBlur?: React.FormEventHandler<any>,
  onKeyDown?: React.FormEventHandler<any>
}

export default class Textarea extends Base<ITextareaProps> {

  static defaultProps = {
    type: 'text',
    size: 'normal'
  }

  autoFocus = (el: HTMLTextAreaElement) => {
    if (this.props.autoFocus && el) {
      el.focus()
    }
  }
  
  onChange: React.ChangeEventHandler<any> = (e: React.ChangeEvent<any>) => {
    const {onChange} = this.props
    if (onChange) {
      onChange(e, e.target.value)
    }
  }

  render () {
    const {size, disabled, full, value, placeholder, onFocus, onBlur, onKeyDown} = this.props
    const _size = size && `whc-textarea--` + size

    return (
      <div {...this.rootProps(['whc-textarea', _size, {disabled, full}])}>
        <textarea
          placeholder={placeholder}
          value={value}
          className='whc-textarea__original'
          disabled={disabled}
          onChange={this.onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}/>
      </div>
    )
  }
}
