import * as PropTypes from 'prop-types'
import * as React from 'react'
import Base from '../../libs/Base'
import Field from './Field'
import './Form.less'

export interface IField {
  name: string,
  message: string,
  value: any
}

interface IFormProps {
  layout?: 'horizontal' | 'vertical',
  labelWidth?: string | number,
  onSubmit?: (invalid: IField[] | null, values: any, reset?: () => void) => void,
  validations?: {
    [key: string]: (value: any, values: any) => string | boolean
  }
}

interface IFormState {
  values: any,
  defaultValues: any
}

export default class Form extends Base<IFormProps, IFormState> {

  static Field = Field

  static childContextTypes = {
    form: PropTypes.any
  }

  static defaultProps = {
    layout: 'vertical'
  }

  constructor (props: IFormProps) {
    super(props)
    this.state = {
      values: {},
      defaultValues: {}
    }
  }

  getChildContext = () => {
    return {
      form: this
    }
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const {onSubmit} = this.props
    const {values} = this.state
    if (onSubmit) {
      const invalids: IField[] = []
      for (let name in values) {
        const invalid = this.validate(name)
        if (invalid) {
          invalids.push(invalid)
        }
      }
      onSubmit(invalids.length ? invalids : null, values, this.reset)
    }
    e.preventDefault()
  }

  setValue = (name: string, value: any) => {
    const {values, defaultValues} = this.state
    const oldValue = values[name]
    let newValue = value
    if (oldValue instanceof Array) {
      let exist = typeof value === 'object'
        ? oldValue.find((item) => item.id === value.id)
        : oldValue.find((item) => item === value)
      newValue = !!exist
        ? oldValue.filter((item) => item !== exist)
        : [...oldValue, value]
    }
    this.setState((state) => ({values: {...state.values, [name]: newValue}}))
    if (!(name in defaultValues)) {
      this.setState((state) => ({defaultValues: {...state.defaultValues, [name]: newValue}}))
    }
  }

  reset = () => {
    this.setState({values: this.state.defaultValues})
  }

  getValue = (name: string) => {
    return this.state.values[name]
  }

  validate = (name: string) => {
    const validations = this.props.validations
    const validation = validations && validations[name]
    if (validation) {
      const values = this.state.values
      const value = values[name]
      let result
      try {
        result = validation(value, values)
      } catch (error) {
        result = error.message
        if (console.warn) {
          console.warn(error)
        }
      }
      if (typeof result === 'string' || result === false) {
        return {
          name,
          message: result || '',
          value
        }
      }
    }
    return null
  }

  render () {
    const {layout, children} = this.props

    return (
      <form {...this.rootProps(['whc-form', `whc-form--${layout}`])} onSubmit={this.onSubmit}>
        {children}
      </form>
    )
  }
}
