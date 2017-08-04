import * as React from 'react'
import {Button} from '../../../index'

export interface IButtonIconProps {}

export default class ButtonIcon extends React.Component<IButtonIconProps> {

  render () {
    return (
      <div>
        <Button full>100%宽度</Button>
      </div>
    )
  }
}
