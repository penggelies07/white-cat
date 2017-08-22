import * as PropTypes from 'prop-types'
import * as React from 'react'
import Base from '../../libs/Base'
import MenuItem from './MenuItem'
import './Menu.less'

export type MenuChildType = null | false | React.ReactElement<MenuItem>

export interface IMenuProps {
  title?: React.ReactNode,
  bordered?: boolean,
  children?: MenuChildType | MenuChildType[],
  onCommand?: (e: React.MouseEvent<any>, command: string, data: any) => void
}

export default class Menu extends Base<IMenuProps> {
  static Item = MenuItem

  static childContextTypes = {
    $menu: PropTypes.any
  }

  getChildContext = () => {
    return {
      $menu: this as any
    }
  }
  
  render () {
    const {title, children, bordered} = this.props

    return (
      <div {...this.rootProps(['whc-menu', {'whc-menu--bordered': bordered}])}>
        {title && <div className='whc-menu__title'>{title}</div>}
        {children}
      </div>
    )
  }
}
