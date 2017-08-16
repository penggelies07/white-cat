import * as React from 'react'
import {Form, Input, CheckBox, Button} from '../../../components'

export interface IFormNormalState {
  name: string,
  hobbies: string[]
}

export default class FormNormal extends React.Component <{}, IFormNormalState> {

  state = {
    name: 'harrie',
    hobbies: []
  }

  validations = {
    name: (value: any) => !!value || '请输入姓名',
    hobbies: (value: any) => value.length > 0 || '请至少勾选一个兴趣'
  }

  onSubmit = (errors: any[] | null, values: any, reset: any) => {
    console.log(errors, values, typeof reset)
    reset()
  }

  render () {
    const {name, hobbies} = this.state

    return (
      <div>
        <Form validations={this.validations} onSubmit={this.onSubmit}>
          <Form.Field label='姓名' name='name' value={name}>
            {({value, onChange}) => <Input value={value} onChange={onChange}/>}
          </Form.Field>
          <Form.Field label='兴趣' name='hobbies' value={hobbies}>
            {({value, onValueChange}) => (
              <span>
                <CheckBox value='football' onChange={(e, c, val) => onValueChange(val)}>足球</CheckBox>
                <CheckBox value='basketball' onChange={(e, c, val) => onValueChange(val)}>篮球</CheckBox>
              </span>
            )}
          </Form.Field>
          <Button nativeType='submit'>提交</Button>
          <Button nativeType='reset'>重置</Button>
        </Form>
      </div>
    )
  }
}
