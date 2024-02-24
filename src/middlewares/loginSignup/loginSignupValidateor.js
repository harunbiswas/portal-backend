import { check } from 'express-validator'

const signupValidator = [
  check('name').notEmpty().withMessage('Company name is required!').trim(),
  check('email').isEmail().withMessage('Email not valid').trim(),
  check('pass')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password should be minimum 6 caractors'),
]

export { signupValidator }
