import * as React from 'react'
import {CheckBox} from '../../../components'

export const title = `禁用`

export const description = `支持disabled属性。`

interface ICheckBoxDisabledProps {}

export default class CheckBoxDisabled extends React.Component<ICheckBoxDisabledProps> {

  render () {
    return (
      <div>
        <CheckBox disabled>禁用</CheckBox>
      </div>
    )
  }
}
