import { validationResult } from 'express-validator'

const validationResultAll = async (req, res, next) => {
  const errors = validationResult(req)
  const mappedErrors = errors.mapped()

  if (Object.keys(mappedErrors).length === 0) {
    next()
  } else {
    res.status(400).json(mappedErrors)
  }
}

export default validationResultAll
