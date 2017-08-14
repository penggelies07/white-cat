import * as React from 'react'
import {Input, Icon} from '../../../components'

export default class InputSuffix extends React.Component {
  render () {
    return (
      <div>
        <Input suffix={<Icon name='search'/>}/>
      </div>
    )
  }
}
