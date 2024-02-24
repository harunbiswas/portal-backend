import axios from 'axios'
import express from 'express'
import * as WelcomeController from '../controllers/WelcomeController.js'
import loginRouter from './loginSignup.js'
const router = express.Router()

// default route
router.get('/', (req, res) => {
  res.status(200).json({
    data: 'api',
  })
})

// get vihacle data
router.get('/vihicle', async (req, res) => {
  try {
    const { reg } = req.query
    const result = await axios.post(
      'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
      { registrationNumber: reg },
      {
        headers: {
          'x-api-key': 'LTNvq67BYV17Aq6A4UYzs1nQB6L4hsDeKtUw6Uw5',
        },
      }
    )

    res.status(200).json(result.data)
  } catch (e) {
    // console.log(e)
    res.status(400).json('data not found')
  }
})

// Define route for "/WelcomeAPI" endpoint
router.get('/welcome', WelcomeController.Welcome)

router.use('/loginsignup', loginRouter)

export default router
