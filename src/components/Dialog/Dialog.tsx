import * as React from 'react'
import * as Transition from 'react-transition-group/CSSTransitionGroup'
import Base from '../../libs/Base'
import Button from '../Button'
import Mask from '../Mask'
import './Dialog.less'

interface IDialogProps {
  visible?: boolean,
  size?: 'small' | 'default' | 'large',
  maskClosable?: boolean,
  header?: React.ReactNode,
  footer?: React.ReactNode,
  cancelText?: React.ReactNode,
  confirmText?: React.ReactNode,
  onCancel?: () => void,
  onConfirm?: () => void| Promise<any>
}

interface IDialogState {
  loading: boolean
}

export default class Dialog extends Base<IDialogProps, IDialogState> {

  static defaultProps = {
    size: 'default',
    maskClosable: true,
    cancelText: '取消',
    confirmText: '确定'
  }

  state = {
    loading: false
  }

  onConfirm = () => {
    const {onConfirm} = this.props
    if (onConfirm) {
      const promise = onConfirm()
      if (promise instanceof Promise) {
        this.setState({loading: true})
        promise.then(() => {
          if (this.mounted) {
            this.setState({loading: false})
          }
        })
      }
    }
  }

  onClickMask = () => {
    if (!this.props.maskClosable) {
      return
    }
    const onCancel = this.props.onCancel
    if (onCancel) {
      onCancel()
    }
  }

  renderDefaultFooter = () => {
    const {cancelText, confirmText, onCancel} = this.props
    const {loading} = this.state

    return (
      <div className='Dialog__footer Dialog__defaultFooter'>
        <Button loading={loading} type='primary' size='small' onClick={this.onConfirm}>{confirmText}</Button>
        <Button loading={loading} type='text' size='small' onClick={onCancel}>{cancelText}</Button>
      </div>
    )
  }

  render () {
    const {visible, size, header, footer, children, onCancel} = this.props
    const rootProps = this.rootProps(['Dialog', `Dialog--${size}`])

    return (
      <span className='Dialog__wrap'>
        <Mask visible={visible} fixed onClick={this.onClickMask}/>
        <Transition
        transitionName='Dialog'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {
          visible
          ? (
            <div {...rootProps}>
              {header && <div className='Dialog__header'>{header}</div>}
              {children && <div className='Dialog__body'>{children}</div>}
              {
                footer === undefined
                ? this.renderDefaultFooter()
                : footer === null
                ? null
                : <div className='Dialog__footer'>{footer}</div>
              }
              <span className='Dialog__close' onClick={onCancel}>×</span>
            </div>
          )
          : null
        }
      </Transition>
      </span>
    )
  }
}
