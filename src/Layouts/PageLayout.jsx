import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Component/HeaderComponent/Header'
import SideAction from '../Component/SideAction/SideAction'

PageLayout.propTypes = {}

function PageLayout(props) {
  return (
    <div>
      <SideAction />
      <Header />
      this is page
    </div>
  )
}

export default PageLayout
