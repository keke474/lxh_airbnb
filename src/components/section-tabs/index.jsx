import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  // props接收的数据
  const { tabNames = [], tabClick } = props
  // 定义组件内部状态
  const [currentIndex, changeIndex] = useState(0)

  tabNames.push('aaa')
  tabNames.push('bbb')
  tabNames.push('ccc')

  // 点击事件
  function itemHandleClick (name, index) {
    changeIndex(index)
    // 将name传递给父组件，用于父组件展示对应的数据
    tabClick(name)
  }

  return (
    <TabWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div
                key={item}
                className={classNames('item', { active: currentIndex === index })}
                onClick={e => itemHandleClick(item, index)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs