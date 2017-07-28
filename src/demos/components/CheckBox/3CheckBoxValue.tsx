import * as React from 'react'
import {CheckBox} from '../../../components'

interface ICheckBoxValueProps {}

export default class CheckBoxValue extends React.Component<ICheckBoxValueProps> {

  onChange = (checked: boolean, value: any) => {
    console.log(checked, value)
  }

  render () {
    return (
      <div>
        <CheckBox value={'苹果'} onChange={this.onChange}>苹果</CheckBox>
        <CheckBox value={'雪梨'} onChange={this.onChange}>雪梨</CheckBox>
        <CheckBox value={'西瓜'} onChange={this.onChange}>西瓜</CheckBox>
      </div>
    )
  }
}
