import * as React from 'react'
import {Box} from '../../../components'

interface IBoxNormalProps {}

export default class BoxNormal extends React.Component<IBoxNormalProps> {

  render () {
    return (
      <div style={{background: '#fafafa', padding: '30px'}}>
        <Box style={{width: '300px', height: '300px'}}>box</Box>
      </div>
    )
  }
}
