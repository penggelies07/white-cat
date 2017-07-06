import * as React from 'react'
import {RouteComponentProps} from 'react-router'

interface IHomeViewProps extends RouteComponentProps<{}> {}

export default class HomeView extends React.Component<IHomeViewProps> {

  render () {
    return (
      <div className='HomeView'>
        home
      </div>
    )
  }
}