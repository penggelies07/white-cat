import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Confirm, Prompt} from '../components/Modal'

export interface IConfirmOptions {
  title?: string,
  content?: string,
  size?: 'small' | 'normal'| 'large',
  onConfirm?: () => void | Promise<any>
  onCancel?: () => void
}

export function confirm (options: IConfirmOptions) {
  const {title = '确认', content = '', size = 'small', onConfirm, onCancel} = options
  let container: any = document.createElement('div')
  let instance: any
  document.body.appendChild(container)

  const destroy = function () {
    if (container && instance) {
      ReactDOM.unmountComponentAtNode(container)
      const parent = container.parentNode
      if (parent) {
        parent.removeChild(container)
      }
      instance = null
      container = null
    }
  }

  instance = ReactDOM.render(React.createElement(
    Confirm, {title, content, size, afterHide: destroy, onConfirm, onCancel}),
    container
  )
}

export interface IPromptOptions {
  title?: string,
  value?: string,
  placeholder?: string,
  size?: 'small' | 'normal'| 'large',
  onConfirm?: (value: string) => void | Promise<any>
  onCancel?: () => void
}

export function prompt (options: IPromptOptions) {
  const {title = '确认', value = '', placeholder = '', size = 'small', onConfirm, onCancel} = options
  let container: any = document.createElement('div')
  let instance: any
  document.body.appendChild(container)

  const destroy = function () {
    if (container && instance) {
      ReactDOM.unmountComponentAtNode(container)
      const parent = container.parentNode
      if (parent) {
        parent.removeChild(container)
      }
      instance = null
      container = null
    }
  }

  instance = ReactDOM.render(React.createElement(
    Prompt, {title, value, placeholder, size, afterHide: destroy, onConfirm, onCancel}),
    container
  )
}
