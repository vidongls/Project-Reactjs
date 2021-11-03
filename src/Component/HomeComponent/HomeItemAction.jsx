import { React, useState } from 'react'
import { FaRegEye, FaExchangeAlt, FaShoppingCart } from 'react-icons/fa'

function HomeItemAction(props) {
  const [state, setState] = useState(false)

  const handleClass = () => {
    setState(!state)
  }
  const { id } = props
  const handleAdd = () => {
    console.log('testt')
  }
  return (
    <>
      <div className="product-action">
        <div className="product-action__item" onClick={handleAdd}>
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
