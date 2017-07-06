import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Root from './demos/Root'
import {AppContainer} from 'react-hot-loader'
import {BrowserRouter as Router} from 'react-router-dom'

declare const module: any
declare const require: any

const render = (Root: any, callback?: () => void) => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Root/>
      </Router>
    </AppContainer>,
    document.getElementById('app'),
    callback
  )
}

render(Root, () => {
  if (module.hot) {
    module.hot.accept('./demos/Root', () => {
      const next = require('./demos/Root').default
      render(next)
    })
  }
})
