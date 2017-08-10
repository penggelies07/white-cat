import * as React from 'react'
import {Button} from '../../../index'

export default class ButtonLoading extends React.Component {

  render () {
    return (
      <div>
        <Button loading>加载中</Button>
      </div>
    )
  }
}
