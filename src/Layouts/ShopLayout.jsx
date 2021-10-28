import React from 'react'
import Header from '../Component/HeaderComponent/Header'
import Footer from '../Component/Footer/Footer'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import ShopContainer from '../Component/ShopComponent/ShopContainer'
import Pagination from '../Component/ShopComponent/Pagination'
function ShopLayout(props) {
  return (
    <div>
      <Header />
      <HeaderDetail title="Our Shop" curpage="Shop" />
      <ShopContainer />

      <Footer checkimg={true} />
    </div>
  )
}

export default ShopLayout
