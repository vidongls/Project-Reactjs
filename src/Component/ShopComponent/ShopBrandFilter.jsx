import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import ProductApi from '../../Api/ProductApi'

ShopBrandFilter.propTypes = {}
// const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
function ShopBrandFilter(props) {
  let arrSort = []
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll()
      let data = productItems.data
      setProducts(data)
    }
    getProducts()
  }, [])
  let getBrand = [...new Set(products.map((val) => val.brand))]
  const handleValue = (e) => {
    if (arrSort.indexOf(e.target.value) !== -1) {
      arrSort.splice(arrSort.indexOf(e.target.value, 1))
    }
    arrSort.push(e.target.value)
  }
  return (
    <div className="sidebar-brandfilter">
      <h3>Brand</h3>

      {getBrand &&
        getBrand.map((val, index) => {
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

export default ShopBrandFilter
