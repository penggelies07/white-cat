import * as React from 'react'
import {Menu, Icon} from '../../../components'

export default class MenuNormal extends React.Component {
  render () {
    return (
      <div>
        <Menu title='Actions'>
          <Menu.Item><Icon name='plus'>Add</Icon></Menu.Item>
          <Menu.Item><Icon name='pencil'>Edit</Icon></Menu.Item>
          <Menu.Item><Icon name='trash'>Remove</Icon></Menu.Item>
        </Menu>
      </div>
    )
  }
}
