import * as React from 'react'
import Base from '../../libs/Base'
import './Badge.less'

export interface IBadgeProps {
  count?: number,
  max?: number,
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'gray',
  dot?: boolean,
  offset?: {top?: string, right?: string}
}

export default class Badge extends Base<IBadgeProps> {
  render () {
    const {count = 0, max = 99, type = 'danger', dot, children, offset = {}} = this.props
    const text = count > max ? max + '+' : count

    const el = dot
      ? <span className='whc-badge__dot' style={offset}/>
      : count
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
