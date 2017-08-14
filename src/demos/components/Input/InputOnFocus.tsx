import * as React from 'react'
import {Input} from '../../../components'

export default class InputOnFocus extends React.Component {

  onInputFocus = () => {
    console.log('onInputFocus')
  }

  render () {
    return (
      <div>
        <Input onFocus={this.onInputFocus}/>
      </div>
    )
  }
}
