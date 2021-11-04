import React from 'react'
import { useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'
import { searchData } from '../../Slice/ProductSearchSlice'
import { useDispatch } from 'react-redux'

function ShopSearch(props) {
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    let searchString = data.search
    const action = searchData(searchString)
    dispatch(action)
  }
  return (
    <div className="sidebar-search">
      <h3>Search by</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Your keyword...."
          {...register('search', { required: true })}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  )
}

export default ShopSearch
