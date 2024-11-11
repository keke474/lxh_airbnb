import React, { memo, useEffect } from 'react'
import EntireFilter from './c-cpns/entire-filer'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { } from '@/'
const Entire = memo(() => {

  // 发送网络请求，获取数据，保存当前的页面
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('发送网络请求entire');
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire