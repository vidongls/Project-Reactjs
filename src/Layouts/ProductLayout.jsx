import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Component/HeaderComponent/Header'
import ProductList from '../Component/ProductComponent/ProductList'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Footer from '../Component/Footer/Footer'
ProductLayout.propTypes = {}

function ProductLayout(props) {
  return (
    <div>
      <Header />
      <HeaderDetail title="Our Shop" curpage="Shop" />
      <ProductList />
      <Footer checkimg={true} />
    </div>
  )
}

export default ProductLayout
