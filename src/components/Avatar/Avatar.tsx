import * as React from 'react'
import Base from '../../libs/Base'
import './Avatar.less'

interface IAvatarProps {
  src?: string,
  size?: 'large' | 'small' | 'normal'
}

export default class Avatar extends Base<IAvatarProps> {

  static defaultProps = {
    src: '',
    size: 'normal'
  }

  render () {
    const {src, size} = this.props
    return (
      <div {...this.rootProps(['Avatar', `Avatar--${size}`])}>
        <img className='Avatar__img' src={src}/>
      </div>
    )
  }
}
