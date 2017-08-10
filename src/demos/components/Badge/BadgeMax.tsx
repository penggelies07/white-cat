import * as React from 'react'
import {Badge} from '../../../index'

export default class BadgeMax extends React.Component {

  render () {
    return (
      <div>
        <Badge count={5} max={10}/>
        <Badge count={78} max={10}/>
        <Badge count={200} max={300}/>
      </div>
    )
  }
}
