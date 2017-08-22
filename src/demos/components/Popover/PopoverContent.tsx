import * as React from 'react'
import {Popover, Button} from '../../../components'

export default class PopoverContent extends React.Component {
  render () {
    return (
      <Popover content={(
        <div>
          content content content content
        </div>
      )}>
        <Button>target</Button>
      </Popover>
    )
  }
}
