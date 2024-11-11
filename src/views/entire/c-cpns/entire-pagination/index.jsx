// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { PagiWrapper } from './style'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo((props) => {

  // 读取store数据
  const { totalCount, currentPage } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
  }), shallowEqual)

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  // 事件处理函数
  const dispatch = useDispatch()
  // 页码发生变化
  function handleChange (event, pageCount) {
    console.log('pageCount', pageCount);
    // 回到顶部 
    window.scrollTo(0, 0)
    // 修改页码
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PagiWrapper>
      <div className="info">
        <Pagination count={totalPage} onChange={handleChange} />
        <div className="desc">
          第{startCount}-{endCount}个房源，共超过{totalCount}个
        </div>
      </div>
    </PagiWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination