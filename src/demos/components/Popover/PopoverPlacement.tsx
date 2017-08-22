import * as React from 'react'
import {Popover, Button} from '../../../components'

export default class PopoverPlacement extends React.Component {
  render () {
    return (
      <div>
        <div style={{marginBottom: '10px'}}>
          <Popover placement='top-start' content='top-start'><Button>click</Button></Popover>&nbsp;&nbsp;
          <Popover placement='top' content='top'><Button>click</Button></Popover>&nbsp;&nbsp;
          <Popover placement='top-end' content='top-end'><Button>click</Button></Popover>
        </div>
        <div style={{marginBottom: '10px'}}>
          <Popover placement='left-start' content='left-start'><Button>click</Button></Popover>&nbsp;&nbsp;
          <Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>&nbsp;&nbsp;
          <Popover placement='right-start' content='right-start'><Button>click</Button></Popover>
        </div>
        <div style={{marginBottom: '10px'}}>
          <Popover placement='left' content='left'><Button>click</Button></Popover>&nbsp;&nbsp;
          <Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>&nbsp;&nbsp;
          <Popover placement='right' content='right'><Button>click</Button></Popover>
        </div>
        <div style={{marginBottom: '10px'}}>
          <Popover placement='left-end' content='left-end'><Button>click</Button></Popover>&nbsp;&nbsp;
          <Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>&nbsp;&nbsp;
          <Popover placement='right-end' content='right-end'><Button>click</Button></Popover>
        </div>
        <div style={{marginBottom: '10px'}}>
          <Popover placement='bottom-start' content='bottom-start'><Button>click</Button></Popover>&nbsp;&nbsp;
          <Popover placement='bottom' content='bottom'><Button>click</Button></Popover>&nbsp;&nbsp;
          <Popover placement='bottom-end' content='bottom-end'><Button>click</Button></Popover>
        </div>
      </div>
    )
  }
}
