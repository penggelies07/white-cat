import * as React from 'react'
import {Button} from '../../../index'

export interface IButtonDisabledProps {}

export default class ButtonDisabled extends React.Component<IButtonDisabledProps> {

  render () {
    return (
      <div>
        <Button disabled>禁用</Button>
        <Button disabled type='primary'>禁用</Button>
        <Button disabled type='success'>禁用</Button>
        <Button disabled type='warning'>禁用</Button>
        <Button disabled type='danger'>禁用</Button>
        <Button disabled type='info'>禁用</Button>
        <Button disabled type='text'>禁用</Button>
      </div>
    )
  }
}
