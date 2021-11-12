import React from 'react'
import Avatar from '@mui/material/Avatar'
import { useSelector } from 'react-redux'
import { FaRegUser, FaRegEnvelope } from 'react-icons/fa'

function Profile(props) {
  const user = useSelector((state) => state.login.currentUser[0])
  console.log(user)
  return (
    <div className="profile">
      <div className="container">
        <div className="profile-wrapper">
          <div className="profile-header">
            <h3>
              <Avatar
                src="/broken-image.jpg"
                sx={{
                  width: '100px',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </h3>
          </div>
          <div className="profile-content">
            <div className="profile-text">
              <FaRegUser />
              <span>Email: </span>
              {user.email}
            </div>
            <div className="profile-text">
              <FaRegEnvelope />
              <span>Username: </span>
              {user.userName}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
