import * as React from 'react'
import {Badge} from '../../../index'

export default class BadgeDot extends React.Component {

  render () {
    return (
      <div>
        <Badge type='primary' dot/>primary
        <Badge type='success' dot/>success
        <Badge type='warning' dot/>warning
        <Badge type='danger' dot/>danger
        <Badge type='gray' dot/>gray
      </div>
    )
  }
}
