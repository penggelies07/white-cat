import * as React from 'react'
import Base from '../../libs/Base'
import './Icon.less'

export interface IIconProps {
  name?: string,
  spinning?: boolean,
  fit?: boolean,
  clickable?: boolean,
  onClick?: React.MouseEventHandler<any>
}

export default class Icon extends Base<IIconProps> {
  render () {
    const {name, children, onClick} = this.props
    const fit = this.props.fit ? ' fa-fw' : ''
    const spin = this.props.spinning ? ' fa-spin' : ''
    const clickable = !!onClick || this.props.clickable

    return (
      name || children
        ? (
          <span {...this.rootProps(['whc-icon', {clickable}])} onClick={onClick}>
            {name && <i className={`fa fa-${name}${spin}${fit}`}/>}
            {children !== undefined && <span className='whc-icon__text'>{children}</span>}
          </span>
        )
        : null
    )
  }
}