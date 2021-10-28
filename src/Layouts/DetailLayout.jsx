import React from 'react'
import PropTypes from 'prop-types'
import Details from '../Component/DetailComponent/Details'
import Header from '../Component/HeaderComponent/Header'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Footer from '../Component/Footer/Footer'

DetailLayout.propTypes = {}

function DetailLayout(props) {
  return (
    <>
      <Header />
      <HeaderDetail title="Our Shop" curpage="Shop Details" />

      <Details />
      <Footer />
    </>
  )
}

export default DetailLayout
