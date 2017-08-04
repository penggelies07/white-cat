import * as React from 'react'
import {CheckBox} from '../../../index'

export interface ICheckBoxSizeProps {}

export default class CheckBoxSize extends React.Component<ICheckBoxSizeProps> {

  render () {
    return (
      <div>
        <CheckBox size='small'>小</CheckBox>
        <CheckBox>中</CheckBox>
        <CheckBox size='large'>大</CheckBox>
      </div>
    )
  }
}
