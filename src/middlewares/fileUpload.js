import multer from 'multer'
import { baseUrl } from '../utility/Config.js'

const pdfUpload = async function (req, res, next) {
  if (req.body?.status) {
    next()
  } else {
    // Set up multer to handle file uploads
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'files/') // Set the destination folder for uploaded files
      },
      filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${file.originalname}`
        cb(null, fileName)
      },
    })

    const upload = multer({ storage: storage }).single('file')

    try {
      // Use the upload middleware to handle the file upload
      upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          // A Multer error occurred during file upload
          res.status(400).json({ error: 'MulterError', message: err.message })
        } else if (err) {
          // An unknown error occurred

          res
            .status(500)
            .json({ error: 'InternalError', message: 'Internal server error' })
        } else {
          const { path } = req.file
          // File uploaded successfully
          const fileUrl = `${baseUrl}/api/${path}`
          if (req.body?.identi === 'POD') {
            req.body.status = 'complete'
            req.body.pod = fileUrl
          } else {
            req.body.poc = fileUrl
          }
          next()
        }
      })
    } catch (err) {
      res.status(500).json('Internal server errors')
    }
  }
}

export { pdfUpload }
