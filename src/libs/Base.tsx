import * as React from 'react'
import * as classnames from 'classnames'

interface IClassDictionary {
  [id: string]: boolean | undefined | null
}

interface IClassArray extends Array<ClassValue> {}

type ClassValue = string | number | IClassDictionary | IClassArray[] | undefined | null | false

interface IElementData {
  [name: string]: string
}

interface IBaseProps {
  className?: string,
  style?: React.CSSProperties
}

export default abstract class Base<P = {}, S = {}> extends React.Component<P & IBaseProps, S> {
  mounted: boolean = false

  constructor (props: any) {
    super(props)
  }

  componentDidMount () {
    this.mounted = true
  }
  
  componentWillUnmount () {
    this.mounted = false
  }

  rootProps = (classes: ClassValue[] | ClassValue, styles?: React.CSSProperties, data?: IElementData) => {
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
