import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { useDispatch, useSelector } from 'react-redux'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ProductSort from '../ProductComponent/ProductSort'
import ProductApi from '../../Api/ProductApi'
import HomeItemAction from './HomeItemAction'

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <FaArrowLeft />
  </button>
)
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'slick-next slick-arrow' +
      (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <FaArrowRight />
  </button>
)
HomeListItem.propTypes = {}

function HomeListItem(props) {
  const [products, setProducts] = useState([])
  const sort = useSelector((state) => state.sort.data)
  let newArr = []
  // console.log(sort)
  const { row, title } = props

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll()
      let data = productItems.data

      switch (sort) {
        case 'All': {
          newArr = [...data]
          break
        }
        case 'Furniture': {
          let newFur = data.filter((val) => {
            return val.category.indexOf(sort.toLowerCase()) !== -1
          })
          newArr = [...newFur]
          break
        }
        case 'ManCloth': {
          let newMan = data.filter((val) => {
            return (
              val.category.indexOf('gent') !== -1 &&
              val.category.indexOf('clothing') !== -1
            )
          })
          newArr = [...newMan]
          break
        }
        case 'Woman Cloth': {
          let newLady = data.filter((val) => {
            return (
              val.category.indexOf('ladies') !== -1 &&
              val.category.indexOf('clothing') !== -1
            )
          })
          newArr = [...newLady]
          break
        }
      }
      setProducts(newArr)
    }
    getProducts()
  }, [sort])
  // const handleChange = (event, newValue) => {
  //   setValue(newValue)
  //   console.log(newValue)
  // }
  const settings = {
    arrows: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    rows: row,
    slidesToScroll: 1,
  }
  return (
    <div style={{ padding: '60px 90px' }}>
      <Grid container spacing={0} className="product">
        <Grid
          className="product-header"
          item
          xs={12}
          style={{ display: 'flex' }}
        >
          <Grid className="product-header__title" item xs={6}>
            <h2>{title}</h2>
            <p>Browse the huge variety of our products</p>
          </Grid>
          <Grid className="product-header__tab" item xs={6}>
            <ProductSort />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Slider {...settings} className="product-list">
            {products &&
              products.map((item, index) => {
                return (
                  <div className="product-item" key={index}>
                    <Link to="/" className="product-img">
                      <img src={item.img1} className="product-img__first"></img>
                      <img
                        src={item.img2}
                        className="product-img__secondary"
                      ></img>
                      <HomeItemAction />
                      <div className="product-tag">
                        <span className={item.new === true ? 'new' : null}>
                          {item.new === true ? 'new' : null}
                        </span>
                        <span className={item.new === true ? 'sale' : null}>
                          {item.new === true ? 'new' : null}
                        </span>
                      </div>
                    </Link>
                    <div className="product-content">
                      <div className="product-category">
                        <Link to="/">Decor, {item.brand} </Link>
                      </div>
                      <h4>
                        <Link to="/">{item.name}</Link>
                      </h4>
                      <div className="product-meta">
                        <span>${item.mainPrice}.00 USD</span>
                        <span className="old-price">
                          {'$' + item.price + '.00 USD'}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
          </Slider>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomeListItem
