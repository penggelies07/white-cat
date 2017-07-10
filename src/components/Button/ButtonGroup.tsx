import * as React from 'react'
import Base from '../../libs/Base'

interface IButtonGroupProps {
  full?: boolean
}

export default class ButtonGroup extends Base<IButtonGroupProps> {
  render () {
    const {children, full} = this.props

    return (
      <div {...this.rootProps(['ButtonGroup', {full}])}>
        {children}
      </div>
    )
  }
}
