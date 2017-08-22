import * as React from 'react'
import {Popover, Button} from '../../../components'

export interface IPopoverVisibleState {
  visible: boolean
}

export default class PopoverVisible extends React.Component<{}, IPopoverVisibleState> {

  state = {
    visible: false
  }

  onShow = () => {
    this.setState({visible: true})
  }

  onHide = () => {
    this.setState({visible: true})
  }

  onChange = (visible: boolean) => {
    this.setState({visible})
  }

  render () {
    const {visible} = this.state

    return (
      <div>
        <Popover visible={visible} content='content' onChange={this.onChange}>
          <Button type='plain'>target</Button>
        </Popover>
        {visible ? <Button onClick={this.onHide}>hide</Button> : <Button onClick={this.onShow}>show</Button>}
      </div>
    )
  }
}
