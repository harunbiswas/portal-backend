import { useState } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import Title from '../components/Title'

export default function LoginSignup() {
  const [showPass, setShowPass] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  const [data, setData] = useState({
    name: '',
    email: '',
    pass: '',
  })

  const [error, setError] = useState({
    name: true,
  })

  const changeHandler = e => {
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
            <div className={`form-group ${(error.name && 'error') || ''}`}>
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
          <div className='form-group'>
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
          <div className='form-group'>
            <label htmlFor='password'>password</label>
            <input
              type={!showPass && 'password'}
              value={data?.pass}
              placeholder='Password'
              id='password'
              name='pass'
              onChange={changeHandler}
            />
            <button onClick={() => setShowPass(!showPass)} className='eye-btn'>
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
