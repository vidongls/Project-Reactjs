import { React, useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useSnackbar } from 'notistack'
import Button from '@mui/material/Button'
import { FaHeart, FaHourglass } from 'react-icons/fa'
import Grow from '@material-ui/core/Grow'

DetailAction.propTypes = {}

function DetailAction(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [alignment, setAlignment] = useState('left')

  const enque = (message, status) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      autoHideDuration: 2000,
      variant: status,
      TransitionComponent: Grow,
    })
  }
  const handleClick = () => {
    enque('Add item in wishlist', 'success')
  }

  const handleIncrease = () => {
    // enque('Add item in Cart', 'success')
  }

  const handleDecrease = () => {
    // enque('Remove item from Cart', 'error')
  }
  const handleAddCart = () => {
    enque('Add item in Cart', 'success')
  }
  return (
    <div className="detail-action">
      <div className="detail-action__count">
        <div className="detail-action__quantity">
          <p>0</p>
          <Button onClick={handleDecrease} color="secondary">
            -
          </Button>
          <Button onClick={handleIncrease} color="secondary">
            +
          </Button>
        </div>
        <div className="detail-action__icon">
          <Button
            value="right"
            onClick={handleClick}
            aria-label="right aligned"
            color="secondary"
          >
            <FaHeart />
          </Button>
          <Button color="secondary">
            <FaHourglass />
          </Button>
        </div>
      </div>
      <div className="detail-action__btn">
        <div onClick={handleAddCart} className="btn">
          purchase now
        </div>
      </div>
    </div>
  )
}

export default DetailAction
