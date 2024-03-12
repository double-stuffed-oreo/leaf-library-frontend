import React from 'react'
import { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const SignUp = ({signUp}) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": {
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
      }
    }
    signUp(userInfo)
    navigate("/")
    e.target.reset()
  }
  return (
      <div className='auth-body'>
        <h2>Sign Up</h2>
      <form className="form-div" ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder='email'/>
        <br />
        Password: <input type='password' name='password' placeholder='password' />
        <br />
        Confirm Password: <input type='password' name='password_confirmation' placeholder='confirm password' />
        <br />
        <input className='actions' type='submit' value='submit'/>
        <br></br>
        <div>
        Already registered? <NavLink to="/signin">Sign In</NavLink>
        </div>
      </form>
    </div>
  )
}

export default SignUp