import * as React from 'react'
import {Input} from '../../../components'

export interface IInputValueState {
  value: string
}

export default class InputValue extends React.Component<{}, IInputValueState> {
  
  state = {
    value: 'default'
  }
  
  render () {
    const {value} = this.state

    return (
      <div>
        <p>{value}</p>
        <Input value={value}/>
      </div>
    )
  }
}
