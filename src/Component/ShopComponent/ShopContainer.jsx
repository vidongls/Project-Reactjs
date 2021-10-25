import { React, useState } from 'react'
import PropTypes from 'prop-types'
import Tab from '@mui/material/Tab'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import TabContext from '@material-ui/lab/TabContext'
import { FaThList, FaListUl } from 'react-icons/fa'

ShopContainer.propTypes = {}

function ShopContainer(props) {
  const [value, setValue] = useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className="shop">
      <div className="container">
        <div className="shop-content">
          <div className="shop-banner">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/shop-banner.jpg?alt=media&token=0418f299-2cd1-4442-964e-150f2b5caf34"
              alt=""
            />
          </div>
          <TabContext value={value}>
            <div className="shop-midoption">
              <div className="shop-countshow">
                <p>Showing 01–06 of 28 results</p>
              </div>
              <TabList
                className="shop-tab"
                onChange={handleChange}
                TabIndicatorProps={{
                  style: {
                    display: 'none',
                  },
                }}
              >
                <Tab
                  className="shop-tab__item"
                  label={<FaListUl />}
                  value={false}
                />

                <Tab
                  className="shop-tab__item"
                  label={<FaThList />}
                  value={true}
                />
              </TabList>
            </div>
            <div className="shop-list">
              <TabPanel value={true}>Item One</TabPanel>
              <TabPanel value={false}>Item Two</TabPanel>
            </div>
          </TabContext>
        </div>
        <div className="shop-sort">sort</div>
      </div>
    </div>
  )
}

export default ShopContainer
