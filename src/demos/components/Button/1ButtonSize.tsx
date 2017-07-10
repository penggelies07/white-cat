import * as React from 'react'
import {Button} from '../../../components'

export const title = `尺寸`

export const description = `多种按钮尺寸。`

interface IButtonTypeProps {}

export default class ButtonType extends React.Component<IButtonTypeProps> {

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
