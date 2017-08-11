import * as React from 'react'
import Base from '../../libs/Base'
import './Badge.less'

export interface IBadgeProps {
  value?: number | string,
  max?: number,
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'gray',
  dot?: boolean,
  offset?: {top?: string, right?: string}
}

export default class Badge extends Base<IBadgeProps> {
  render () {
    const {value = 0, max = 99, type = 'danger', dot, children, offset = {}} = this.props
    const text = typeof value === 'number'
      ? (value > max ? max + '+' : value > 0 ? value : '')
      : value.trim()

    const el = dot
      ? <span className='whc-badge__dot' style={offset}/>
      : text
      ? <span className='whc-badge__count' style={offset}>{text}</span>
      : null

    return (
      <span {...this.rootProps(['whc-badge', `whc-badge--${type}`, {dot, float: !!children}])}>
        {children}
        {el}
      </span>
    )
  }
}
