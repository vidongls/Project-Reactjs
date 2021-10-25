import { React } from 'react'
import { Link } from 'react-router-dom'

function HeaderDetail(props) {
  const { title, curpage } = props
  return (
    <>
      <div className="header-detail">
        <div className="container">
          <div className="header-detail__content">
            <h1>{title}</h1>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <span>{curpage}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderDetail
