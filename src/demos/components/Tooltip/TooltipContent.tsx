import * as React from 'react'
import {Tooltip} from '../../../index'

export interface ITooltipContentProps {}

export default class TooltipContent extends React.Component<ITooltipContentProps> {

  render () {
    return (
      <div style={{padding: '50px'}}>
        <div>
          <Tooltip content='内容'>hover</Tooltip>
        </div>
        <div>
          <Tooltip content={(
            <div>
              内容内容内容内容内容内容内容内容内容内容内容内容<br/>
              内容内容内容内容内容内容内容<br/>
              内容内容内容内容内容内容内容内容内容内容
            </div>
          )}>hover</Tooltip>
        </div>
      </div>
    )
  }
}
