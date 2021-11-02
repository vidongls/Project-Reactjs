import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortTopSeller } from '../../Slice/ProductSortSlice'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

function HomeListSellerAction(props) {
  const [value, setValue] = useState('All')

  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    setValue(newValue)

    const actions = sortTopSeller(newValue)
    dispatch(actions)
  }
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      TabIndicatorProps={{
        style: {
          backgroundColor: `transparent`,
        },
      }}
    >
      <Tab className="tab-list" value="All" label="All" />
      <Tab className="tab-list" value="Furniture" label="Furniture" />
      <Tab className="tab-list" value="ManCloth" label="Man Cloth" />
      <Tab className="tab-list" value="Woman Cloth" label="Woman Cloth" />
    </Tabs>
  )
}

export default HomeListSellerAction
