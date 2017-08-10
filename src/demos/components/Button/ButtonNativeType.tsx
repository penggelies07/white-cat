import * as React from 'react'
import {Button} from '../../../index'

export default class ButtonNativeType extends React.Component {

  onSubmit = (e: any) => {
    e.preventDefault()
    console.log('submit')
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Button nativeType='submit'>提交</Button>
        </form>
      </div>
    )
  }
}
