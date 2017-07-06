import * as React from 'react'
import components, {IComponentItem} from '../components'
import Example from '../commons/Example'
import {RouteComponentProps} from 'react-router'

interface IComponentViewProps extends RouteComponentProps<{name: string}> {}

export default class ComponentView extends React.Component<IComponentViewProps> {

  renderComponent = (component: IComponentItem) => {
    return (
      <div className='ComponentView'>
        <div className='ComponentView__header'>
          {component.name}
        </div>
        <div className='ComponentView__container'>
          <div className='ComponentView__sub-title'>示例</div>
          {component.demos.map(({component: demo, raw, title, description}, index) => (
            <Example key={index} {...{demo, raw, title, description}}/>
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
    const component = components.find((c) => c.name === name)
    
    return component
      ? this.renderComponent(component)
      : this.renderGuide()
  }
}