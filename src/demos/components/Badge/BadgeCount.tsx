import * as React from 'react'
import {Badge} from '../../../index'

export default class BadgeCount extends React.Component {

  render () {
    return (
      <div>
        <Badge count={5}/>
        <Badge count={78}/>
        <Badge count={200}/>
      </div>
    )
  }
}
