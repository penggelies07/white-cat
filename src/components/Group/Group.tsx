import * as React from 'react'
import Base from '../../libs/Base'
import './Group.less'

interface IGroupProps {
  title?: React.ReactNode,
  action?: React.ReactNode,
  footer?: React.ReactNode
}

export default class Group extends Base<IGroupProps> {
  render () {
    const {title, action, footer, children} = this.props
    return (
      <div {...this.rootProps('Group')}>
        {(title || action) && (
          <div className='Group__header'>
            <div className='Group__title'>{title}</div>
            {action && <div className='Group__action'>{action}</div>}
          </div>
        )}
        {children && <div className='Group__container'>{children}</div>}
        {footer && <div className='Group__footer'>{footer}</div>}
      </div>
    )
  }
}
