import * as PropTypes from 'prop-types'
import * as React from 'react'
import Base from '../../libs/Base'
import './CheckBox.less'

interface ICheckBoxProps {
  checked?: boolean,
  disabled?: boolean,
  value?: any,
  size?: 'small' | 'large'
  onChange?: (checked: boolean, value?: any) => void
}

interface ICheckBoxState {
  checked: boolean
}

export default class CheckBox extends Base<ICheckBoxProps, ICheckBoxState> {

  static contextTypes = {
    form: PropTypes.any,
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
    if (this.props.checked === undefined) {
      this.setState({checked})
    }
    if (onChange) {
      onChange(checked, value)
    }
  }

  render () {
    const {checked} = this.state
    const {disabled, children} = this.props
    const size = this.props.size && 'whc-checkbox--' + this.props.size
    return (
      <label {...this.rootProps(['whc-checkbox', size, {checked, disabled}])}>
        <div className='whc-checkbox__head'>
          <input
            type='whc-checkbox'
            className='whc-checkbox__original'
            checked={checked}
            disabled={disabled}
            onChange={this.onChange}
          />
        </div>
        <span className='whc-checkbox__content'>
          {children}
        </span>
      </label>
    )
  }
}