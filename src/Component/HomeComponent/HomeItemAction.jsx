import { React, useState } from 'react'
import PropTypes from 'prop-types'
import { FaRegEye, FaExchangeAlt, FaShoppingCart } from 'react-icons/fa'

HomeItemAction.propTypes = {}

function HomeItemAction(props) {
  const [state, setState] = useState(false)

  const handleClass = () => {
    setState(!state)
  }

  return (
    <>
      <div className="product-action">
        <div className="product-action__item">
          <FaShoppingCart />
        </div>
        <div className="product-action__item">
          <FaRegEye />
        </div>
        <div
          onClick={handleClass}
          className={
            state ? 'product-action__item active' : 'product-action__item'
          }
        >
          <FaExchangeAlt />
        </div>
      </div>
    </>
  )
}

export default HomeItemAction
