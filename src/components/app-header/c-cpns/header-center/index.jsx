import React, { memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { CenterWrapper } from './style'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import SearchTitles from '@/assets/data/search_titles'
import IconSearchBar from '@/assets/svg/icon-search-bar'


const HeaderCenter = memo((props) => {

  const [tabIndex, setTabIndex] = useState(0)
  const titles = SearchTitles.map((item) => item.title);
  const { isSearch, searchBarClick } = props


  function searchBarClickHandle () {
    searchBarClick()
  }
  // 元素抽取
  // 搜索栏
  // const searchBar = ()
  // 详细的搜索栏
  // const searchDetail = ()

  return (
    <CenterWrapper>

      {/* {isSearch ? searchDetail : searchBar} */}

      <CSSTransition
        in={!isSearch}
        timeout={250}
        classNames="bar"
        unmountOnExit={true}
      >
        <div className='search-bar' onClick={searchBarClickHandle}>
          <div className="text">
            搜索房源
          </div>
          <div className='icon'>
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        timeout={250}
        classNames="detail"
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className='infos'>
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter