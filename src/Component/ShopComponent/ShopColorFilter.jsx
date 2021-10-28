import { React, useState } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

ShopColorFilter.propTypes = {}

function ShopColorFilter(props) {
  let arrColor = []

  const [products, setProducts] = useState([])

  const handleValue = (e) => {
    if (arrColor.indexOf(e.target.value) !== -1) {
      arrColor.splice(arrColor.indexOf(e.target.value), 1)
    }

    arrColor.push(e.target.value)

    console.log(arrColor)
  }
  return (
    <div className="sidebar-color">
      <h3>PRODUCT Color</h3>
      <ul className="sidebar-color__list">
        <FormControlLabel
          className="black"
          value="Black"
          control={<Checkbox />}
          onChange={handleValue}
          label="Black"
        />
        <FormControlLabel
          className="green"
          value="Green"
          control={<Checkbox />}
          onChange={handleValue}
          label="Green"
        />{' '}
        <FormControlLabel
          className="blue"
          value="Blue"
          control={<Checkbox />}
          onChange={handleValue}
          label="Blue"
        />{' '}
        <FormControlLabel
          className="white"
          value="White"
          control={<Checkbox />}
          onChange={handleValue}
          label="White"
        />{' '}
        <FormControlLabel
          className="red"
          value="Red"
          control={<Checkbox />}
          onChange={handleValue}
          label="Red"
        />{' '}
        <FormControlLabel
          className="gray"
          value="Gray"
          control={<Checkbox />}
          onChange={handleValue}
          label="Gray"
        />
      </ul>
    </div>
  )
}

export default ShopColorFilter
