import React, { memo, useState, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

import { HeaderWrapper, SearchWrapper } from './style'
import HeaderRight from './c-cpns/hedaer-right'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'


const AppHeader = memo(() => {
  // 是否为搜索状态
  const [isSearch, setIsSearch] = useState(false)


  // 读取store数据
  const { isFixed, topAlpha } = useSelector((state) => (
    {
      isFixed: state.main.headerConfig.isFixed,
      topAlpha: state.main.headerConfig.topAlpha
    }), shallowEqual)

  // console.log('App-Header,isFixed', isFixed);

  // 监听滚动
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  // 在正常情况下（搜索框没有弹出来），不断记录值
  if (!isSearch) {
    prevY.current = scrollY
  }
  // 在弹出搜索功能时，滚动的距离大于之前记录的距离的30(绝对值)，则取消显示
  if (isSearch && Math.abs(scrollY - prevY.current) > 50) {
    setIsSearch(false)
  }

  // 透明度设置 -- 当处于首页且顶端时，才为透明状态
  const isAlpha = topAlpha && scrollY === 0

  // isAlpha为true的情况下，搜索状态一定为true

  // console.log('topAlph', topAlph);
  // console.log('isAlph', isAlpha);

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)} />
            <HeaderRight />
          </div>

          {/* 搜索区域,这个就是多出一块区域，放搜索后的选项 */}
          <SearchWrapper $isSearch={isAlpha | isSearch} />

        </div>
        {/* 搜索状态时，添加蒙版 */}
        {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper >
    </ThemeProvider>

  )
})

export default AppHeader