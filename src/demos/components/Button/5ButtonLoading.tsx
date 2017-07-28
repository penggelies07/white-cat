import * as React from 'react'
import {Button} from '../../../components'

interface IButtonLoadingProps {}

export default class ButtonLoading extends React.Component<IButtonLoadingProps> {

  render () {
    return (
      <div>
        <Button loading>加载中</Button>
      </div>
    )
  }
}
