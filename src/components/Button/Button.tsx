import * as React from 'react'
import Base from '../../libs/Base'
import ButtonGroup from './ButtonGroup'
import Icon from '../Icon'
import './Button.less'

interface IButtonProps {
  size?: 'small' | 'large',
  type?: 'default' | 'text' | 'primary' | 'success' | 'warning' | 'danger' | 'info',
  nativeType?: 'button' | 'submit' | 'reset',
  icon?: string,
  disabled?: boolean,
  loading?: boolean,
  full?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<any> | void
}

interface IButtonState {
  loading: boolean
}

export default class Button extends Base<IButtonProps, IButtonState> {
  static defaultProps: IButtonProps = {
    type: 'default',
    nativeType: 'button'
  }

  static Group = ButtonGroup

  constructor (props: IButtonProps) {
    super(props)

    this.state = {
      loading: !!props.loading
    }
  }

  componentWillReceiveProps (nextProps: IButtonProps) {
    if (nextProps.loading !== this.props.loading) {
      this.setState({loading: !!nextProps.loading})
    }
  }

  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const handler = this.props.onClick
    if (handler) {
      const promise = handler(e)
      if (promise instanceof Promise) {
        this.setState({loading: true})
        promise.then(() => {
          if (this.mounted) {
            this.setState({loading: false})
          }
        })
      }
    }
  }

  render () {
    const {disabled, full, icon, nativeType, children} = this.props
    const {loading} = this.state
    const size = this.props.size && 'Button--' + this.props.size
    const type = this.props.type && 'Button--' + this.props.type
    return (
      <button
        {...this.rootProps(['Button', type, size, {disabled, loading, full}])}
        disabled={disabled || loading}
        type={nativeType}
        onClick={this.onClick}
      >
        {loading && <Icon name='circle-o-notch' spinning fit/>}
        {!loading && icon && <Icon name={icon} fit/>}
        {children && <span>{children}</span>}
      </button>
    )
  }
}
