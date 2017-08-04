import * as React from 'react'
import {Tooltip, Button} from '../../../index'

export interface ITooltipPlacementProps {}

export default class TooltipPlacement extends React.Component<ITooltipPlacementProps> {

  render () {
    return (
      <div>
        <div style={{marginBottom: '10px'}}>
          <Tooltip placement='top-start' content='top-start'><Button>hover</Button></Tooltip>&nbsp;&nbsp;
          <Tooltip placement='top' content='top'><Button>hover</Button></Tooltip>&nbsp;&nbsp;
          <Tooltip placement='top-end' content='top-end'><Button>hover</Button></Tooltip>
        </div>
        <div style={{marginBottom: '10px'}}>
          <Tooltip placement='left-start' content='left-start'><Button>hover</Button></Tooltip>&nbsp;&nbsp;
          <Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>&nbsp;&nbsp;
          <Tooltip placement='right-start' content='right-start'><Button>hover</Button></Tooltip>
        </div>
        <div style={{marginBottom: '10px'}}>
          <Tooltip placement='left' content='left'><Button>hover</Button></Tooltip>&nbsp;&nbsp;
          <Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>&nbsp;&nbsp;
          <Tooltip placement='right' content='right'><Button>hover</Button></Tooltip>
        </div>
        <div style={{marginBottom: '10px'}}>
          <Tooltip placement='left-end' content='left-end'><Button>hover</Button></Tooltip>&nbsp;&nbsp;
          <Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>&nbsp;&nbsp;
          <Tooltip placement='right-end' content='right-end'><Button>hover</Button></Tooltip>
        </div>
        <div style={{marginBottom: '10px'}}>
          <Tooltip placement='bottom-start' content='bottom-start'><Button>hover</Button></Tooltip>&nbsp;&nbsp;
          <Tooltip placement='bottom' content='bottom'><Button>hover</Button></Tooltip>&nbsp;&nbsp;
          <Tooltip placement='bottom-end' content='bottom-end'><Button>hover</Button></Tooltip>
        </div>
      </div>
    )
  }
}
