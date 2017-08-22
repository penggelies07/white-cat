import * as React from 'react'
import './Tooltip.less'
import PopoverBase from '../../libs/PopoverBase'

export interface ITooltipProps {
  content?: React.ReactNode,
  color?: 'dark' | 'light'
}

export default class Tooltip extends PopoverBase<ITooltipProps> {

  static defaultProps = {
    placement: 'top',
    trigger: 'hover',
    color: 'dark'
  }

  getArrow = () => {
    const div = document.createElement('div')
    div.className = 'whc-tooltip__arrow'
    return div
  }

  getContent = () => {
    const {content, color} = this.props
    return (
      <div {...this.rootProps(['whc-tooltip', `whc-tooltip--${color}`])}>
        <div className='whc-tooltip__content'>{content}</div>
      </div>
    )
  }

  render () {
    const children = this.props.children || ''
    return typeof children === 'string'
      ? React.createElement('span', {}, children)
      : React.cloneElement(React.Children.only(children))
  }
}
