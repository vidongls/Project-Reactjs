import { React, useEffect, useState } from 'react'
import { FaArrowUp, FaHeart, FaExchangeAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function SideAction(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="side">
      <div
        className={scroll ? 'side-toTop active' : 'side-toTop '}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </div>
      <div className="side-topAction">
        <Link to="/wishlist">
          <FaHeart />
          <span>0</span>
        </Link>
      </div>
      <div className="side-topAction compare">
        <Link to="/compare">
          <FaExchangeAlt />
          <span>0</span>
        </Link>
      </div>
    </div>
  )
}

export default SideAction
