import * as React from 'react'
import {Input} from '../../../components'

export default class InputSize extends React.Component {
  render () {
    return (
      <div>
        <Input size='small' placeholder='small'/>
        <br/><br/>
        <Input size='normal' placeholder='normal'/>
        <br/><br/>
        <Input size='large' placeholder='large'/>
      </div>
    )
  }
}
