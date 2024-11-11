import { useState, useEffect } from 'react'
import { throttle } from 'underscore'

export default function useScrollPosition () {
  // 定义状态记录位置
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 监听window滚动
  useEffect(() => {

    const handleScroll = throttle(function () {
      // 滑动页面，调用set方法，scrollX和Y就会变，变了就会刷新页面,过于频繁
      // 节流 npm install throttle
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return { scrollX, scrollY }
}