import * as React from 'react'
import {Popover, Button} from '../../../components'

export default class PopoverWidth extends React.Component {
  render () {
    return (
      <Popover content='content' width='300px'>
        <Button>click</Button>
      </Popover>
    )
  }
}
