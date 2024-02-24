import express from 'express'
// loginSignup.js
import { signupController } from '../controllers/loginSignupController.js'
import { signupValidator } from '../middlewares/loginSignup/loginSignupValidateor.js'
import validationResultAll from '../middlewares/validationResult.js'

// rest of your code

// You can use signupController in this file now

const router = express.Router()

router.post('/', signupValidator, validationResultAll, signupController)

const loginRouter = router

export default loginRouter
