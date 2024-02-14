import axios from 'axios'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function StartForm({ isForm, setIsForm }) {
  const [reg, setReg] = useState('')
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  const searchHandler = () => {
    if (data) {
      navigate('start')
      setIsForm(false)
      setData(null)
    } else {
      if (reg) {
        axios
          .get(`http://localhost:4000/api/vihicle?reg=${reg}`, {
            headers: {
              'x-api-key': 'LTNvq67BYV17Aq6A4UYzs1nQB6L4hsDeKtUw6Uw5',
              'Access-Control-Allow-Origin': '*',
            },
          })
          .then(d => {
            setData(d.data)
          })
          .catch(e => {
            console.log(e)
            setData(null)
          })
      } else {
        setError(true)
      }
    }
  }
  return (
    <div className={`start-form-wrp ${(isForm && 'show') || ''}`}>
      <div className='start-form'>
        <div className='start-form-top'>
          {(!data && (
            <p className='start-form-top-title'>Search for any vehicle</p>
          )) || (
            <button onClick={() => setData(null)}>
              <MdOutlineKeyboardBackspace />
            </button>
          )}
          <button onClick={() => setIsForm(false)}>
            <IoMdClose />
          </button>
        </div>
        <div className='start-form-body'>
          {(!data && (
            <div className='start-form-body-group'>
              <label htmlFor='reg'>Registration</label>
              <input
                value={reg}
                onChange={e => {
                  setReg(e.target.value)
                  setError(false)
                }}
                type='text'
                placeholder='Enter a reg'
                name='reg'
                id='reg'
                className={(error && 'error') || ''}
              />
            </div>
          )) || (
            <div className='start-form-body-group'>
              <h2>
                You search for{' '}
                {data?.registrationNumber +
                  ' ' +
                  data?.motStatus +
                  ' ' +
                  data?.make +
                  ' ' +
                  data?.fuelType}
              </h2>
            </div>
          )}
          <div className='start-form-body-group'>
            <button onClick={searchHandler}>
              {(data && 'Continue') || 'Search for vehicle'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
