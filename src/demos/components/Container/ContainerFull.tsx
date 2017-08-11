import * as React from 'react'
import {Container} from '../../../components'

export default class ContainerFull extends React.Component {
  render () {
    return (
      <div style={{height: 200}}>
        <Container full style={{background: '#eee'}}/>
      </div>
    )
  }
}
