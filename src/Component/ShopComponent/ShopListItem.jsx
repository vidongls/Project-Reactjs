import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import TabPanel from '@material-ui/lab/TabPanel'
import { Link } from 'react-router-dom'
import ProductApi from '../../Api/ProductApi'
import HomeItemAction from '../HomeComponent/HomeItemAction'
import Pagination from '../Pagination/Pagination'
ShopListItem.propTypes = {}

function ShopListItem(props) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [productPerPage] = useState(6)

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll()
      let data = productItems.data
      setProducts(data)
      setLoading(false)
    }
    getProducts()
  }, [])
  // Get current product
  const indexOfLastProducts = currentPage * productPerPage
  const indexOfFirstProducts = indexOfLastProducts - productPerPage

  let currentProducts = products.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  )
  const handleNext = () => {}
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="shop-list">
      <TabPanel
        value="0"
        style={{
          padding: '0px',
        }}
      >
        <div className="product-list">
          {currentProducts &&
            currentProducts.map((item, index) => {
              return (
                <div
                  className="product-item"
                  key={index}
                  style={{
                    padding: '0px',
                  }}
                >
                  <Link to={`/details/${item.id}`} className="product-img">
                    <img
                      style={{
                        minHeight: 'unset',
                      }}
                      src={item.img1}
                      className="product-img__first"
                    ></img>
                    <img
                      style={{
                        minHeight: 'unset',
                      }}
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
                      <Link to={`/details/${item.id}`}>
                        Decor, {item.brand}{' '}
                      </Link>
                    </div>
                    <h4>
                      <Link to={`/details/${item.id}`}>{item.name}</Link>
                    </h4>
                    <div className="product-meta">
                      <span>${item.mainPrice}.00 USD</span>
                      <span className="old-price">
                        {item.price !== undefined
                          ? '$' + item.price + '.00 USD'
                          : null}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </TabPanel>
      <TabPanel
        className="shop-list-fulldetail"
        value="1"
        style={{
          padding: '0px',
        }}
      >
        <div className="product-list">
          {currentProducts &&
            currentProducts.map((item, index) => {
              return (
                <div
                  className="product-item"
                  key={index}
                  style={{
                    padding: '0px',
                  }}
                >
                  <Link to={`/details/${item.id}`} className="product-img">
                    <img src={item.img1} className="product-img__first"></img>
                    <img
                      src={item.img2}
                      className="product-img__secondary"
                    ></img>
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
                      <Link to={`/details/${item.id}`}>
                        Decor, {item.brand}{' '}
                      </Link>
                    </div>
                    <h4>
                      <Link to={`/details/${item.id}`}>{item.name}</Link>
                    </h4>
                    <div className="product-meta">
                      <span>${item.mainPrice}.00 USD</span>
                      <span className="old-price">
                        {item.price !== undefined
                          ? '$' + item.price + '.00 USD'
                          : null}
                      </span>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.
                    </p>
                    <HomeItemAction />
                  </div>
                </div>
              )
            })}
        </div>
      </TabPanel>
      <Pagination
        productPerPage={productPerPage}
        totalProduct={products.length}
        paginate={paginate}
      />
    </div>
  )
}

export default ShopListItem
