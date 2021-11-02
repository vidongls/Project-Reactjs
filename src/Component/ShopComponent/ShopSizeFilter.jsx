import { React, useState, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import ProductApi from '../../Api/ProductApi'

function ShopSizeFilter(props) {
  const [checked, setChecked] = useState(true)
  let arrSize = []

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll()
      let data = productItems.data
      setProducts(data)
      // console.log(data.filter((val) => val.size))
    }
    getProducts()
  }, [])

  let getSize = [
    ...new Set(products.filter((val) => val.size).map((item) => item.size)),
  ]
  // console.log()
  const handleValue = (e) => {
    if (arrSize.indexOf(e.target.value) !== -1) {
      arrSize.splice(arrSize.indexOf(e.target.value), 1)
    }

    arrSize.push(e.target.value)

    // console.log(arrSize)
  }

  return (
    <div className="sidebar-size">
      <h3>PRODUCT SIZE</h3>
      {getSize &&
        getSize.map((val, index) => {
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

export default ShopSizeFilter
