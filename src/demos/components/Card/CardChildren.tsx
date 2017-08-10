import * as React from 'react'
import {Card} from '../../../index'

export default class CardChildren extends React.Component {

  render () {
    return (
      <div style={{background: '#eee', padding: '30px'}}>
        <Card footer='footer' style={{width: '300px'}}>
          content
        </Card>
      </div>
    )
  }
}
