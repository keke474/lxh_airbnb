// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import Indicator from '@/base-ui/indicator';

import { DemoWrapper } from './style'
const Demo = memo((props) => {
  const names = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'jjj', 'hhhh']
  const [selectIndex, setSelectIndex] = useState(0)

  function handleClick (isPrev) {
    let newIndex = isPrev ? selectIndex - 1 : selectIndex + 1
    if (newIndex > names.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = names.length - 1

    setSelectIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={e => handleClick(true)}>上一个</button>
        <button onClick={e => handleClick(false)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {
            names.map((item) => {
              return <button key={item}>{item}</button>
            })
          }
        </Indicator>
      </div>

    </DemoWrapper>
  )
})

Demo.propTypes = {}

export default Demo