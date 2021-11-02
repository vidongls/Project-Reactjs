import { React, useState, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import ProductApi from '../../Api/ProductApi'

function ShopCategoryFilter(props) {
  let arrCategory = []

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll()
      let data = productItems.data
      setProducts(data)
      console.log(data.map((val) => val.category.map((item) => item)).flat())
    }
    getProducts()
  }, [])

  let getCategory = [
    ...new Set(products.map((val) => val.category.map((item) => item)).flat()),
  ]
  // console.log()
  const handleValue = (e) => {
    if (arrCategory.indexOf(e.target.value) !== -1) {
      arrCategory.splice(arrCategory.indexOf(e.target.value), 1)
    }

    arrCategory.push(e.target.value)

    console.log(arrCategory)
  }
  return (
    <div className="sidebar-category">
      <h3>PRODUCT Category</h3>
      {getCategory &&
        getCategory.map((val, index) => {
          return (
            <div key={index}>
              <FormControlLabel
                value={val}
                control={<Checkbox />}
                onChange={handleValue}
                label={val}
              />
            </div>
          )
        })}
    </div>
  )
}

export default ShopCategoryFilter
