import * as React from 'react'
import {Badge} from '../../../index'

export interface IBadgeProps {}

export default class BadgeType extends React.Component<IBadgeProps> {

  render () {
    return (
      <div>
        <Badge type='primary' count={1}/>primary
        <Badge type='success' count={2}/>success
        <Badge type='warning' count={3}/>warning
        <Badge type='danger' count={4}/>danger
        <Badge type='gray' count={5}/>gray
      </div>
    )
  }
}
