import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import PostApi from '../../Api/PostApi'
import HeaderDetail from '../HeaderComponent/HeaderDetail'
import Header from '../HeaderComponent/Header'
import Footer from '../Footer/Footer'
import BlogDetailContent from './BlogDetailContent'
import BlogSideBar from './BlogSideBar'

function BlogDetail(props) {
  return (
    <div className="blog">
      <div className="container">
        {' '}
        <BlogDetailContent />
        <BlogSideBar />
      </div>
    </div>
  )
}

export default BlogDetail
