import * as React from 'react'
import Base from '../../libs/Base'
import './CheckBox.less'

export interface ICheckBoxProps {
  checked?: boolean,
  disabled?: boolean,
  value?: any,
  size?: 'small' | 'normal' | 'large'
  onChange?: (e: React.ChangeEvent<any>,  checked: boolean, value?: any) => void
}

export interface ICheckBoxState {
  checked: boolean
}

export default class CheckBox extends Base<ICheckBoxProps, ICheckBoxState> {

  static defaultProps = {
    size: 'normal'
  }

  constructor (props: ICheckBoxProps) {
    super(props)
    this.state = {
      checked: !!props.checked
    }
  }

  componentWillReceiveProps (nextProps: ICheckBoxProps) {
    if (this.props.checked !== nextProps.checked) {
      this.setState({checked: !!nextProps.checked})
    }
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {disabled, value, onChange} = this.props
    if (disabled) {
      return
    }
    const checked = e.target.checked
    if (!('checked' in this.props)) {
      this.setState({checked})
    }
    if (onChange) {
      onChange(e, checked, value)
    }
  }

  render () {
    const {disabled, children} = this.props
    const {checked} = this.state
    const size = this.props.size && 'whc-check-box--' + this.props.size
    return (
      <label {...this.rootProps(['whc-check-box', size, {checked, disabled}])}>
        <div className='whc-check-box__header'>
          <input
            type='checkbox'
            className='whc-check-box__original'
            checked={checked}
            disabled={disabled}
            onChange={this.onChange}
          />
        </div>
        <span className='whc-check-box__content'>
          {children}
        </span>
      </label >
    )
  }
}
