import * as PropTypes from 'prop-types'
import * as React from 'react'
import PopoverBase from '../../libs/PopoverBase'
import './Popover.less'

export interface IPopoverProps {
  title?: React.ReactNode
  content?: React.ReactNode
  width?: string | number
  narrow?: boolean
}

export default class Popover extends PopoverBase<IPopoverProps> {
  static childContextTypes = {
    popover: PropTypes.any
  }

  getArrow = () => {
    const div = document.createElement('div')
    div.className = 'whc-popover__arrow'
    return div
  }

  getContent = () => {
    const {title, content, width, narrow} = this.props
    return (
      <div {...this.rootProps(['whc-popover', {'whc-popover--narrow': narrow}])} style={{width}}>
        {title && (
          <div className='whc-popover__header'>{title}</div>
        )}
        <div className='whc-popover__content'>{content}</div>
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
