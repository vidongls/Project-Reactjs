import { React, useState } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Paginations = ({ productPerPage, totalProduct, paginate }) => {
  const pageNumbers = []
  const [state, setState] = useState(false)
  const [page, setPage] = useState(1)
  const handleChange = (event, value) => {
    setPage(value)
    paginate(value)
    console.log(value)
  }
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <ul className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={pageNumbers.length}
            page={page}
            onChange={handleChange}
            variant="outlined"
          />
        </Stack>
      </ul>
    </>
  )
}

export default Paginations
