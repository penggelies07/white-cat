import * as React from 'react'
import Base from '../../libs/Base'
import './Box.less'

interface IBoxProps {}

export default class Box extends Base<IBoxProps> {

  render () {
    const {children} = this.props
    return (
      <div {...this.rootProps('Box')}>
        {children}
      </div>
    )
  }
}
