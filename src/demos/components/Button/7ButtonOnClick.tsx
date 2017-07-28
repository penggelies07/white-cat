import * as React from 'react'
import {Button} from '../../../components'

interface IButtonOnClickProps {}

export default class ButtonOnClick extends React.Component<IButtonOnClickProps> {

  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
  }

  onClickPromise = (e: any) => {
    return new Promise((resolve) => {
      setTimeout(function () {
        console.log(e)
        resolve()
      }, 2000)
    })
  }

  render () {
    return (
      <div>
        <Button onClick={this.onClick}>点击</Button>
        <Button onClick={this.onClickPromise}>Promise</Button>
      </div>
    )
  }
}
