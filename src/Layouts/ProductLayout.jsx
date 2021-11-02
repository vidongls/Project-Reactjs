import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Component/HeaderComponent/Header'
import ProductList from '../Component/ProductComponent/ProductList'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Footer from '../Component/Footer/Footer'
import SideAction from '../Component/SideAction/SideAction'
ProductLayout.propTypes = {}

function ProductLayout(props) {
  return (
    <>
      <SideAction />
      <Header />
      <HeaderDetail check={true} title="Our Shop" curpage="Shop" />
      <ProductList />
      <Footer checkimg={true} />
    </>
  )
}

export default ProductLayout
