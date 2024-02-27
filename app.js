import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import hpp from 'hpp'
import mongoose from 'mongoose'
import path from 'path'
import router from './src/routes/api.js'
import {
  MAX_JSON_SIZE,
  MAX_URL_ENCODED_SIZE,
  MONGODB_CONNECTION,
  REQUEST_LIMIT_NUMBER,
  REQUEST_LIMIT_TIME,
  WEB_CACHE,
} from './src/utility/Config.js'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

// Middleware
app.use(cors())
app.use(helmet())
app.use(hpp())

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups')
  res.setHeader('Content-Security-Policy', 'default-src https:')

  next()
})

// Body parsing middleware with increased limit
app.use(express.json({ limit: MAX_JSON_SIZE }))
app.use(express.urlencoded({ limit: MAX_URL_ENCODED_SIZE }))

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
})
app.use(limiter)

// Web cache validation and conditional requests in HTTP
app.set('etag', WEB_CACHE)

// MongoDB connection
mongoose
  .connect(MONGODB_CONNECTION, { autoIndex: true })
  .then(() => {
    console.log('Database Connected')
  })
  .catch(err => {
    console.error('Database connection error:', err)
  })

// API routes
app.use('/api', router)

// Serve static assets for React front end
app.use(express.static('client/dist'))

app.use('/api', express.static(path.join(__dirname, 'files')))

// Serve React front end for all routes not handled by the API
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

export default app
