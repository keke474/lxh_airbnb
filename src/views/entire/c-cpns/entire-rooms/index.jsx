// import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { RoomsWrapper } from './style'
import { useSelector, shallowEqual } from 'react-redux'


import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {

  const { totalCount, roomList, isLoading } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    roomList: state.entire.roomList,
    isLoading: state.entire.isLoading,
  }), shallowEqual)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemClickHandle = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item));
      navigate("/detail");

    },
    [navigate, dispatch]
  );

  return (
    <RoomsWrapper>
      <h2 className='title'> 共{totalCount}处住所</h2>
      <div className="roomlist">
        {
          roomList.map((item) => {
            return <RoomItem itemData={item} itemWidth="20%" key={item._id} itemClick={itemClickHandle} />
          })
        }
      </div>
      {/* 蒙版 */}
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms