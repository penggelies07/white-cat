import * as React from 'react'
import ComponentView from './ComponentView'
import SideBar from './SideBar'
import {Route, RouteComponentProps} from 'react-router'

export interface IComponentsViewProps extends RouteComponentProps<{}> {}

export default class ComponentsView extends React.Component<IComponentsViewProps> {

  constructor (props: IComponentsViewProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='ComponentsView'>
        <Route path='/components/:name?' component={SideBar}/>
        <Route path='/components/:name?' component={ComponentView}/>
      </div>
    )
  }
}