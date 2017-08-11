import * as React from 'react'
import Base from '../../libs/Base'
import './Divider.less'

export interface IDividerProps {
  direction?: 'horizontal' | 'vertical'
}

export default class Divider extends Base<IDividerProps> {

  static defaultProps = {
    direction: 'horizontal'
  }

  render () {
    const {direction, children} = this.props

    return (
      <div {...this.rootProps(['whc-divider', `whc-divider--${direction}`])}>
        {children && (
          <span className='whc-divider__content'>{children}</span>
        )}
      </div>
    )
  }
}
