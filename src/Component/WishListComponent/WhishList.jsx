import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function WhishList(props) {
  return (
    <div className="table">
      <div className="container">
        <div className="table-content">
          <table>
            <thead>
              <tr>
                <th>Images</th>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/">
                    <img
                      src="https://vue-plum-chi.vercel.app/img/product/pro29.jpg"
                      alt=""
                    />
                  </Link>
                </td>
                <td>
                  <Link to="/">Raglan Baseball Style Shirt </Link>
                </td>
                <td>
                  <span>$190.00</span>
                </td>
                <td>
                  <div className="btn btn-add">add to cart</div>
                </td>
                <td>
                  <span>$190.00</span>
                </td>
                <td>
                  <div className="cart-remove">
                    <FaRegTrashAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/">
                    <img
                      src="https://vue-plum-chi.vercel.app/img/product/pro29.jpg"
                      alt=""
                    />
                  </Link>
                </td>
                <td>
                  <Link to="/">Raglan Baseball Style Shirt </Link>
                </td>
                <td>
                  <span>$190.00</span>
                </td>
                <td>
                  <div className="btn btn-add">add to cart</div>
                </td>
                <td>
                  <span>$190.00</span>
                </td>
                <td>
                  <div className="cart-remove">
                    <FaRegTrashAlt />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default WhishList
