import * as React from 'react'
import {Button} from '../../../components'

interface IButtonSizeProps {}

export default class ButtonSize extends React.Component<IButtonSizeProps> {

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
