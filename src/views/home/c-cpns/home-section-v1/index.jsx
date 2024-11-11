// import PropTypes from 'prop-types'

import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'
import { SectionV1Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRoom goodList={infoData.list} itemWidth="25%" />
      <SectionFooter />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {}

export default HomeSectionV1