import * as React from 'react'
import {Badge} from '../../../index'

export default class BadgeValue extends React.Component {

  render () {
    return (
      <div>
        <p>
          <Badge value={5}/>
          <Badge value={78}/>
          <Badge value={200}/>
        </p>
        <p>
          <Badge value='!'/>
          <Badge value='new'/>
          <Badge value='hot'/>
        </p>
      </div>
    )
  }
}
