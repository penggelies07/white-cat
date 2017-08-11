import * as React from 'react'
import {Container} from '../../../components'

export default class ContainerXs extends React.Component {
  render () {
    return (
      <div>
        <Container xs='fixed' style={{background: '#eee', height: '50px'}}/>
        <br/>
        <Container xs='auto' style={{background: '#eee', height: '50px'}}/>
        <br/>
        <Container xs={200} style={{background: '#eee', height: '50px'}}/>
      </div>
    )
  }
}
