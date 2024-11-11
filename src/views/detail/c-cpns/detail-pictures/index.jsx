// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { PictureWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-brower'
const DetailPictures = memo((props) => {

  const [showBrowser, setShowBrowser] = useState(false)


  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  function pictureItemClickHandle (index) {
    setShowBrowser(true);
  }

  return (
    <PictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={e => setShowBrowser(true)}>
            <img src={detailInfo.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo.picture_urls?.slice(1, 5).map((item, index) => {
            return (
              <div
                className="item"
                key={item}
                onClick={e => setShowBrowser(true)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>

      </div>
      <div className="show-btn" onClick={(e) => pictureItemClickHandle(0)}>
        显示照片
      </div>


      {showBrowser && <PictureBrowser pictureUrls={detailInfo.picture_urls} closeClick={e => setShowBrowser(false)} />}


    </PictureWrapper>
  )
})

DetailPictures.propTypes = {}

export default DetailPictures