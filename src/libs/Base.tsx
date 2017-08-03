import * as React from 'react'
import * as classnames from 'classnames'

// classnames declarations
interface IClassDictionary {[id: string]: boolean | undefined | null}
interface IClassArray extends Array<ClassValue> {}
type ClassValue = string | number | IClassDictionary | IClassArray[] | undefined | null | false

interface IBaseProps {
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
    const {className, style} = this.props
    return {
      className: classnames(classes, className),
      style: Object.assign({}, styles, style)
    }
  }
}
