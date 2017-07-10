import * as React from 'react'
import Base from '../../libs/Base'
import './ScrollBar.less'

interface IPoint {
  x: number,
  y: number
}

interface IScrollBarProps extends React.HTMLProps<HTMLDivElement> {
  direction?: string,
  stopPropagation?: boolean,
  dragToScroll?: boolean
}

interface IScrollBarState {
  dragging: boolean
}

export default class ScrollBar extends Base<IScrollBarProps, IScrollBarState> {
  static defaultProps = {
    direction: 'vertical'
  }

  state = {
    dragging: false
  }

  el: HTMLDivElement
  startPosition: IPoint
  startPoint: IPoint

  saveEl = (el: HTMLDivElement) => {
    this.el = el
  }

  componentDidMount () {
    this.el.addEventListener('mousewheel', this.onMouseWheel)
    if (this.props.dragToScroll) {
      window.addEventListener('mousedown', this.onMouseDown)
      window.addEventListener('mousemove', this.onMouseMove)
      window.addEventListener('mouseup', this.onMouseUp)
    }
  }

  componentWillUnmount () {
    if (this.el) {
      this.el.removeEventListener('mousewheel', this.onMouseWheel)
      if (this.props.dragToScroll) {
        window.removeEventListener('mousedown', this.onMouseDown)
        window.removeEventListener('mousemove', this.onMouseMove)
        window.removeEventListener('mouseup', this.onMouseUp)
      }
    }
  }
  
  onMouseWheel = (e: any) => {
    if (e.target !== this.el) {
      return
    }
    const {direction, stopPropagation} = this.props
    if (direction === 'horizontal') {
      this.el.scrollLeft += -e.wheelDelta
    }
    if (stopPropagation) {
      e.stopPropagation()
    }
  }
  
  onMouseDown: any = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== this.el) {
      return
    }
    this.startPosition = {
      x: this.el.scrollLeft,
      y: this.el.scrollHeight
    }
    this.startPoint = {
      x: e.clientX,
      y: e.clientY
    }
    document.body.style.cursor = 'move'
    document.body.style.userSelect = 'none'
    this.setState({dragging: true})
  }

  onMouseMove: any = (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.state.dragging) {
      const direction = this.props.direction
      const x = e.clientX
      const y = e.clientY
      if (direction === 'horizontal') {
        this.el.scrollLeft = this.startPosition.x - (x - this.startPoint.x)
      } else {
        this.el.scrollLeft = this.startPosition.y - (y - this.startPoint.y)
      }
    }
  }

  onMouseUp: any = (e: React.MouseEvent<HTMLDivElement>) => {
    document.body.style.cursor = null
    document.body.style.userSelect = null
    this.setState({dragging: false})
  }

  scrollToEnd = () => {
    if (this.el) {
      const {direction} = this.props
      if (direction === 'horizontal') {
        const {scrollWidth, clientWidth} = this.el
        this.el.scrollLeft = scrollWidth - clientWidth
      } else {
        const {scrollHeight, clientHeight} = this.el
        this.el.scrollTop = scrollHeight - clientHeight
      }
    }
  }

  render () {
    const {className, style, direction, stopPropagation, dragToScroll, ...rest} = this.props
    const {dragging} = this.state

    return (
      <div ref={this.saveEl} {...this.rootProps(['ScrollBar', 'ScrollBar--' + direction, {dragging}])} {...rest}/>
    )
  }
}
