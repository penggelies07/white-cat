import * as React from 'react'
import {Input} from '../../../components'

export default class InputOnBlur extends React.Component {

  onInputOnBlur = () => {
    console.log('onInputOnBlur')
  }

  render () {
    return (
      <div>
        <Input onBlur={this.onInputOnBlur}/>
      </div>
    )
  }
}
