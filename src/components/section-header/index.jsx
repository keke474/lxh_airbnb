import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeadWrapper } from './style'
const SectionHeader = memo((props) => {
  const { title, subtitle } = props
  return (
    <HeadWrapper>
      <h2 className='title'>{title}</h2>
      {subtitle && <div className='subtitle'>{subtitle}</div>}
    </HeadWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}
export default SectionHeader
