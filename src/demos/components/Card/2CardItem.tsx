import * as React from 'react'
import {Card} from '../../../index'

export interface ICardItemProps {}

export default class CardItem extends React.Component<ICardItemProps> {

  render () {
    return (
      <div style={{background: '#eee', padding: '30px'}}>
        <Card style={{width: '300px'}} items={(
          <div>
            <Card.Item>item1</Card.Item>
            <Card.Item>item2</Card.Item>
            <Card.Item>item3</Card.Item>
          </div>
        )} footer='footer'>
          content
        </Card>
      </div>
    )
  }
}
