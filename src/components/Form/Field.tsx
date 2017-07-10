import * as PropTypes from 'prop-types'
import * as React from 'react'
import Base from '../../libs/Base'

interface IChildProps {
  value?: any,
  name?: string,
  message?: string,
  onChange: (value: any) => void
}

interface IFormFieldProps {
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
    const {value} = this.props
    this.onValueChange(value)
  }

  onValueChange = (value: any) => {
    const name = this.props.name
    const form = this.context.form
    if (name && form) {
      form.setValue(name, value)
    }
  }

  renderChildren = () => {
    const {name, children} = this.props
    const value = this.context.form.getValue(name)
    return typeof children === 'function'
      ? children({name, value, onChange: this.onValueChange})
      : children
  }

  render () {
    const  {label} = this.props
    return (
      <div {...this.rootProps('FormField')}>
        <label className='FormField__label'>
          {label}
        </label>
        <div className='FormField__content'>
          {this.renderChildren()}
        </div>
      </div>
    )
  }
}
