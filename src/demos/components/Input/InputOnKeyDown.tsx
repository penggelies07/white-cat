import * as React from 'react'
import {Input} from '../../../components'

export default class InputOnKeyDown extends React.Component {

  onInputKeyDown = () => {
    console.log('onInputKeyDown')
  }

  render () {
    return (
      <div>
        <Input onKeyDown={this.onInputKeyDown}/>
      </div>
    )
  }
}
