import * as React from 'react'
import {Badge, Button} from '../../../index'

export default class BadgeOffset extends React.Component {

  render () {
    return (
      <div>
        <Badge count={6} offset={{top: '10px', right: '10px'}}>
          <Button icon='bell'>消息</Button>
        </Badge>
      </div>
    )
  }
}