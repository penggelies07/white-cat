import * as React from 'react'
import Base from '../../libs/Base'
import Icon from '../Icon'

const iconMap = {
  primary: '',
  success: 'check',
  warning: 'exclamation',
  error: 'close',
  loading: ''
}

interface INoticeProps {
  type?: 'primary' | 'success' | 'warning' | 'error',
  icon?: string,
  closable?: boolean,
  loading?: boolean,
  duration?: number,
  onClose?: () => void
}

export default class Notice extends Base<INoticeProps> {

  static defaultProps = {
    type: 'primary'
  }

  timer: any

  componentDidMount () {
    this.startTimer()
  }
  
  startTimer = () => {
    const {duration, onClose} = this.props
    if (!this.timer && duration && duration > 0) {
      this.timer = setTimeout(() => {
        if (onClose) {
          onClose()
        }
      }, duration)
    }
  }

  clearTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer)
      delete this.timer
    }
  }

  renderHeader = () => {
    const {type, icon, loading} = this.props
    const name = loading
      ? 'circle-o-notch'
      : icon || iconMap[type || 'primary']
    return name
      ? (
        <div className='whc-notice__header'>
          <Icon name={name} spinning={loading} fit/>
        </div>
      ) : null
  }

  render () {
    const {children, type, closable, onClose} = this.props
    return (
      <div {...this.rootProps(['whc-notice', `whc-notice__${type}`])}>
        <div className='whc-notice__wrap' onMouseEnter={this.clearTimer} onMouseLeave={this.startTimer}>
          {this.renderHeader()}
          <div className='whc-notice__content'>{children}</div>
          {closable && (
            <div className='whc-notice__footer'>
              <span className='whc-notice__close' onClick={onClose}>×</span>
            </div>
          )}
        </div>
      </div>
    )
  }
}
