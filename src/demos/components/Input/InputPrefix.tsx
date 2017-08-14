import * as React from 'react'
import {Input, Icon} from '../../../components'

export default class InputPrefix extends React.Component {
  render () {
    return (
      <div>
        <Input prefix={<Icon name='search'/>}/>
      </div>
    )
  }
}
