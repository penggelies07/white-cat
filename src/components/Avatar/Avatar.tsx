import * as React from 'react'
import Base from '../../libs/Base'
import Tooltip from '../Tooltip'
import './Avatar.less'

export interface IAvatarProps {
  src?: string,
  title?: string,
  size?: 'small' | 'normal' | 'large'
}

export default class Avatar extends Base<IAvatarProps> {

  static defaultProps = {
    src: '',
    size: 'normal'
  }

  render () {
    const {src, title, size} = this.props
    return (
      <div {...this.rootProps(['whc-avatar', `whc-avatar--${size}`])}>
        <Tooltip content={title}>
          <img className='whc-avatar__img' src={src}/>
        </Tooltip>
      </div>
    )
  }
}
