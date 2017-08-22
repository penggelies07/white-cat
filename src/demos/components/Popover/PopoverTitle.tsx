import * as React from 'react'
import {Popover, Button} from '../../../components'

export default class PopoverTitle extends React.Component {
  render () {
    return (
      <Popover title={(
        <div>
          title
        </div>
      )} content={(
        <div>
          content
        </div>
      )}>
        <Button>target</Button>
      </Popover>
    )
  }
}
