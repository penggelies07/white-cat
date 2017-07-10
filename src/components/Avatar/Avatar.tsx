import * as React from 'react'
import Base from '../../libs/Base'
import './Avatar.less'

interface IAvatarProps {
  src?: string,
  size?: 'small' | 'normal' | 'large'
}

export default class Avatar extends Base<IAvatarProps> {

  static defaultProps = {
    src: '',
    size: 'normal'
  }

  render () {
    const {src, size} = this.props
    return (
      <div {...this.rootProps(['whc-avatar', `whc-avatar--${size}`])}>
        <img className='whc-avatar__img' src={src}/>
      </div>
    )
  }
}
