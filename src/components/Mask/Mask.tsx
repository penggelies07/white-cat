import * as React from 'react'
import * as Transition from 'react-transition-group/CSSTransitionGroup'
import Base from '../../libs/Base'
import './Mask.less'

interface IMaskProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  visible?: boolean,
  fixed?: boolean
}

export default class Mask extends Base<IMaskProps> {

  render () {
    const {visible, fixed, children} = this.props
    return (
      <Transition
        transitionName='Mask'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {
          !!visible
          ? (
              <div {...this.rootProps(['Mask', {fixed}])} onClick={this.props.onClick}>
                {children && <div className='Mask__content'>{children}</div>}
              </div>
            )
          : null
        }
      </Transition>
    )
  }
}
