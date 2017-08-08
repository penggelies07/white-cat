import * as React from 'react'
import {Badge} from '../../../index'

export interface IBadgeProps {}

export default class BadgeCount extends React.Component<IBadgeProps> {

  render () {
    return (
      <div>
        <div>
          <Badge count={5}/>
          <Badge count={78}/>
          <Badge count={200}/>
        </div>
        <div style={{marginTop: '20px'}}>
          <Badge count={5} max={10}/>
          <Badge count={78} max={10}/>
          <Badge count={200} max={300}/>
        </div>
      </div>
    )
  }
}
