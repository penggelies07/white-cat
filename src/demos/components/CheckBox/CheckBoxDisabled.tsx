import * as React from 'react'
import {CheckBox} from '../../../index'

export interface ICheckBoxDisabledProps {}

export default class CheckBoxDisabled extends React.Component<ICheckBoxDisabledProps> {

  render () {
    return (
      <div>
        <CheckBox disabled>禁用</CheckBox>
      </div>
    )
  }
}
