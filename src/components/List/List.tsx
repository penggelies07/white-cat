import * as React from 'react'
import Base from '../../libs/Base'
import './List.less'

export interface IItemProps {
  active?: boolean,
  data?: any,
  onClick?: (e: React.MouseEvent<HTMLDivElement>, data: any) => void
}

class Item extends Base<IItemProps> {

  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {data, onClick} = this.props
    if (onClick) {
      onClick(e, data)
    }
  }

  render () {
    const {active, children} = this.props

    return (
      <div {...this.rootProps(['whc-list__item', {active}])} onClick={this.onClick}>
        {children}
      </div>
    )
  }
}

export interface IListProps {
  title?: React.ReactNode
}

export default class List extends Base<IListProps> {

  static Item = Item

  render () {
    const {title, children} = this.props

    return (
      <div {...this.rootProps('whc-list')}>
        {title && <div className='whc-list__title'>{title}</div>}
        {children}
      </div>
    )
  }
}
