import * as React from 'react'
import Base from '../../libs/Base'

export interface IButtonGroupProps {
  full?: boolean
}

export default class ButtonGroup extends Base<IButtonGroupProps> {
  render () {
    const {children, full} = this.props

    return (
      <div {...this.rootProps(['whc-button-group', {full}])}>
        {children}
      </div>
    )
  }
}
