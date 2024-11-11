import * as actionTypes from './constants'
import { getEntireRoomList } from '@/services'

export const changeCurPageAction = (currentPage) => {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
  }
}

export const changeRoomListAction = (roomList) => {
  return {
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
  }
}

export const changeTotalCountAction = (totalCount) => {
  return {
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
  }
}

export const changeIsLoadingAction = (isLoading) => {
  return {
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading
  }
}

export const fetchRoomListAction = (page = 0) => {
  // 返回新的函数
  return async (dispatch, getState) => {
    // 0. 修改当前页面
    dispatch(changeCurPageAction(page))


    // 1. 根据页码获取最新的数据
    // const currentPage = getState().entire.currentPage
    // const res = await getEntireRoomList(currentPage * 20)
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(page * 20)
    dispatch(changeIsLoadingAction(false))

    // 2. 获取到最新的数据，保存redux的store中
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}
