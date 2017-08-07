import * as React from 'react'
import * as Transition from 'react-transition-group/CSSTransitionGroup'
import Base from '../../libs/Base'
import Notice from './Notice'
import './Notification.less'

const seed = 0

function getKey () {
  return 'key_' + Date.now() + seed
}

export interface INoticeOptions {
  type?: 'primary' | 'success' | 'warning' | 'error',
  icon?: string,
  content?: string,
  closable?: boolean,
  duration?: number
}

export interface INotice extends INoticeOptions {
  key: string
}

export interface INotificationProps {}

export interface INotificationState {
  notices: INotice[]
}

export default class Notification extends Base<INotificationProps, INotificationState> {

  static Notice = Notice

  constructor (props: INotificationProps) {
    super(props)
    this.state = {
      notices: []
    }
  }

  add = (options: INoticeOptions) => {
    const notice = {...options, key: getKey()}
    this.setState((state) => ({
      notices: [...state.notices, notice]
    }))
  }

  remove = (key: string) => {
    this.setState((state) => ({
      notices: state.notices.filter((n) => n.key !== key)
    }))
  }

  render () {
    const notices = this.state.notices
    return (
      <Transition
        {...this.rootProps('whc-notification')}
        transitionName='whc-notice'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {notices.map(({content, ...rest}) => (
          <Notice {...rest} onClose={() => this.remove(rest.key)}>{content}</Notice>
        ))}
      </Transition>
    )
  }
}
