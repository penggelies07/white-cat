import * as React from 'react'
import Base from '../../libs/Base'
import './Group.less'

export interface IGroupProps {
  title?: React.ReactNode,
  actions?: React.ReactNode,
  footer?: React.ReactNode
}

export default class Group extends Base<IGroupProps> {
  render () {
    const {title, actions, footer, children} = this.props
    return (
      <div {...this.rootProps('whc-group')}>
        {(title || actions) && (
          <div className='whc-group__header'>
            <div className='whc-group__title'>{title}</div>
            {actions && <div className='whc-group__actions'>{actions}</div>}
          </div>
        )}
        {children && <div className='whc-group__container'>{children}</div>}
        {footer && <div className='whc-group__footer'>{footer}</div>}
      </div>
    )
  }
}
