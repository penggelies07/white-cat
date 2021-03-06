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
  static contextTypes = {
    $popover: PropTypes.any
  }

  static childContextTypes = {
    $popover: PropTypes.any
  }

  constructor (props: any, context: any) {
    super()
  }

  getChildContext = () => {
    return {
      $popover: this as any
    }
  }

  getArrow = (popper: HTMLElement) => {
    return popper.querySelector('.whc-popover__arrow')
  }

  getContent = () => {
    const {title, content, width, narrow} = this.props

    if (!content) {
      return null
    }

    return (
      <div
        {...this.rootProps(['whc-popover', {'whc-popover--narrow': narrow}])}
        style={{width}}
        onClick={this.onClickContent}>
        {title && (
          <div className='whc-popover__header'>{title}</div>
        )}
        <div className='whc-popover__content'>{content}</div>
        <div className='whc-popover__arrow'/>
      </div>
    )
  }

  onClickContent = (e: React.MouseEvent<any>) => {
    // todo: improve popover nest
    if (this.context.$popover) {
      e.nativeEvent.stopImmediatePropagation()
    }
  }

  render () {
    const children = this.props.children || ''
    return typeof children === 'string'
      ? React.createElement('span', {}, children)
      : React.cloneElement(React.Children.only(children))
  }
}
