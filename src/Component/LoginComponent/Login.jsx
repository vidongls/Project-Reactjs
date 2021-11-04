import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { LoginAction } from '../../Slice/LoginSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
// import Grow from '@material-ui/core/Grow'

const schema = yup.object().shape({
  password: yup.string().required('Vui lòng nhập mật khẩu'),
  userName: yup.string().required('Không được bỏ trống'),
})

function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    const userData = {
      userName: data.userName,
      password: data.password,
    }

    const action = LoginAction(userData)
    const resultAction = await dispatch(action)
    let user = unwrapResult(resultAction)
    if (user.length !== 0) {
      enqueueSnackbar('Đăng nhập thành công', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        autoHideDuration: 3000,
        variant: 'success',
        // TransitionComponent: Grow,
      })
    } else {
      enqueueSnackbar('Đăng nhập thất bại', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        autoHideDuration: 3000,
        variant: 'error',
        // TransitionComponent: Grow,
      })
    }
  }

  return (
    <div className="login">
      <div className="container">
        <div className="login-basic">
          <h3>Login From Here</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4>
              Username <span>*</span>
            </h4>
            <input
              id="userName"
              placeholder="Enter Username..."
              {...register('userName', { required: true })}
            />
            {errors.userName && (
              <div className="error">Please provide your username</div>
            )}
            <h4>
              Password <span>*</span>
            </h4>
            <input
              type="password"
              id="password"
              placeholder="Enter password..."
              {...register('password', { required: true })}
            />
            {errors.password && (
              <div className="error">Please provide a password</div>
            )}
            <div className="login-action">
              <span className="check">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Remember me!</label>
              </span>
              <span>Lost your password?</span>
            </div>

            <input type="submit" className="btn" value="Login Now" />
          </form>
          <div className="login-divide">
            <span>or</span>
          </div>
          <Link to="/register" className="login-btnregis btn">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
