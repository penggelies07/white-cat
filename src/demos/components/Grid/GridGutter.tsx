import * as React from 'react'
import {Row, Col} from '../../../index'
import './style.less'

export interface IGridGutterProps {}

export default class GridGutter extends React.Component<IGridGutterProps> {

  render () {
    return (
      <div>
        <div>无间距：</div>
        <Row>
          <Col span={6}><div>6</div></Col>
          <Col span={6}><div>6</div></Col>
          <Col span={6}><div>6</div></Col>
          <Col span={6}><div>6</div></Col>
        </Row>
        <div>间距10px：</div>
        <Row gutter={10}>
          <Col span={6}><div>6</div></Col>
          <Col span={6}><div>6</div></Col>
          <Col span={6}><div>6</div></Col>
          <Col span={6}><div>6</div></Col>
        </Row>
      </div>
    )
  }
}
