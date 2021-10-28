import { React, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import ProductApi from '../../Api/ProductApi'

ShopTagFilter.propTypes = {}

function ShopTagFilter(props) {
  let arrTag = []

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll()
      let data = productItems.data
      setProducts(data)
      //   console.log(data.map((val) => val.tags.map((item) => item)).flat())
    }
    getProducts()
  }, [])

  let getTag = [
    ...new Set(products.map((val) => val.tags.map((item) => item)).flat()),
  ]
  // console.log()
  const handleValue = (e) => {
    if (arrTag.indexOf(e.target.value) !== -1) {
      arrTag.splice(arrTag.indexOf(e.target.value), 1)
    }

    arrTag.push(e.target.value)

    console.log(arrTag)
  }
  return (
    <div className="sidebar-tag">
      <h3>TagS</h3>
      <ul className="sidebar-tag__list">
        {getTag &&
          getTag.map((val, index) => {
            return <li key={index}>{val}</li>
          })}
      </ul>
    </div>
  )
}

export default ShopTagFilter
