import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { RoomWrapper } from './style'

const SectionRoom = memo((props) => {
  // 没有goodList时,给个空数组,这样不会报错
  const { goodList = [], itemWidth } = props
  return (
    <RoomWrapper>
      {
        goodList?.slice(0, 8).map(item => {
          return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />
        })
      }
    </RoomWrapper>
  )
})

SectionRoom.propTypes = {
  goodList: PropTypes.array
}

export default SectionRoom