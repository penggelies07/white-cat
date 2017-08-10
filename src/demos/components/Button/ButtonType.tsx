import * as React from 'react'
import {Button} from '../../../index'

export default class ButtonType extends React.Component {

  render () {
    return (
      <div>
        <Button>default</Button>
        <Button type='primary'>primary</Button>
        <Button type='success'>success</Button>
        <Button type='warning'>warning</Button>
        <Button type='danger'>danger</Button>
        <Button type='info'>info</Button>
        <Button type='text'>text</Button>
      </div>
    )
  }
}