import axios from 'axios'
import { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import values from '../../values'

export default function UploadPdf({ pdf, setPdf, login, setData }) {
  const { id } = useParams()
  const [error, setError] = useState(false)
  const [file, setFile] = useState(null)

  const uploadHandler = () => {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('identi', pdf)
      axios
        .put(`${values.base_url}/move/${id}`, formData, {
          headers: {
            token: login?.token,
          },
        })
        .then(d => {
          setPdf(false)
          setData(d?.data)
        })
        .catch(e => {
          console.log(e)
        })
    } else {
      setError(true)
    }
  }

  const handleFileChange = e => {
    setError(false)
    setFile(e.target.files[0])
  }
  return (
    <div className='upload-pdf-wrp'>
      <div className='upload-pdf'>
        <div className='upload-pdf-top'>
          <h4>Upload your {pdf}</h4>

          <button onClick={() => setPdf(null)}>
            <IoCloseSharp />
          </button>
        </div>

        <div className='upload-pdf-body'>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Upload {pdf}</label>
              <input
                onChange={handleFileChange}
                className={(error && 'error') || ''}
                type='file'
                accept='.pdf'
                capture='environment'
              />
            </div>
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <button onClick={uploadHandler}>Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
