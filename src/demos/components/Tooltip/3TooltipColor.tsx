import * as React from 'react'
import {Tooltip} from '../../../index'

export interface ITooltipColorProps {}

export default class TooltipColor extends React.Component<ITooltipColorProps> {

  render () {
    return (
      <div>
        <div>
          <Tooltip content='light' color='light'>light</Tooltip>&nbsp;&nbsp;
          <Tooltip content='dark' color='dark'>dark</Tooltip>&nbsp;&nbsp;
        </div>
      </div>
    )
  }
}
