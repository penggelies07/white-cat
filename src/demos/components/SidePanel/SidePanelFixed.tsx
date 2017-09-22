import * as React from 'react'
import {Button, SidePanel} from '../../../index'

export interface ISidePanelFixedState {
  visible: boolean
}

export default class SidePanelFixed extends React.Component<ISidePanelFixedState> {
  state = {
    visible: false
  }

  onClick = () => {
    this.setState({visible: !this.state.visible})
  }

  render () {
    const {visible} = this.state
    return (
      <div>
        <Button onClick={this.onClick}>{visible ? '关闭' : '开启'}</Button>&nbsp;&nbsp;

        <SidePanel
          width='300px'
          visible={visible}
        />
      </div>
    )
  }
}
