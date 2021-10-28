import { React, useState } from 'react'
import '../../media/css/style.css'
import logo from '../../media/img/logo.png'
import { FaRegUser, FaSearch, FaShoppingCart } from 'react-icons/fa'

import { Link, NavLink } from 'react-router-dom'

function Header(props) {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div className="header">
        <div className="header-logo">
          <div className="header-logo__humberger">
            <span></span>
          </div>
          <div className="header-logo__logo">
            <Link to={'/home'}>
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>

        <ul className="header-list">
          <li>
            <NavLink to={'/home'}>Home</NavLink>

            <div className="header-dropdown">
              <ul>
                <li>
                  <Link to="/">Home Style 1</Link>
                </li>
                <li>
                  <Link to="/">Home Style 2</Link>
                </li>
                <li>
                  <Link to="/">Home Style 3</Link>
                </li>
                <li>
                  <Link to="/">Home Style 4</Link>
                </li>
                <li>
                  <Link to="/">Home Style 5</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to={'/shop'}>Shop</NavLink>
            <ul className="header-dropdown level-1">
              <ul>
                <h3>Category View</h3>
                <li>
                  <Link to="/shop">Shop 2 Column</Link>
                </li>
                <li>
                  <Link to="/products">Shop Filter Style</Link>
                </li>
                <li>
                  <Link to="/products">Shop Full</Link>
                </li>
                <li>
                  <Link to="/shop/col-3">Shop 3 Column</Link>
                </li>
                <li>
                  <Link to="/shop/list">List View</Link>
                </li>
              </ul>
              <ul>
                <h3>Category View</h3>
                <li>
                  <Link to="/shop/left-sidebar">Sidebar Left</Link>
                </li>
                <li>
                  <Link to="/shop/sidebar-right">Sidebar Right</Link>
                </li>
                <li>
                  <Link to="/cart">Shopping Cart</Link>
                </li>
                <li>
                  <Link to="/checkout">Checkout</Link>
                </li>
                <li>
                  <Link to="/wishlist">My Wishlist</Link>
                </li>
              </ul>
              <ul>
                <h3>Products Types</h3>
                <li>
                  <Link to="/shop/1">Simple Product</Link>
                </li>
                <li>
                  <Link to="/shop/19">Variable Product</Link>
                </li>
                <li>
                  <Link to="/shop/upcoming/16">Product Upcoming</Link>
                </li>
                <li>
                  <Link to="/shop/up-thumb/16">Thumb Top Product</Link>
                </li>
                <li>
                  <Link to="/compare">Compare</Link>
                </li>
              </ul>
            </ul>
          </li>
          <li>
            <NavLink to={'/products'}>Products</NavLink>
          </li>
          <li>
            <NavLink to={'/blog'}>Blog</NavLink>
            <div className="header-dropdown">
              <ul>
                <li>
                  <Link to="/">Blog 2 Column</Link>
                </li>
                <li>
                  <Link to="/">Blog 2 Col Masonry</Link>
                </li>
                <li>
                  <Link to="/">Blog 3 Column</Link>
                </li>
                <li>
                  <Link to="/">Blog 3 Col Masonry</Link>
                </li>
                <li>
                  <Link to="/">Blog Details</Link>
                </li>
                <li>
                  <Link to="/">Blog Details Video</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to={'/pages'}>Pages</NavLink>
            <div className="header-dropdown">
              <ul>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">login</Link>
                </li>
                <li>
                  <Link to="/">Register</Link>
                </li>
                <li>
                  <Link to="/">Shoping Cart</Link>
                </li>
                <li>
                  <Link to="/">Checkout</Link>
                </li>
                <li>
                  <Link to="/">Wishlist</Link>
                </li>
                <li>
                  <Link to="/">Compare</Link>
                </li>
                <li>
                  <Link to="/">Order Success</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
        <div className="mobile-wrapbtn">
          <ul className="header-options">
            <li className="btn-search">
              <FaSearch />
            </li>
            <li className="btn-user">
              <FaRegUser />
            </li>
            <li className="btn-cart">
              <FaShoppingCart />
              <span className="cart-count">0</span>
              <ul className="minicart">
                <h3>Product Not Found</h3>
                <li></li>
                <li>
                  <div className="minicart-price">
                    <span className="minicart-price__left">Total:</span>
                    <span className="minicart-price__right">$ 0.00</span>
                  </div>
                </li>
                <li>
                  <div className="minicart-checkout">
                    <Link to="/cart">Shopping Cart</Link>
                    <Link to="/chekout">Checkout</Link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <div
            className={showMenu ? 'menu-mobile active' : 'menu-mobile'}
            onClick={handleMenu}
          >
            <span></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
