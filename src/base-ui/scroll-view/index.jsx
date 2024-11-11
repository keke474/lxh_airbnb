// import PropTypes from 'prop-types'
import React, { memo, useEffect, useState, useRef } from 'react'
import { ViewWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
/**
 * 是否显示右移按钮---声明周期内判断
 * 
 */
const ScrollView = memo((props) => {

  const [showRight, setShowRight] = useState(false)
  const [showLeft, setshowLeft] = useState(false)
  const [curPosIndex, setCurPosIndex] = useState(0)
  // 
  const totalDistanceRef = useRef()
  const scrollContentRef = useRef()
  // 模拟声明周期函数
  useEffect(() => {
    // console.log('useEffect调用');
    // 判断是否需要显示右移按钮
    const scrollWidth = scrollContentRef.current.scrollWidth  // 本身的宽度
    const clientWidth = scrollContentRef.current.clientWidth  // 可视区里该元素的宽度
    const totalDistance = scrollWidth - clientWidth
    setShowRight(totalDistance > 0)
    totalDistanceRef.current = totalDistance
  }, [props.children])


  function controlScrollHandle (isRight) {
    // console.log(props.children);
    // 元素需要左移--新元素距离左端的距离是多少
    const newIndex = isRight ? curPosIndex + 1 : curPosIndex - 1 // 获取新元素的索引
    const newEle = scrollContentRef.current.children[newIndex] // 获取到新元素
    const newOffset = newEle.offsetLeft // 左移的距离
    scrollContentRef.current.style.transform = `translate(-${ newOffset }px)` // 移动

    // 移动完之后，更改索引
    setCurPosIndex(newIndex)

    // 需要判断还是否需要显示右移按钮,应该将totalDistance与左移的距离进行比较
    setShowRight(totalDistanceRef.current > newOffset)
    // 左移距离 = 0时，才恢复到最开始的状态
    setshowLeft(newOffset > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && <button className='control left' onClick={e => controlScrollHandle(false)}>
        <IconArrowLeft />
      </button>}
      {showRight && <button className='control right' onClick={e => controlScrollHandle(true)}>
        <IconArrowRight />
      </button>}
      {/* 实现类似插槽的效果 */}
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView