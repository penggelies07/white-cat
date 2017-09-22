import * as React from 'react'
import Base from '../../libs/Base'

export interface IListItemProps {
  active?: boolean
  data?: any
  onClick?: (e: React.MouseEvent<HTMLDivElement>, data: any) => void
}

export class ListItem extends Base<IListItemProps> {

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
        {}
        {children}
      </div>
    )
  }
}
