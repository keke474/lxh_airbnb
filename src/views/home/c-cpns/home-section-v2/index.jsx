import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props

  /**定义内部的state */
  // const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? ""
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)

  // 筛选tab的数据，传给SectionTabs组件
  const tabNames = infoData.dest_address?.map(item => item.name)


  // 获取SectionTabs组件点击的tab内容，并传给SectionRoom
  const tabClickHandle = useCallback(function (name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRoom goodList={infoData.dest_list?.[name]} itemWidth="33.33%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})


HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2