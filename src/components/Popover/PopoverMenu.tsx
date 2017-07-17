import * as React from 'react'
import Base from '../../libs/Base'
import * as PropTypes from 'prop-types'

interface IPopoverMenuItemProps {
  command?: string,
  data?: any,
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

class PopoverMenuItem extends Base<IPopoverMenuItemProps> {
  static contextTypes = {
    popover: PropTypes.any,
    popoverMenu: PropTypes.any
  }

  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.props.onClick) {
      this.props.onClick(e)
    }
    const {popoverMenu, popover} = this.context
    if (popoverMenu && popoverMenu.props.onCommand) {
      popoverMenu.props.onCommand(e, this.props.command || '', this.props.data)
    }
    if (popover) {
      popover.hide()
    }
  }

  render () {
    const {children} = this.props

    return (
      <div {...this.rootProps('whc-popover-menu__item')} onClick={this.onClick}>{children}</div>
    )
  }
}

interface IPopoverMenuDividerProps {}

class PopoverMenuDivider extends Base<IPopoverMenuDividerProps> {
  render () {
    return (
      <div {...this.rootProps('whc-popover-menu__divider')}/>
    )
  }
}

type menuChildType = null | false | React.ReactElement<PopoverMenuItem> | React.ReactElement<PopoverMenuDivider>

interface IPopoverMenuProps {
  children?: menuChildType | menuChildType[],
  onCommand?: (e: React.MouseEvent<any>, command: string, data: any) => void
}

export default class PopoverMenu extends Base<IPopoverMenuProps> {
  static Item = PopoverMenuItem
  static Divider = PopoverMenuDivider

  static childContextTypes = {
    popoverMenu: PropTypes.any
  }

  getChildContext = () => {
    return {
      popoverMenu: this
    }
  }
  
  render () {
    return (
      <div {...this.rootProps('whc-popover-menu')}>
        {this.props.children}
      </div>
    )
  }
}
