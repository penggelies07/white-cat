import * as React from 'react'
import {Input} from '../../../components'

export interface IInputOnChangeState {
  value: string
}

export default class InputOnChange extends React.Component<IInputOnChangeState> {

  state = {
    value: 'test'
  }

  onValueChange = (e: any, value: string) => {
    this.setState({value})
  }

  render () {
    const {value} = this.state

    return (
      <div>
        <p>{value}</p>
        <Input value={value} onChange={this.onValueChange}/>
      </div>
    )
  }
}
