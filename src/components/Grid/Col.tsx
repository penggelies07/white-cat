import * as React from 'react'
import Base from '../../libs/Base'
import './Col.less'

interface IColProps {
  span?: number,
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number
}

export default class Col extends Base<IColProps> {

  static defaultProps = {
    span: 1
  }

  render () {
    const {span, children, ...sizes} = this.props

    const sizeClasses = ['xs', 'sm', 'md', 'lg', 'xl'].reduce((classes: string[], size) => {
      if (sizes[size] && sizes[size] >= 0) {
        classes.push(`whc-col-${size}-${sizes[size]}`)
      }
      return classes
    }, [])

    if (!sizeClasses.length) {
      sizeClasses.push(`whc-col-${span}`)
    }

    return (
      <div {...this.rootProps(['whc-col', ...sizeClasses])}>
        {children}
      </div>
    )
  }
}
