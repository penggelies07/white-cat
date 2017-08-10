import * as React from 'react'
import {Button} from '../../../index'

export default class ButtonSize extends React.Component {

  render () {
    return (
      <div>
        <Button size='small'>small</Button>
        <Button>normal</Button>
        <Button size='large'>large</Button>
      </div>
    )
  }
}
