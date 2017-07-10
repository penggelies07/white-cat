import * as React from 'react'
import {Card} from '../../../components'

export const title = `卡片`

export const description = `支持footer属性`

interface ICardNormalProps {}

export default class CardNormal extends React.Component<ICardNormalProps> {

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
