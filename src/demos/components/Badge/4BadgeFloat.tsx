import * as React from 'react'
import {Badge, Button, Icon} from '../../../index'

export interface IBadgeProps {}

export default class BadgeFloat extends React.Component<IBadgeProps> {

  render () {
    return (
      <div>
        <Badge count={6}>
          <Button type='text' icon='bell'>消息</Button>
        </Badge>
        <Badge dot>
          <Icon name='download'>新版本</Icon>
        </Badge>
      </div>
    )
  }
}
