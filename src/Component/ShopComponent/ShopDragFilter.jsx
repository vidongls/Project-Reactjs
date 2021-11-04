import React from 'react'
import Slider from '@mui/material/Slider'

function valuetext(value) {
  return `${value}°C`
}

const minDistance = 10
function ShopDragFilter(props) {
  const [value1, setValue1] = React.useState([0, 300])

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }
  return (
    <div className="sidebar-drag">
      <h3>FILTER SELECTION</h3>

      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
      <div className="sidebar-drag__price">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>$0</span> - <span>$257</span>
        </div>
        <span className="filter">Filter</span>
      </div>
    </div>
  )
}

export default ShopDragFilter
