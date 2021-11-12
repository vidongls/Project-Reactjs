import HomeLayout from './Layouts/HomeLayout'
import { Switch, Route } from 'react-router-dom'
import ShopLayout from './Layouts/ShopLayout'
import ErrorComponent from './Component/ErrorComponent/ErrorComponent'
import ProductLayout from './Layouts/ProductLayout'
import BlogLayout from './Layouts/BlogLayout'
import PageLayout from './Layouts/PageLayout'
import ContactLayout from './Layouts/ContactLayout'
import DetailLayout from './Layouts/DetailLayout'
import BlogDetailLayout from './Layouts/BlogDetailLayout'
import CartLayout from './Layouts/CartLayout'
import LoginLayout from './Layouts/LoginLayout'
import RegisterLayout from './Layouts/RegisterLayout'
import WishListLayout from './Layouts/WishListLayout'
import CompareLayout from './Layouts/CompareLayout'
import './App.css'
import CheckOutLayout from './Layouts/CheckOutLayout'
import ProfileLayout from './Layouts/ProfileLayout'
import React, { useState, useEffect } from 'react'
import './media/css/style.css'

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
})

function App() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(false), 1000)
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        {show ? (
          <div id="spinner" className="spin">
            <div className="loading"></div>
          </div>
        ) : (
          <Switch>
            <Route path="/" component={HomeLayout} exact></Route>
            <Route path="/home" component={HomeLayout} exact></Route>
            <Route path="/shop" component={ShopLayout} exact></Route>
            <Route path="/products" component={ProductLayout} exact></Route>
            <Route path="/blog" component={BlogLayout} exact></Route>
            <Route path="/pages" component={PageLayout} exact></Route>
            <Route path="/contact" component={ContactLayout} exact></Route>
            <Route path="/cart" component={CartLayout} exact></Route>
            <Route path="/login" component={LoginLayout} exact></Route>
            <Route path="/register" component={RegisterLayout} exact></Route>
            <Route path="/wishlist" component={WishListLayout} exact></Route>
            <Route path="/compare" component={CompareLayout} exact></Route>
            <Route path="/checkout" component={CheckOutLayout} exact></Route>
            <Route path="/profile" component={ProfileLayout} exact></Route>
            <Route
              path="/details/:productID"
              component={DetailLayout}
              exact
            ></Route>
            <Route
              path="/detail-post/:postID"
              component={BlogDetailLayout}
              exact
            ></Route>
            <Route path="" component={ErrorComponent}></Route>
          </Switch>
        )}
      </StylesProvider>
    </>
  )
}

export default App
