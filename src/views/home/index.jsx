import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
// import { Rate } from 'antd';
// import Button from '@mui/material/Button';


import HomeWrapper from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeData } from '@/store/modules/home'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongfor from './c-cpns/home-longfor'
import { isEmptyO } from '@/utils'
import { changeHeaderConfigAction } from '@/store/modules/main'


const Home = memo(() => {

  // 从redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useSelector((state) =>
  ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)



  // 发送异步请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeData())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  // return (
  //   <HomeWrapper>
  //     <HomeBanner />
  //     <div className='content'>
  //       content
  //     </div>
  //   </HomeWrapper >
  // )
  return (
    <HomeWrapper>
      {/* 1. Banner轮播背景图 */}
      <HomeBanner />
      {/* 2. 内容区 */}
      <div className='content'>
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}

        <HomeSectionV1 infoData={goodPriceInfo} />  {/*高性价比 */}
        <HomeSectionV1 infoData={highScoreInfo} />  {/*高分 */}

        {/* plus */}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper >
  )
})

export default Home