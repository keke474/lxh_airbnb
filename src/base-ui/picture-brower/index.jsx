import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { BrowerWrapper } from './style'
import IconClose from '@/assets/svg/icon_close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleArrowBottom from '@/assets/svg/icon_triangle_arrow_bottom'
import IconTriangleArrowTop from '@/assets/svg/icon_triangle_arrow_top'
import Indicator from '../indicator'
import classNames from 'classnames'

const PictureBrowser = memo((props) => {
  // 自定义状态内部数据
  const [currentIndex, setCurIndex] = useState(0)
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true)

  // 接收父组件传递的数据
  const { pictureUrls, closeClick } = props

  // 页面滚动不是PictureBrowser造成的，在position：fixed，上下左右都是0的情况下，占据的是视口的100%

  // 当图片浏览器显示时，页面不应该再滚动
  useEffect(() => {
    document.body.style.overflow = "hidden";
    // 当图片浏览器关闭时，页面回复滚动
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // 事件处理函数
  // top关闭图片浏览器
  function closeBtnClickHandle () {
    // 先判断一下父组件是否传递了closeClick函数，没有就是undefined
    if (closeClick) closeClick()
  }

  // 左右切换图片
  function controlClickHandle (isRight) {
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0

    setCurIndex(newIndex)
    setIsNext(isRight)
  }
  // 点击下边图片进行切换
  function bottomItemClick (index) {
    // setIsNext控制左移右移
    setIsNext(index > currentIndex)
    setCurIndex(index)
  }

  return (
    <BrowerWrapper $isnext={isNext} $showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      {/* 图片展示 */}
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width={77} height={77} />
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true)}>
            {/* 这两种传递宽高值的方式都可以 */}
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      {/* 下边indicator */}
      <div className="preview">
        <div className="info">
          {/* 上边的描述 */}
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{pictureUrls.length}:</span>
              <span>room Apartment 图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={e => { setShowList(!showList) }}>
              <span>{showList ? '隐藏' : '显示'}照片列表</span>
              {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
            </div>
          </div>
          {/* 下边的图片列表 */}
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls?.map((item, index) => {
                  return (
                    <div key={index}
                      className={classNames('item', { active: index === currentIndex })}
                      onClick={e => bottomItemClick(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>

      </div>
    </BrowerWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser 