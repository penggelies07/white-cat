import * as React from 'react'
import {Card} from '../../../components'

interface ICardNormalProps {}

export default class CardNormal extends React.Component<ICardNormalProps> {

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
