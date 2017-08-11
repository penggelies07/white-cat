import * as React from 'react'
import {Button} from '../../../index'

export default class ButtonIcon extends React.Component {

  render () {
    return (
      <div>
        <Button.Group full>
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </Button.Group>
        <br/>
        <Button.Group full>
          <Button type='basic'>one</Button>
          <Button type='basic'>two</Button>
          <Button type='basic'>three</Button>
        </Button.Group>
      </div>
    )
  }
}
