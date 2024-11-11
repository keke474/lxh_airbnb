import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconMenu from '@/assets/svg/icon_menu'
import IconGlobal from '@/assets/svg/icon_global'


const HeaderRight = memo(() => {
  // 定义panel是否显示
  const [showPanel, setShowPanel] = useState(false)
  // 2. 点击窗口别的地方，panel消失
  useEffect(() => {
    function windowHandleClick () {
      setShowPanel(false)
    }
    // 开启捕获模式
    window.addEventListener('click', windowHandleClick, true)
    return () => {
      window.removeEventListener('click', windowHandleClick, true)

    }
  }, [])

  // 1. 点击显示，回调函数
  function profileClickHandle () {
    setShowPanel(true)
  }
  return (
    <RightWrapper>
      {/* 注册登录按钮 */}
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>

      {/* 1. 点击显示 */}
      <div className='profile' onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel" >
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className='bottom'>
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight