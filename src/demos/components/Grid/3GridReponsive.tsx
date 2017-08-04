import * as React from 'react'
import {Row, Col} from '../../../components'
import './style.less'

interface IGridGutterProps {}

export default class GridGutter extends React.Component<IGridGutterProps> {

  render () {
    return (
      <div>
        <Row gutter={10}>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={2}><div/></Col>
        </Row>
      </div>
    )
  }
}
