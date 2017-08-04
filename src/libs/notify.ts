import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Notification from '../components/Notification'

let instance: Notification | null
let container: HTMLDivElement | null

function getInstance () {
  if (!instance) {
    container = document.createElement('div')
    document.body.appendChild(container)
    instance = ReactDOM.render(React.createElement(Notification), container) as Notification
  }

  return instance
}

export type noticeType = 'primary' | 'success' | 'warning' | 'error'

function notify (
  type: noticeType,
  content: string,
  duration: number = 3000,
  closable: boolean = true) {
  getInstance().add({type, content, duration, closable})
}

export default notify

export function destroy () {
  if (instance && container) {
    ReactDOM.unmountComponentAtNode(container)
    document.body.removeChild(container)
    instance = null
    container = null
  }
}

export function success (content: string, duration?: number, closable?: boolean) {
  return notify('success', content, duration, closable)
}

export function warning (content: string, duration?: number, closable?: boolean) {
  return notify('warning', content, duration, closable)
}

export function error (content: string, duration?: number, closable?: boolean) {
  return notify('error', content, duration, closable)
}
