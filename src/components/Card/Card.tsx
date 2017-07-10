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
      <div {...this.rootProps('whc-card-item')} onClick={this.onClick}>
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
      <div {...this.rootProps('whc-card')}>
        {children && <div className='whc-card__header' onClick={onClick}>{children}</div>}
        {items && <div className='whc-card__items'>{items}</div>}
        {footer && <div className='whc-card__footer'>{footer}</div>}
      </div>
    )
  }
}
