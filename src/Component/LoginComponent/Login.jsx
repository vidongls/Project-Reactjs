import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
function Login(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

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
