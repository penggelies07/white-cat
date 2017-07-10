import * as React from 'react'
import Base from '../../libs/Base'
import './Card.less'

interface ICardItemProps {
  children?: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

class CardItem extends Base<ICardItemProps> {

  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.props.onClick) {
      this.props.onClick(e)
      e.stopPropagation()
    }
  }

  render () {
    return (
      <div {...this.rootProps('CardItem')} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
}

interface ICardProps {
  children?: React.ReactNode,
  items?: React.ReactNode,
  footer?: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default class Card extends Base<ICardProps> {
  static Item = CardItem

  render () {
    const {children, items, footer, onClick} = this.props
    return (
      <div {...this.rootProps('Card')}>
        {children && <div className='Card__header' onClick={onClick}>{children}</div>}
        {items && <div className='Card__items'>{items}</div>}
        {footer && <div className='Card__footer'>{footer}</div>}
      </div>
    )
  }
}
