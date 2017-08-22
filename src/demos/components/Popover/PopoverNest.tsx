import * as React from 'react'
import {Popover, Button} from '../../../components'

export interface IPopoverNestState {
  count: number
}

export default class PopoverNest extends React.Component<{}, IPopoverNestState> {

  state = {
    count: 1
  }

  onAdd = () => {
    this.setState(({count}) => ({count: count + 1}))
  }

  render () {
    const {count} = this.state

    return (
      <div>
        <Popover content={(
          <div>
            <div>
              <Popover content={count}>
                <Button type='plain'>{count}</Button>
              </Popover>
            </div>
            <Button onClick={this.onAdd}>add</Button>
          </div>
        )}>
          <Button type='plain'>{count}</Button>
        </Popover>
        <Button onClick={this.onAdd}>add</Button>
      </div>
    )
  }
}
