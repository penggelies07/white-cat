import * as PropTypes from 'prop-types'
import * as React from 'react'
import Base from '../../libs/Base'

export interface IChildProps {
  value?: any,
  name?: string,
  message?: string,
  onChange: (e: any, value: any) => void
}

export interface IFormFieldProps {
  name?: string,
  value?: any,
  label?: React.ReactNode,
  children: React.ReactNode | ((props: IChildProps) => React.ReactNode)
}

export default class FormField extends Base<IFormFieldProps> {

  static contextTypes = {
    form: PropTypes.any,
  }

  componentWillMount () {
    const form = this.context.form
    const {name, value} = this.props
    if (form && name && 'value' in this.props) {
      form.setValue(name, value)
    }
  }

  onValueChange = (e: any, value: any) => {
    const name = this.props.name
    const form = this.context.form
    if (name && form) {
      form.setValue(name, value)
    }
  }

  renderChildren = () => {
    const {name, children, value} = this.props
    return typeof children === 'function'
      ? children({name, value, onChange: this.onValueChange})
      : children
  }

  render () {
    const  {label} = this.props
    return (
      <div {...this.rootProps('whc-form-field')}>
        <label className='whc-form-field__label'>
          {label}
        </label>
        <div className='whc-form-field__content'>
          {this.renderChildren()}
        </div>
      </div>
    )
  }
}
