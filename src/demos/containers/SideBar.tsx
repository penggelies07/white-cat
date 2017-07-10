import * as React from 'react'
import components from '../components'
import {Link} from 'react-router-dom'
import {RouteComponentProps} from 'react-router'
import * as cn from 'classnames'

interface ISideBarProps extends RouteComponentProps<{name: string}> {}

export default class SideBar extends React.Component<ISideBarProps> {
  render () {
    const name = this.props.match.params.name
    console.log('name', name)
    return (
      <div className='SideBar'>
        <Link to={`/components`}>
          <div className={cn('SideBar__item', {active: !name})}>
            安装指引
          </div>
        </Link>
        {components.map((component: any) => (
          <Link key={component.name} to={`/components/${component.name}`}>
            <div className={cn('SideBar__item', {active: name === component.name})}>
              {component.name}
            </div>
          </Link>
        ))}
      </div>
    )
  }
}