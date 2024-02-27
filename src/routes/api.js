import axios from 'axios'
import express from 'express'
import * as WelcomeController from '../controllers/WelcomeController.js'
import {
  addMoveController,
  getMove,
  getMoves,
  updateMove,
} from '../controllers/addMoveController.js'
import Auth from '../middlewares/Auth.js'
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

//get google address
router.get('/address', async (req, res) => {
  const { post } = req.query
  const apiKey = 'AIzaSyAyTa5kSsNidP5kRUs-bDf859CHU3ZtXu0'
  const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
    post
  )}&key=${apiKey}`

  try {
    const response = await axios.get(apiUrl)
    const responseData = response.data

    // Initialize the visited set to handle circular references
    const visited = new Set()

    // Use JSON.stringify with a replacer function to handle circular references
    const jsonString = JSON.stringify(responseData, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (visited.has(value)) {
          return '[Circular]'
        }
        visited.add(value)
      }
      return value
    })

    res.status(200).json(JSON.parse(jsonString))
  } catch (err) {
    console.log(err)
    res.status(400).json(err?.response)
  }
})

// Define route for "/WelcomeAPI" endpoint
router.get('/welcome', WelcomeController.Welcome)

router.post('/start', Auth, addMoveController)

// get all moves
router.get('/moves', Auth, getMoves)

// get single move
router.get('/move/:id', Auth, getMove)

router.put('/move/:id', Auth, updateMove)

router.use('/loginsignup', loginRouter)

export default router
