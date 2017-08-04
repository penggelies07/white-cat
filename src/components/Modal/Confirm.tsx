import * as React from 'react'
import Base from '../../libs/Base'
import Dialog from '../Dialog'

export interface IConfirmProps {
  title?: string,
  content?: string,
  size?: 'small' | 'normal'| 'large',
  afterHide?: () => void,
  onConfirm?: () => void | Promise<any>
  onCancel?: () => void
}

export interface IConfirmState {
  visible: boolean
}

export default class Confirm extends Base<IConfirmProps, IConfirmState> {

  constructor (props: IConfirmProps) {
    super(props)
    this.state = {
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
    if (onConfirm) {
      const promise = onConfirm()
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

  render () {
    const {title, content, size} = this.props
    const {visible} = this.state

    return (
      <Dialog
        visible={visible}
        className='Confirm'
        size={size}
        maskClosable={false}
        onConfirm={this.onConfirm}
        onCancel={this.onCancel}
        header={(
        <div>{title}</div>
      )}>
        {content}
      </Dialog>
    )
  }
}
