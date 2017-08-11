import * as React from 'react'
import {CheckBox} from '../../../index'

export default class CheckBoxChecked extends React.Component {
  render () {
    return (
      <div>
        <CheckBox checked={true}>选择</CheckBox>
      </div>
    )
  }
}
