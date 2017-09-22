import * as React from 'react'
import {Tag} from '../../../index'

export default class TagOnClick extends React.Component {

  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
  }

  render () {
    return (
      <div>
        <Tag onClick={(e) => this.onClick}>点击</Tag>
      </div>
    )
  }
}
