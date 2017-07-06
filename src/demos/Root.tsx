import * as React from 'react'
import ComponentsView from './containers/ComponentsView'
import HomeView from './containers/HomeView'
import TopBar from './containers/TopBar'
import {Route} from 'react-router-dom'
import './styles.less'
import './components'

interface IRootProps {}

interface IRootState {}

export default class Root extends React.Component<IRootProps, IRootState> {

  constructor (props: IRootProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='Root'>
        <Route path='/:tab?' component={TopBar}/>
        <div className='Root__container'>
          <Route path='/' exact component={HomeView}/>
          <Route path='/components' component={ComponentsView}/>
        </div>
      </div>
    )
  }
}
