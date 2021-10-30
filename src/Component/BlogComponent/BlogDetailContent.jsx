import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import PostApi from '../../Api/PostApi'

function BlogDetailContent(props) {
  const [post, setPost] = useState([])
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  let { postID } = useParams()
  console.log(postID)
  useEffect(() => {
    const getPost = async () => {
      const postItems = await PostApi.getOne(postID)
      let data = postItems.data
      console.log(data)
      setPost(data)
    }
    getPost()
  }, [])

  return <div></div>
}

export default BlogDetailContent
