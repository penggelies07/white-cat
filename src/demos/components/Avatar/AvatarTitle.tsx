import * as React from 'react'
import {Avatar} from '../../../index'

declare const require: any
const img = require('./avatar.jpg')

export default class AvatarType extends React.Component {

  render () {
    return (
      <div>
        <div>
          <Avatar src={img} title='title'>hover</Avatar>
        </div>
      </div>
    )
  }
}
