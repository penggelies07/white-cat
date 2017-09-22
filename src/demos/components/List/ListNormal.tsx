import * as React from 'react'
import {List} from '../../../components'

export default class ListNormal extends React.Component {
  render () {
    return (
      <div>
        <List>
          <List.Item>Apple</List.Item>
          <List.Item active>Banana</List.Item>
          <List.Item>Orange</List.Item>
          <List.Item>Pear</List.Item>
        </List>
      </div>
    )
  }
}
