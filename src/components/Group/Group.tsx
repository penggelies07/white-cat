import * as React from 'react'
import Base from '../../libs/Base'
import './Group.less'

export interface IGroupProps {
  title?: React.ReactNode,
  action?: React.ReactNode,
  footer?: React.ReactNode
}

export default class Group extends Base<IGroupProps> {
  render () {
    const {title, action, footer, children} = this.props
    return (
      <div {...this.rootProps('whc-group')}>
        {(title || action) && (
          <div className='whc-group__header'>
            <div className='whc-group__title'>{title}</div>
            {action && <div className='whc-group__action'>{action}</div>}
          </div>
        )}
        {children && <div className='whc-group__container'>{children}</div>}
        {footer && <div className='whc-group__footer'>{footer}</div>}
      </div>
    )
  }
}
