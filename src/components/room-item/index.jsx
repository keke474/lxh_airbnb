import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rate, Carousel } from 'antd';
import classNames from "classnames";

import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';



const RoomItem = memo((props) => {
  // 自定义内部状态值
  const [selectIndex, setSelecIndex] = useState(0)
  // 接收传递的值
  const { itemData, itemWidth, itemClick } = props

  // 事件处理
  const slideRef = useRef()

  function controlClickHandle (isRight = true, event) {
    // 轮播图变为下一个
    isRight ? slideRef.current.next() : slideRef.current.prev()
    // 改变当前索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0

    setSelecIndex(newIndex)

    // 阻止事件冒泡
    event.stopPropagation()
  }

  // 跳转详情页
  function itemClickHandle () {
    // 首页不传函数过来，首页就不会跳转详情页
    itemClick(itemData)
  }

  // 提取的元素，封面图部分
  const pictureEl = (
    <div className='cover'>
      <img src={itemData.picture_url} alt='' />
    </div>
  )

  // 提取的元素，轮播图部分
  const sliderEl = (
    <div className="slider">
      {/* 控制 */}
      <div className="control" >
        <div className="btn left" onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div key={item} className="item">
                <span
                  className={classNames("dot", {
                    active: index === selectIndex,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>

      {/* 轮播图 */}
      <Carousel dots={false} ref={slideRef}>
        {
          itemData?.picture_urls?.map((item) => {
            return (
              <div className='cover' key={item}>
                <img src={item} alt='' />
              </div>
            )
          })
        }
      </Carousel>

    </div>
  )
  return (
    <ItemWrapper
      $verifycolor={itemData.verify_info.text_color || "#39576a"}
      $itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">

        {/* 首页不展示轮播图，entire展示轮播图 */}
        {itemData.picture_urls ? sliderEl : pictureEl}

        <div className='desc'>{itemData.verify_info.messages.join("·")}</div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}/晚</div>
        {/* 评分--星星 */}
        <div className="bottom">
          {/* 如果用或||,则0星是也是5,所以用??, undefined时显示5,0时显示0 */}
          <Rate defaultValue={itemData.star_rating ?? 5}
            precision={0.1}
            disabled
            style={{ fontSize: "12px", color: "#00848A", marginRight: '-1px' }}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {/* 有额外信息时展示额外信息,没有就不展示 */}
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem