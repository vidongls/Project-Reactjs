import { React, useState, useEffect } from 'react'
import '../../media/css/style.css'
import logo from '../../media/img/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { FaRegUser, FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa'
import HeaderCart from './HeaderCart'
import { useForm } from 'react-hook-form'
import { searchData } from '../../Slice/ProductSearchSlice'
import { useHistory } from 'react-router-dom'
import HeaderMenuMoblie from './HeaderMenuMoblie'

function Header(props) {
  const [showMenu, setShowMenu] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [scroll, setScroll] = useState(false)
  const [search, setSearch] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const { register, handleSubmit } = useForm()
  let user = useSelector((state) => state.login.currentUser[0])

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)

    const checkLogin = () => {
      if (user !== undefined) {
        setShowLogin(false)
      }
    }
    checkLogin()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  const onSubmit = (data) => {
    // console.log(data)
    let searchString = data.search
    const action = searchData(searchString)
    dispatch(action)
    history.push(`/shop`)
  }

  const handleOpenSearch = () => {
    setSearch(true)
  }

  const handleCloseSearch = (e) => {
    e.stopPropagation()
    setSearch(false)
  }
  return (
    <>
      <div className={scroll ? 'header active' : 'header'}>
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
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                {showLogin ? (
                  <>
                    <li>
                      <Link to="/login">login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                ) : null}

                <li>
                  <Link to="/cart">Shoping Cart</Link>
                </li>
                <li>
                  <Link to="/checkout">Checkout</Link>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
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
            <li className="btn-search" onClick={handleOpenSearch}>
              <FaSearch />
            </li>
            {search && (
              <div className="search">
                <div className="search-inner">
                  <FaTimes
                    className="search-close"
                    onClick={handleCloseSearch}
                  />
                  <div className="search-cell">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="search-field">
                        <input
                          placeholder="Search Entire Store..."
                          {...register('search', { required: true })}
                        />
                      </div>
                      <button type="submit" className="btn">
                        <FaSearch />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
            <li className="btn-user">
              <Link
                style={{ color: 'inherit' }}
                to={showLogin ? '/login' : '/profile'}
              >
                <FaRegUser />
              </Link>
            </li>
            <li className="btn-cart">
              <FaShoppingCart />
              <HeaderCart />
            </li>
          </ul>
          <div
            className={showMenu ? 'menu-mobile active' : 'menu-mobile'}
            onClick={handleMenu}
          >
            <span></span>
          </div>
        </div>
        {showMenu ? <HeaderMenuMoblie /> : null}
      </div>
    </>
  )
}

export default Header
