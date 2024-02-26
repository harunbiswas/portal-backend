import { check } from 'express-validator'
import User from '../../Model/user.js'

const signupValidator = [
  check('name').notEmpty().withMessage('Company name is required!').trim(),
  check('email')
    .isEmail()
    .withMessage('Email not valid')
    .trim()
    .custom(async value => {
      // Check if the email already exists in the database
      const existingUser = await User.findOne({ email: value })
      if (existingUser) {
        throw new Error('Email address is already registered')
      }
      return true
    }),
  check('pass')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password should be minimum 6 characters'),
]

const loginValidator = [
  check('email')
    .isEmail()
    .withMessage('Email not valid')
    .trim()
    .custom(async value => {
      // Check if the email already exists in the database
      const existingUser = await User.findOne({ email: value })
      if (!existingUser) {
        throw new Error('Email address is not registered')
      }
      return true
    }),
  check('pass')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password should be minimum 6 characters'),
]

export { loginValidator, signupValidator }
