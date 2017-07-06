import * as React from 'react'
import {Button} from '../../../components'

export const title = `默认`

export const description = ``

interface IButtonNormalProps {}

interface IButtonNormalState {}

export default class ButtonNormal extends React.Component<IButtonNormalProps, IButtonNormalState> {

  constructor (props: IButtonNormalProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Button>按钮</Button>
      </div>
    )
  }
}
