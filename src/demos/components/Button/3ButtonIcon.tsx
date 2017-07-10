import * as React from 'react'
import {Button} from '../../../components'

export const title = `图标`

export const description = `支持图标。`

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
