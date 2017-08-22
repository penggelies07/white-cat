import * as PropTypes from 'prop-types'
import * as React from 'react'
import Base from '../../libs/Base'
import Field from './Field'
import FormStore, {IValueMap, IValidationMap, IValidationError} from './FormStore'
import './Form.less'

export interface IFormProps {
  layout?: 'horizontal' | 'vertical',
  labelWidth?: string | number,
  onSubmit?: (errors: IValidationError[] | null, values: IValueMap, reset: () => void) => void,
  validations?: IValidationMap
}

export default class Form extends Base<IFormProps> {

  static Field = Field

  static childContextTypes = {
    $formStore: PropTypes.any
  }

  static defaultProps = {
    layout: 'vertical'
  }

  formStore: FormStore

  constructor (props: IFormProps) {
    super(props)
    this.formStore = new FormStore(props.validations)
  }
  
  getChildContext = () => {
    return {
      formStore: this.formStore as any
    }
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const {onSubmit} = this.props
    if (onSubmit) {
      const errors = this.formStore.validateValues()
      onSubmit(errors.length ? errors : null, this.formStore.getValues(), this.reset)
    }
    e.preventDefault()
  }

  onReset = () => {
    this.reset()
  }

  reset = () => {
    this.formStore.reset()
    this.forceUpdate()
  }

  render () {
    const {layout, children} = this.props

    return (
      <form
        {...this.rootProps(['whc-form', `whc-form--${layout}`])}
        onReset={this.onReset}
        onSubmit={this.onSubmit}>
        {children}
      </form>
    )
  }
}
