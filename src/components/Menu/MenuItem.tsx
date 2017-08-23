import * as PropTypes from 'prop-types'
import * as React from 'react'
import Base from '../../libs/Base'

export interface IMenuItemProps {
  command?: string,
  data?: any,
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default class MenuItem extends Base<IMenuItemProps> {
  static contextTypes = {
    $popover: PropTypes.any,
    $menu: PropTypes.any
  }

  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.props.onClick) {
      this.props.onClick(e)
    }
    const {$menu, $popover} = this.context
    if ($menu && $menu.props.onCommand) {
      $menu.props.onCommand(e, this.props.command || '', this.props.data)
    }
    if ($popover) {
      $popover.hide()
    }
  }

  render () {
    const {children} = this.props

    return (
      <div {...this.rootProps('whc-menu-item')} onClick={this.onClick}>
        {children}
      </div>
    )
  }
}
