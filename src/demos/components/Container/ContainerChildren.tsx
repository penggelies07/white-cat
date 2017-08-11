import * as React from 'react'
import {Container} from '../../../components'

export default class ContainerChildren extends React.Component {
  render () {
    return (
      <div>
        <Container style={{background: '#eee', height: '100px'}}/>
      </div>
    )
  }
}
