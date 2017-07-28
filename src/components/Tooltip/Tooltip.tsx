import * as React from 'react'
import Base from '../../libs/Base'
import './Tooltip.less'

type placementTypes = 'top' | 'top-start' | 'top-end'
  | 'bottom' | 'bottom-start' | 'bottom-end'
  | 'left' | 'left-start' | 'left-end'
  | 'right' | 'right-start' | 'right-end'

interface ITooltipProps {
  content?: React.ReactNode,
  placement?: placementTypes,
  color?: 'dark' | 'light'
}

export default class Tooltip extends Base<ITooltipProps> {

  static defaultProps = {
    placement: 'top',
    color: 'dark'
  }

  constructor (props: ITooltipProps) {
    super(props)
    this.state = {}
  }

  render () {
    const {content, children} = this.props
    const color = 'whc-tooltip--' + this.props.color
    const placement = 'whc-tooltip--' + this.props.placement
    
    return (
      <span {...this.rootProps(['whc-tooltip', color, placement])}>
        {children}
        {content && (
          <div className='whc-tooltip__content'>
            {content}
          </div>
        )}
      </span>
    )
  }
}
