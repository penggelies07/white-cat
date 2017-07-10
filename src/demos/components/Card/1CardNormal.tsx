import * as React from 'react'
import {Card} from '../../../components'

export const title = `卡片`

export const description = `支持footer属性`

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
