import * as cn from 'classnames'
import * as React from 'react'
import Base from '../../libs/Base'

interface IPagerProps {
  current: number,
  total: number,
  range: number,
  onClick: (page: number) => void
}

export default class Pager extends Base<IPagerProps> {
  getPages = () => {
    const {current, total, range} = this.props
    const size = range * 2 + 1
    const pages = []
    let startPage = 1
    let endPage = total

    if (total > size) {
      startPage = current - range
      endPage = current + range
      if (startPage < 1) {
        startPage = 1
        endPage = startPage + size
      } else if (endPage > total) {
        endPage = total
        startPage = total - size
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  render () {
    const {current, total, onClick} = this.props
    const pages = this.getPages()

    return (
      <div className='Pagination__pager'>
        {pages.map((page) => (
          <div
            className={cn('Pagination__item', {active: page === current})}
            key={page}
            onClick={() => onClick(page)}>
            {current === page ? current + ' / ' + total : page}
          </div>
        ))}
      </div>
    )
  }
}