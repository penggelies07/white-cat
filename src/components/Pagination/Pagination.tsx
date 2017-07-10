import * as React from 'react'
import Base from '../../libs/Base'
import Pager from './Pager'
import './Pagination.less'

interface INextProps {
  current: number,
  total: number,
  onClick: (page: number) => void
}

function Next ({total, current, onClick}: INextProps) {
  const disabled = current >= total
  return (
    <div className='Pagination__item' disabled={disabled} onClick={() => !disabled && onClick(current + 1)}>
      <i className='fa fa-fw fa-angle-right'/>
    </div>
  )
}

interface IPrevProps {
  current: number,
  total: number,
  onClick: (page: number) => void
}

function Prev ({current, onClick}: IPrevProps) {
  const disabled = current < 2
  return (
    <div className='Pagination__item' disabled={disabled} onClick={() => !disabled && onClick(current - 1)}>
      <i className='fa fa-fw fa-angle-left'/>
    </div>
  )
}

interface IPaginationProps {
  current?: number,
  total?: number,
  range?: number,
  layout?: string[],
  onChange?: (page: number) => void
}

interface IPaginationState {}

export default class Pagination extends Base<IPaginationProps, IPaginationState> {

  constructor (props: IPaginationProps) {
    super(props)
    this.state = {}
  }

  onChange = (page: number) => {
    const {onChange} = this.props
    if (onChange) {
      onChange(page)
    }
  }

  renderContent = () => {
    const {layout = ['prev', 'pager', 'next'], current = 1, total = 0, range = 3} = this.props
    const template = {
      'prev': (
        <Prev
          key='prev'
          current={current}
          total={total}
          onClick={this.onChange}/>
      ),
      'next': (
        <Next
          key='next'
          current={current}
          total={total}
          onClick={this.onChange}/>
      ),
      'pager': (
        <Pager
          key='pager'
          current={current}
          total={total}
          range={range}
          onClick={this.onChange}/>
      )
    }
    const content: JSX.Element[] = []
    layout.forEach((name) => {
      if (template[name]) {
        content.push(template[name])
      }
    })
    return content
  }

  render () {
    if (this.props.total && this.props.total > 0) {
      return (
        <div className='Pagination'>
          {this.renderContent()}
        </div>
      )
    }
    return null
  }
}
