import * as React from 'react'
import Base from '../../libs/Base'
import './Container.less'

export interface IContainerProps {
  xs?: number | 'auto' | 'fixed',
  full?: boolean
}

export default class Container extends Base<IContainerProps> {
  render () {
    const {children, xs = 'fixed', full} = this.props
    const fullClass = full && 'whc-container--full'
    const xsClass = (xs === 'auto' || xs === 'fixed') && 'whc-container--' + xs
    const width = typeof xs === 'number' ? xs : undefined

    return (
      <div {...this.rootProps(['whc-container', xsClass, fullClass], {width})}>
        {children}
      </div>
    )
  }
}
