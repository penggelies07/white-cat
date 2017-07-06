import * as React from 'react'

interface IExampleProps {
  demo: React.ComponentClass,
  raw: string,
  title: string,
  description: string
}

interface IExampleState {
  expanded: boolean
}

export default class Example extends React.Component<IExampleProps, IExampleState> {

  constructor (props: IExampleProps) {
    super(props)
    this.state = {
      expanded: true
    }
  }

  onToggle = () => {
    this.setState({expanded: !this.state.expanded})
  }
  
  render () {
    const {demo: Demo, raw, title, description} = this.props
    const {expanded} = this.state
    return (
      <div className='Example'>
        <div className='Example__content'>
          <div className='Example__demo'>
            <Demo/>
            <div className='Example__toggle' onClick={this.onToggle}>{expanded ? '收起' : '展开'}</div>
          </div>
          {expanded && <div className='Example__raw'>{raw}</div>}
        </div>
        <div className='Example__text'>
          <div className='Example__title'>{title}</div>
          <div className='Example__description'>{description}</div>
        </div>
      </div>
    )
  }
}