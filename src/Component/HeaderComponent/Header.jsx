import { React, useState, useEffect } from 'react'
import '../../media/css/style.css'
import logo from '../../media/img/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import {
  FaRegUser,
  FaSearch,
  FaShoppingCart,
  FaRegTrashAlt,
} from 'react-icons/fa'
import { removeItemCart } from '../../Slice/CartSlice'
function Header(props) {
  const [showMenu, setShowMenu] = useState(false)
  const cartItems = useSelector((state) => state.cart.cartItems)
  // const totalPrice = useSelector((state) => state.cart.setTotalPrice)

  const quantity = cartItems.length
  // console.log(totalPrice)

  const dispatch = useDispatch()

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleDelete = (id) => {
    const actionDelete = removeItemCart(id)
    dispatch(actionDelete)
  }

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 250)
    })
  }, [])

  return (
    <>
      <div className={scroll ? 'header active' : 'header '}>
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
            <NavLink to={'#'}>Pages</NavLink>
            <div className="header-dropdown">
              <ul>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/cart">Shoping Cart</Link>
                </li>
                <li>
                  <Link to="/checkout">Checkout</Link>
                </li>
                <li>
                  <Link to="/wishlish">Wishlist</Link>
                </li>
                <li>
                  <Link to="/compare">Compare</Link>
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
              <span className="cart-count">{quantity ? quantity : '0'}</span>
              <ul className="minicart">
                {cartItems.length !== 0 ? (
                  cartItems.map((item, index) => {
                    return (
                      <li className="cart-item" key={index}>
                        <div className="cart-img">
                          <Link to={`/details/${item.id}`}>
                            <img src={item.product.img1} alt="" />
                          </Link>
                        </div>
                        <div className="cart-content">
                          <h3>
                            <Link to={`/details/${item.id}`}>
                              {item.product.name}
                            </Link>
                          </h3>

                          <div className="cart-price">
                            <span>
                              ${item.product.mainPrice} * {item.quantity}
                            </span>{' '}
                            ={' '}
                            <span>
                              {' '}
                              ${item.product.mainPrice * item.quantity}
                            </span>
                          </div>
                        </div>
                        <div
                          className="cart-icon"
                          onClick={() => handleDelete(item.id)}
                        >
                          <FaRegTrashAlt />
                        </div>
                      </li>
                    )
                  })
                ) : (
                  <h3>Product Not Found</h3>
                )}
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
