import * as React from 'react'
import Base from '../../libs/Base'
import './Tag.less'

const presetColors = ['gray', 'primary', 'success', 'warning', 'danger']

export interface ITagProps {
  size?: 'small' | 'normal' | 'large',
  closable?: boolean,
  clickable?: boolean,
  rounded?: boolean,
  color?: 'gray' | 'primary' | 'success' | 'warning' | 'danger' | string,
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onClose?: React.MouseEventHandler<HTMLSpanElement>
}

export interface ITagState {}

export default class Tag extends Base<ITagProps, ITagState> {

  static defaultProps = {
    size: 'normal',
    color: 'gray'
  }

  constructor (props: ITagProps) {
    super(props)
    this.state = {}
  }

  onClose = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    if (this.props.onClose) {
      this.props.onClose(e)
    }
  }

  render () {
    const {closable, rounded, color, size, children, onClick} = this.props
    const clickable = !!this.props.clickable || !!onClick
    let colorType: any = false
    let colorStyle = {}
    if (color && presetColors.indexOf(color) > -1) {
      colorType = color
    } else {
      colorStyle = {background: color}
    }
    return (
      <div
        {...this.rootProps(['whc-tag', {closable, clickable, rounded}, colorType, size], colorStyle)}
        onClick={onClick}>
        {children}
        {closable && <span className='whc-tag__close' onClick={this.onClose}>×</span>}
      </div>
    )
  }
}
