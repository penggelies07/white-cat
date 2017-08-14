import * as React from 'react'
import Base from '../../libs/Base'
import Dialog from '../Dialog'
import Input from '../Input'

export interface IPromptProps {
  title?: string,
  value?: string,
  placeholder?: string,
  size?: 'small' | 'normal'| 'large',
  afterHide?: () => void,
  onConfirm?: (value: string) => void | Promise<any>
  onCancel?: () => void
}

export interface IPromptState {
  value: string,
  visible: boolean
}

export default class Prompt extends Base<IPromptProps, IPromptState> {

  constructor (props: IPromptProps) {
    super(props)
    this.state = {
      value: props.value || '',
      visible: false
    }
  }

  componentDidMount () {
    this.onShow()
  }

  onShow = () => {
    this.setState({visible: true})
  }

  onHide = () => {
    this.setState({visible: false}, () => {
      setTimeout(() => {
        if (this.props.afterHide) {
          this.props.afterHide()
        }
      }, 300)
    })
  }

  onConfirm = () => {
    const {onConfirm} = this.props
    const {value} = this.state
    if (onConfirm) {
      const promise = onConfirm(value)
      if (promise instanceof Promise) {
        return promise.then(() => this.onHide())
      }
    }
    return this.onHide()
  }

  onCancel = () => {
    this.onHide()
    const {onCancel} = this.props
    if (onCancel) {
      onCancel()
    }
  }

  onValueChange = (e: any, value: string) => {
    this.setState({value})
  }

  render () {
    const {title, size, placeholder} = this.props
    const {value, visible} = this.state

    return (
      <Dialog
        visible={visible}
        className='Prompt'
        size={size}
        maskClosable={false}
        onConfirm={this.onConfirm}
        onCancel={this.onCancel}
        header={(
        <div>{title}</div>
      )}>
        <Input
          full
          autoFocus
          value={value}
          placeholder={placeholder}
          onChange={this.onValueChange}/>
      </Dialog>
    )
  }
}
