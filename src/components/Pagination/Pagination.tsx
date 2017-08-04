import * as cn from 'classnames'
import * as React from 'react'
import Base from '../../libs/Base'
import Pager from './Pager'
import './Pagination.less'

export interface INextProps {
  current: number,
  total: number,
  onClick: (page: number) => void
}

function Next ({total, current, onClick}: INextProps) {
  const disabled = current >= total
  return (
    <div className={cn('whc-pagination__item', {disabled})} onClick={() => !disabled && onClick(current + 1)}>
      <i className='fa fa-fw fa-angle-right'/>
    </div>
  )
}

export interface IPrevProps {
  current: number,
  total: number,
  onClick: (page: number) => void
}

function Prev ({current, onClick}: IPrevProps) {
  const disabled = current < 2
  return (
    <div className={cn('whc-pagination__item', {disabled})} onClick={() => !disabled && onClick(current - 1)}>
      <i className='fa fa-fw fa-angle-left'/>
    </div>
  )
}

export interface IPaginationProps {
  current?: number,
  total?: number,
  range?: number,
  layout?: string[],
  onChange?: (page: number) => void
}

export interface IPaginationState {}

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
    const {layout = ['prev', 'whc-pager', 'next'], current = 1, total = 0, range = 3} = this.props
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
      'whc-pager': (
        <Pager
          key='whc-pager'
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
        <div className='whc-pagination'>
          {this.renderContent()}
        </div>
      )
    }
    return null
  }
}
