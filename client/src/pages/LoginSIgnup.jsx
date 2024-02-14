import { useState } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import Title from '../components/Title'

export default function LoginSignup() {
  const [showPass, setShowPass] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  return (
    <div className='login-signup'>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <Title
          title={(isSignUp && 'Signup an accout') || 'Sign in to your account'}
        />
        {isSignUp && (
          <div className='form-wrp'>
            <div className='form-group'>
              <label htmlFor='fName'>First Name</label>
              <input type='text' placeholder='Frist Name' id='fName' />
            </div>
            <div className='form-group'>
              <label htmlFor='lName'>Last Name</label>
              <input type='text' placeholder='Last Name' id='lName' />
            </div>
          </div>
        )}
        <div className='form-wrp'>
          <div className='form-group'>
            <label htmlFor='email'>email</label>
            <input type='email' placeholder='example#domain.com' id='email' />
          </div>
        </div>{' '}
        <div className='form-wrp'>
          <div className='form-group'>
            <label htmlFor='password'>password</label>
            <input
              type={!showPass && 'password'}
              placeholder='Password'
              id='password'
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
