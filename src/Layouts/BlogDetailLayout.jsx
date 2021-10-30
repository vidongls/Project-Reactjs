import React from 'react'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Header from '../Component/HeaderComponent/Header'
import Footer from '../Component/Footer/Footer'
import BlogDetail from '../Component/BlogComponent/BlogDetail'

function BlogDetailLayout(props) {
  return (
    <>
      <Header />
      <HeaderDetail title="Blog" curpage="Details" />
      <BlogDetail />
      <Footer />
    </>
  )
}

export default BlogDetailLayout
