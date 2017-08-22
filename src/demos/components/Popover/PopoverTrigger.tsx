import * as React from 'react'
import {Popover, Button} from '../../../components'

export default class PopoverTrigger extends React.Component {
  render () {
    return (
      <div>
        <Popover trigger='hover' content='content'>
          <Button>hover</Button>
        </Popover>
        <Popover trigger='click' content='content'>
          <Button>click</Button>
        </Popover>
      </div>
    )
  }
}
