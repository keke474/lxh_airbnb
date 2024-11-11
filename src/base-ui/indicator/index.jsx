import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, } from 'react'

import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props

  const contentRef = useRef()
  useEffect(() => {
    // 移动
    // 1. 拿到选择的当前元素
    const selectEl = contentRef.current.children[selectIndex]
    // 2. 计算选择元素距离父元素的左侧距离; 本身宽度
    const selectElLeft = selectEl.offsetLeft
    const slectElWidth = selectEl.clientWidth

    // 3. 计算content本身宽度
    const contentWidth = contentRef.current.clientWidth

    // console.log(selectElLeft, slectElWidth, contentWidth);

    // 4. 计算移动距离
    let moveDistance = selectElLeft + slectElWidth * 0.5 - contentWidth * 0.5

    // 5. 特殊情况的处理
    if (moveDistance < 0) moveDistance = 0
    const totalDistance = contentRef.current.scrollWidth - contentWidth

    if (moveDistance > totalDistance) moveDistance = totalDistance
    // 6. 改变位置即可
    contentRef.current.style.transform = `translate(${ -moveDistance }px)`
    // console.log(moveDistance );

  }, [selectIndex])
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator