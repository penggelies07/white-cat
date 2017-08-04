import * as React from 'react'
import Base from '../../libs/Base'
import './Box.less'

export default class Box extends Base {

  render () {
    const {children} = this.props
    return (
      <div {...this.rootProps('whc-box')}>
        {children}
      </div>
    )
  }
}
