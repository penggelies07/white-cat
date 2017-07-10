import * as React from 'react'
import Base from '../../libs/Base'
import './Layout.less'

interface IMiddleContainerProps {}

class MiddleContainer extends Base<IMiddleContainerProps> {

  render () {
    return (
      <div {...this.rootProps('MiddleContainer')}>
        {this.props.children}
      </div>
    )
  }
}

interface ILayoutProps {
  direction?: 'horizontal' | 'vertical',
  centered?: boolean,
  full?: boolean,
  header?: React.ReactNode,
  footer?: React.ReactNode
}

export default class Layout extends Base<ILayoutProps> {

  static MiddleContainer = MiddleContainer

  static defaultProps = {
    direction: 'vertical'
  }

  render () {
    const {header, footer, children, centered, full} = this.props
    const direction = this.props.direction && 'Layout--' + this.props.direction
    return (
      <div {...this.rootProps(['Layout', direction, {centered, full}])}>
        {header && <div className='Layout__header'>{header}</div>}
        {children && <div className='Layout__container'>{children}</div>}
        {footer && <div className='Layout__footer'>{footer}</div>}
      </div>
    )
  }
}
