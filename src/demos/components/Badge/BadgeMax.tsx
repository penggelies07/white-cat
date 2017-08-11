import * as React from 'react'
import {Badge} from '../../../index'

export default class BadgeMax extends React.Component {

  render () {
    return (
      <div>
        <Badge value={5} max={10}/>
        <Badge value={78} max={10}/>
        <Badge value={200} max={300}/>
      </div>
    )
  }
}
