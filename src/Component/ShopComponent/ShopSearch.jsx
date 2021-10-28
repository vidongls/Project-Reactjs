import React from 'react'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'
ShopSearch.propTypes = {}

function ShopSearch(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className="sidebar-search">
      <h3>Search by</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Your keyword...."
          {...register('searchInput', { required: true })}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  )
}

export default ShopSearch
