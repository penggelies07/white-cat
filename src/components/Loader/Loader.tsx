import * as React from 'react'
import Base from '../../libs/Base'
import './Loader.less'

interface ILoaderProps {
  loading?: boolean,
  text?: string,
  children?: React.ReactNode
}

interface ILoaderState {}

export default class Loader extends Base<ILoaderProps, ILoaderState> {

  constructor (props: ILoaderProps) {
    super(props)
    this.state = {}
  }

  renderChildren = () => {
    const children = this.props.children
    return typeof children === 'string'
      ? React.createElement('span', {}, children)
      : children as any || null
  }

  render () {
    const {loading, text, children} = this.props
    return (
      loading
      ? (
        <div {...this.rootProps(['Loader'])}>
          <div className='Loader__core'>{text}</div>
          {children && <span className='Loader__container'>{children}</span>}
        </div>
      )
      : this.renderChildren()
    )
  }
}
