import * as React from 'react'
import Base from '../../libs/Base'
import Transition from 'react-transition-group/CSSTransition'
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
        classNames='whc-mask'
        timeout={{enter: 300, exit: 300}}>
        {
          !!visible
            ? (
                <div {...this.rootProps(['whc-mask', {fixed}])} onClick={this.props.onClick}>
                  {children && <div className='whc-mask__content'>{children}</div>}
                </div>
              )
            : null
        }
      </Transition>
    )
  }
}
