import * as React from 'react'
import {Button} from '../../../components'

export const title = `类型`

export const description = `多种按钮样式。`

interface IButtonTypeProps {}

export default class ButtonType extends React.Component<IButtonTypeProps> {

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
