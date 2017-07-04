import {configure} from '@storybook/react'
import '../src/styles/index.css'

const req = require.context('../src/', true, /.stories.tsx$/)

const loadStories = () => {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
