import * as React from 'react'
import {Avatar} from '../../../index'

declare const require: any
const img = require('./avatar.jpg')

export default class AvatarSize extends React.Component {

  render () {
    return (
      <div>
        <div>
          <Avatar src={img} size='small'/>
        </div>
        <div style={{marginTop: '8px'}}>
          <Avatar src={img}/>
        </div>
        <div style={{marginTop: '8px'}}>
          <Avatar src={img} size='large'/>
        </div>
      </div>
    )
  }
}
