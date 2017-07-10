import * as React from 'react'
import {Avatar} from '../../../components'

declare const require: any

const img = require('./avatar.jpg')

export const title = `尺寸`

export const description = `多种按钮尺寸。`

interface IAvatarTypeProps {}

export default class AvatarType extends React.Component<IAvatarTypeProps> {

  render () {
    return (
      <div>
        <div>
          <Avatar src={img} size='small'>small</Avatar>
        </div>
        <div style={{marginTop: '8px'}}>
          <Avatar src={img}>normal</Avatar>
        </div>
        <div style={{marginTop: '8px'}}>
          <Avatar src={img} size='large'>large</Avatar>
        </div>
      </div>
    )
  }
}
