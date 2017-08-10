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
          {demo.name}
        </div>
        <div className='ComponentView__container'>
          <div className='ComponentView__sub-title'>示例</div>
          {demo.examples.map(({component, raw, doc}, index) => (
            <Example key={index} {...{component, raw, doc}}/>
          ))}
        </div>
      </div>
    )
  }

  renderGuide = () => {
    return (
      <div className='ComponentView'>
        guide
      </div>
    )
  }

  render () {
    const name = this.props.match.params.name
    const demo = demos.find((c) => c.name === name)
    
    return demo
      ? this.renderComponent(demo)
      : this.renderGuide()
  }
}