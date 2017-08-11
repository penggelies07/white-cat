import * as React from 'react'
import {Badge} from '../../../index'

export default class BadgeType extends React.Component {

  render () {
    return (
      <div>
        <Badge type='primary' value={1}/>primary
        <Badge type='success' value={2}/>success
        <Badge type='warning' value={3}/>warning
        <Badge type='danger' value={4}/>danger
        <Badge type='gray' value={5}/>gray
      </div>
    )
  }
}
