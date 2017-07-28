import * as React from 'react'
import {Button} from '../../../components'

interface IButtonIconProps {}

export default class ButtonIcon extends React.Component<IButtonIconProps> {

  render () {
    return (
      <div>
        <Button icon='user'>图标</Button>
      </div>
    )
  }
}
