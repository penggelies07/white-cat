import * as React from 'react'
import {Divider} from '../../../components'

export default class DividerDirection extends React.Component {

  render () {
    return (
      <div className=''>
        <div>horizontal</div>
        <Divider/>
        <div>vertical</div>
        <div style={{height: 200, display: 'flex'}}>
          <div style={{display: 'inline-block', flex: '1', textAlign: 'center'}}>left</div>
          <Divider direction='vertical'/>
          <div style={{display: 'inline-block', flex: '1', textAlign: 'center'}}>right</div>
        </div>
      </div>
    )
  }
}
