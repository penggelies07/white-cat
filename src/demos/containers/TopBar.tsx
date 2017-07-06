import * as cn from 'classnames'
import * as React from 'react'
import {RouteComponentProps} from 'react-router'
import {Link} from 'react-router-dom'

interface ITopBarProps extends RouteComponentProps<{tab: string}> {}

export default class TopBar extends React.Component<ITopBarProps> {

  isSelected = (tab: string, exact?: boolean) => {
    return exact
      ? this.props.match.url === tab
      : this.props.match.url.startsWith(tab)
  }

  render () {
    return (
      <div className='TopBar'>
        <div className='TopBar__header'>
          <span>(Logo)</span>
          &nbsp;&nbsp;
          <span>White Cat</span>
        </div>
        <div className='TopBar__items'>
          <Link to='/'>
            <div className={cn('TopBar__item', {active: this.isSelected('/', true)})}>首页</div>
          </Link>
          <Link to='/components/Button'>
            <div className={cn('TopBar__item', {active: this.isSelected('/components')})}>组件</div>
          </Link>
        </div>
      </div>
    )
  }
}