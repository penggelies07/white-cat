import * as React from 'react'
import demos, {IDemo} from '../components'
import Example from '../commons/Example'
import {RouteComponentProps} from 'react-router'

export interface IComponentViewProps extends RouteComponentProps<{name: string}> {}

export default class ComponentView extends React.Component<IComponentViewProps> {

  renderComponent = (demo: IDemo) => {
    return (
      <div className='ComponentView'>
        <div className='ComponentView__header'>
          {demo.title}
        </div>
        <div className='ComponentView__container'>
          {demo.groups.map((group) => (
            <div className='ComponentView__segment' key={group.title}>
              <div className='ComponentView__segment-title'># {group.title}</div>
              {group.examples.map(({component, raw, description}, index) => (
                <Example key={index} {...{component, raw, description}}/>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  renderGuide = () => {
    return (
      <div className='ComponentView'>
        <h1>说明</h1>
        <h2>配色</h2>
        <div className='ComponentView__theme'>
          <div className='ComponentView__theme-slot color-primary'/>
          <div className='ComponentView__theme-slot color-success'/>
          <div className='ComponentView__theme-slot color-warning'/>
          <div className='ComponentView__theme-slot color-danger'/>
          <br/>
          <div className='ComponentView__theme-slot color-black-base'/>
          <div className='ComponentView__theme-slot color-white-base'/>
          <br/>
          <div className='ComponentView__theme-slot color-black'/>
          <div className='ComponentView__theme-slot color-black-light'/>
          <div className='ComponentView__theme-slot color-black-lighter'/>
          <br/>
          <div className='ComponentView__theme-slot color-gray-darker'/>
          <div className='ComponentView__theme-slot color-gray-dark'/>
          <div className='ComponentView__theme-slot color-gray'/>
          <div className='ComponentView__theme-slot color-gray-light'/>
          <div className='ComponentView__theme-slot color-gray-lighter'/>
        </div>
      </div>
    )
  }

  render () {
    const name = this.props.match.params.name
    const demo = demos.find((d) => d.title === name)
    
    return demo
      ? this.renderComponent(demo)
      : this.renderGuide()
  }
}
