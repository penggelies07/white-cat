import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Base from '../../libs/Base'
import Dialog from './Dialog'

interface IDialogWrapProps {
  visible?: boolean,
  size?: 'small' | 'normal' | 'large',
  maskClosable?: boolean,
  header?: React.ReactNode,
  footer?: React.ReactNode,
  cancelText?: React.ReactNode,
  confirmText?: React.ReactNode,
  getContainer?: () => Element,
  onCancel?: () => void,
  onConfirm?: () => Promise<any> | void
}

export default class DialogWrap extends Base<IDialogWrapProps> {
  container: Element

  componentDidMount () {
    this.renderComponent()
  }

  // shouldComponentUpdate ({visible}: IDialogWrapProps) {
  //   return !!this.props.visible !== !!visible
  // }

  componentDidUpdate () {
    this.renderComponent()
  }

  componentWillUnmount () {
    if (this.props.visible) {
      this.renderComponent(false)
      setTimeout(() => {
        this.removeComponent()
      }, 300)
    } else  {
      this.removeComponent()
    }
  }

  getContainer = (): Element => {
    if (this.props.getContainer) {
      return this.props.getContainer()
    }

    const container = document.createElement('div')
    document.body.appendChild(container)
    return container
  }

  getDialog = (visible?: boolean): JSX.Element => {
    const {getContainer, ...rest} = this.props
    if (visible !== undefined) {
      (rest as any).visible = visible
    }
    return <Dialog {...rest}/>
  }

  renderComponent = (visible?: boolean) => {
    if (!this.container) {
      this.container = this.getContainer()
    }
    let dialog = this.getDialog(visible)
    ReactDOM.unstable_renderSubtreeIntoContainer(this, dialog, this.container)
  }

  removeComponent = () => {
    const container = this.container
    if (container) {
      ReactDOM.unmountComponentAtNode(container)
      if (container.parentNode) {
        container.parentNode.removeChild(container)
      }
      delete this.container
    }
  }
  
  render () {
    return null
  }
}
