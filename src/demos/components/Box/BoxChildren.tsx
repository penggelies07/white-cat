import * as React from 'react'
import {Box} from '../../../index'

export default class BoxChildren extends React.Component {

  render () {
    return (
      <div style={{background: '#fafafa', padding: '30px'}}>
        <Box style={{width: '300px', height: '200px'}}>
          content
        </Box>
      </div>
    )
  }
}
