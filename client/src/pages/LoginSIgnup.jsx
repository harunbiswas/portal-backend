import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import values from '../values'

export default function LoginSignup() {
  const [showPass, setShowPass] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const navigate = useNavigate()

  const [data, setData] = useState({
    name: '',
    email: '',
    pass: '',
  })

  const [error, setError] = useState()

  const changeHandler = e => {
    setError(prev => {
      return {
        ...prev,
        [e.target.name]: false,
      }
    })
    setData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const submitHandler = e => {
    e.preventDefault()

    if (isSignUp) {
      axios
        .post(`${values.base_url}/loginsignup`, data)
        .then(d => {
          setIsSignUp(false)
        })
        .catch(e => {
          setError(e.response?.data)
        })
    } else {
      axios
        .post(`${values.base_url}/loginsignup/login`, data)
        .then(d => {
          Cookies.set('login', JSON.stringify(d?.data), {
            expires: 30,
            path: '/',
          })
          window.location.reload()
        })
        .catch(e => {
          setError(e.response?.data)
        })
    }
  }
  return (
    <div className='login-signup'>
      <form className='form' onSubmit={submitHandler}>
        <Title
          title={(isSignUp && 'Signup an accout') || 'Sign in to your account'}
        />
        {isSignUp && (
          <div className='form-wrp'>
            <div className={`form-group ${(error?.name && 'error') || ''}`}>
              <label htmlFor='fName'>Company Name</label>
              <input
                value={data?.name}
                type='text'
                placeholder='Frist Name'
                id='fName'
                name='name'
                onChange={changeHandler}
              />
            </div>
          </div>
        )}
        <div className='form-wrp'>
          <div className={`form-group ${(error?.email && 'error') || ''}`}>
            <label htmlFor='email'>email</label>
            <input
              value={data?.email}
              type='email'
              placeholder='example@domain.com'
              id='email'
              name='email'
              onChange={changeHandler}
            />
          </div>
        </div>{' '}
        <div className='form-wrp'>
          <div className={`form-group ${(error?.pass && 'error') || ''}`}>
            <label htmlFor='password'>password</label>
            <input
              type={!showPass && 'password'}
              value={data?.pass}
              placeholder='Password'
              id='password'
              name='pass'
              onChange={changeHandler}
            />
            <button
              type='button'
              onClick={() => setShowPass(!showPass)}
              className='eye-btn'
            >
              {(showPass && <BsEyeSlashFill />) || <BsEyeFill />}
            </button>
          </div>
        </div>
        <div className='form-wrp'>
          <div className='form-group'>
            <button className='submit' type='submit'>
              {(!isSignUp && ' Sign in') || 'Crate an account'}{' '}
            </button>
          </div>
        </div>{' '}
        <div className='form-wrp'>
          <div className='form-group'>
            <p>
              {(isSignUp && 'Already you have an account?') ||
                'New to Auto Management?'}{' '}
              <button onClick={() => setIsSignUp(!isSignUp)}>
                {(isSignUp && 'Sign In') || 'Register'}
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
