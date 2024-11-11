// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'
const EntireFilter = memo((props) => {
  // 定义状态
  const [selectItem, setSelectItem] = useState([])

  // 事件处理函数
  function handClick (item) {
    const newSelectedItem = [...selectItem]
    if (newSelectedItem.includes(item)) { // 如果包含，则移除

      const itemIndex = newSelectedItem.findIndex((i) => i == item)
      newSelectedItem.splice(itemIndex, 1)

    } else {
      newSelectedItem.push(item)
    }
    setSelectItem(newSelectedItem)
  }
  return (
    <FilterWrapper>
      <div className='filter'>
        {filterData.map((item) => {
          return (
            <div
              className={classNames('item', { active: selectItem.includes(item) })}
              onClick={e => handClick(item)}
              key={item}
            >{item}</div>
          )
        })}
      </div>

    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter