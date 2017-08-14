import * as React from 'react'
import {Input} from '../../../components'

export default class InputType extends React.Component {
  render () {
    return (
      <div>
        <p>text:</p>
        <Input type='text'/>
        <p>password:</p>
        <Input type='password'/>
      </div>
    )
  }
}
