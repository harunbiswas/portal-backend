import express from 'express'
// loginSignup.js
import {
  loginController,
  signupController,
} from '../controllers/loginSignupController.js'
import {
  loginValidator,
  signupValidator,
} from '../middlewares/loginSignup/loginSignupValidateor.js'
import validationResultAll from '../middlewares/validationResult.js'

const router = express.Router()

router.post('/', signupValidator, validationResultAll, signupController)
router.post('/login', loginValidator, validationResultAll, loginController)

const loginRouter = router

export default loginRouter
