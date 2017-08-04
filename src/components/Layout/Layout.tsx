import * as React from 'react'
import Base from '../../libs/Base'
import './Layout.less'

export interface IMiddleContainerProps {}

export class MiddleContainer extends Base<IMiddleContainerProps> {

  render () {
    return (
      <div {...this.rootProps('whc-middle-container')}>
        {this.props.children}
      </div>
    )
  }
}

export interface ILayoutProps {
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
    const direction = this.props.direction && 'whc-layout--' + this.props.direction
    return (
      <div {...this.rootProps(['whc-layout', direction, {centered, full}])}>
        {header && <div className='whc-layout__header'>{header}</div>}
        {children && <div className='whc-layout__container'>{children}</div>}
        {footer && <div className='whc-layout__footer'>{footer}</div>}
      </div>
    )
  }
}
