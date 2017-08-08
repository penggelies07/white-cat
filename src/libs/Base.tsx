import * as React from 'react'
import * as classnames from 'classnames'

// classnames declarations
export interface IClassDictionary {[id: string]: boolean | undefined | null}
export interface IClassArray extends Array<ClassValue> {}
export type ClassValue = string | number | IClassDictionary | IClassArray[] | undefined | null | false

export interface IBaseProps {
  className?: string,
  style?: React.CSSProperties
}

export default abstract class Base<P = {}, S = {}> extends React.Component<P & IBaseProps, S> {
  _isMounted: boolean = false

  componentDidMount () {
    this._isMounted = true
  }
  
  componentWillUnmount () {
    this._isMounted = false
  }

  rootProps = (classes: ClassValue[] | ClassValue, styles?: React.CSSProperties) => {
    const {className, style, ...rest} = this.props as any

    const props: any = {
      className: classnames(classes, className),
      style: Object.assign({}, styles, style)
    }

    for (let name in rest) {
      if (name.startsWith('data-')) {
        props[name] = rest[name]
      }
    }

    return props
  }
}
