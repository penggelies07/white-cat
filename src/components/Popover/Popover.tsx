import * as PropTypes from 'prop-types'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Base from '../../libs/Base'
import PopoverMenu from './PopoverMenu'
import Popper from 'popper.js'
import './Popover.less'

type placementType = 'auto' | 'top' | 'right' | 'bottom' | 'left'
  | 'auto-start' | 'top-start' | 'right-start' | 'bottom-start' | 'left-start'
  | 'auto-end' | 'top-end' | 'right-end' | 'bottom-end' | 'left-end'

interface IPopoverProps {
  title?: string,
  content?: React.ReactNode,
  visible?: boolean,
  trigger?: 'hover' | 'click',
  placement?: placementType,
  width?: string | number,
  onChange?: (visible: boolean) => void
}

interface IPopoverState {
  visible: boolean
}

export default class Popover extends Base<IPopoverProps, IPopoverState> {
  static Menu = PopoverMenu

  static defaultProps = {
    trigger: 'click',
    placement: 'bottom'
  }

  static childContextTypes = {
    popover: PropTypes.any
  }

  rootEl: HTMLElement
  popperEl: HTMLElement
  triggerEl: HTMLElement
  popper: Popper

  constructor (props: IPopoverProps) {
    super(props)
    
    this.state = {
      visible: !!props.visible
    }
  }

  getChildContext = () => {
    return {
      popover: this
    }
  }

  componentDidMount () {
    this.rootEl = ReactDOM.findDOMNode<HTMLElement>(this)
    this.triggerEl = ReactDOM.findDOMNode<HTMLElement>(this.refs.triggerEl)

    const {trigger} = this.props
    if (!this.triggerEl) {
      return
    }

    if (trigger === 'click') {
      this.triggerEl.addEventListener('click', () => {
        const visible = !this.state.visible
        if (visible) {
          this.show()
        } else {
          this.hide()
        }
      })
      document.addEventListener('click', ({target}: any) => {
        if (
        !this.rootEl || !this.triggerEl || !this.popperEl
        || this.rootEl.contains(target)
        || this.triggerEl.contains(target)
        || this.popperEl.contains(target)
        ) {
          return
        }
        this.hide()
      })
    } else if (trigger === 'hover') {
      this.rootEl.addEventListener('mouseenter', () => this.show())
      this.rootEl.addEventListener('mouseleave', () => this.hide())
    }
  }

  componentWillReceiveProps ({visible}: IPopoverProps) {
    if (visible !== undefined && visible !== this.state.visible) {
      this.setState({visible: !!visible})
    }
  }
  
  refPopperEl = (el: HTMLElement | null) => {
    if (el) {
      this.popperEl = el
      this.popper = new Popper(this.triggerEl, el, {
        placement: this.props.placement
      })
    } else if (this.popper) {
      this.popper.destroy()
      delete this.popper
      delete this.popperEl
    }
  }

  show = () => {
    this.setState({visible: true})
    if (this.props.onChange) {
      this.props.onChange(true)
    }
  }

  hide = () => {
    this.setState({visible: false})
    if (this.props.onChange) {
      this.props.onChange(false)
    }
  }

  getTriggerElement = (children: React.ReactNode) => {
    return typeof children === 'string'
      ? React.createElement('span', {ref: 'triggerEl'}, children)
      : React.cloneElement(React.Children.only(children), {ref: 'triggerEl'})
  }

  render () {
    const {title, content, width, children} = this.props
    const {visible} = this.state
    return (
      <span {...this.rootProps('whc-popover')}>
        {visible && (
          <div className='whc-popover__popper' style={{width}} ref={this.refPopperEl}>
            {title && <div className='whc-popover__popper-header'>{title}</div>}
            {content}
          </div>
        )}
        {this.getTriggerElement(children)}
      </span>
    )
  }
}
