import { React, useState, useEffect } from 'react'
import { FaRegEye, FaExchangeAlt, FaShoppingCart } from 'react-icons/fa'
import ProductApi from '../../Api/ProductApi'
import { addToCart, setTotalPrice } from '../../Slice/CartSlice'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { addToCompare } from '../../Slice/CompareSlice'

function HomeItemAction(props) {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  const { enqueueSnackbar } = useSnackbar()

  const { id } = props

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getOne(id)
      let data = productItems.data
      setProducts(data)
    }

    getProducts()

    return () => {
      setProducts([])
    }
  }, [])

  const handleAdd = () => {
    if (products.length !== 0) {
      const itemData = {
        product: products,
        id: id,
        quantity: 1,
      }
      const actionAddToCart = addToCart(itemData)
      dispatch(actionAddToCart)
      const actionTotalPrice = setTotalPrice()
      dispatch(actionTotalPrice)
      enqueueSnackbar('Add item in Cart', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        autoHideDuration: 2000,
        variant: 'success',
      })
    }
  }
  const handleCompare = () => {
    if (products.length !== 0) {
      const itemData = {
        product: products,
        id: id,
      }

      const actionCompare = addToCompare(itemData)
      dispatch(actionCompare)

      enqueueSnackbar('Add item in Compare.', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        autoHideDuration: 2000,
        variant: 'success',
      })
    }
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
        <div onClick={handleCompare} className="product-action__item">
          <FaExchangeAlt />
        </div>
      </div>
    </>
  )
}

export default HomeItemAction
