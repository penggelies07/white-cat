import * as React from 'react'
import {Avatar} from '../../../index'

declare const require: any
const img = require('./avatar.jpg')

export default class AvatarSrc extends React.Component {

  render () {
    return (
      <div>
        <Avatar src={img}/>
      </div>
    )
  }
}
