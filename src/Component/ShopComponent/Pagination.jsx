import { React, useState } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
const Pagination = ({ productPerPage, totalProduct, paginate }) => {
  const pageNumbers = []
  const [state, setState] = useState(false)
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i)
  }
  const handleClass = () => {
    setState(!state)
  }
  return (
    <>
      <ul className="pagination">
        <li className="pagination-pre">
          <FaAngleDoubleLeft />
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <div onClick={(e) => paginate(number)}>{number}</div>
          </li>
        ))}
        <li className="pagination-next">
          <FaAngleDoubleRight />
        </li>
      </ul>
    </>
  )
}

export default Pagination
