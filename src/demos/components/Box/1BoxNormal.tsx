import * as React from 'react'
import {Box} from '../../../components'

export const title = `盒子`

export const description = ``

interface IBoxTypeProps {}

export default class BoxType extends React.Component<IBoxTypeProps> {

  render () {
    return (
      <div style={{background: '#fafafa', padding: '30px'}}>
        <Box style={{width: '300px', height: '300px'}}>box</Box>
      </div>
    )
  }
}
