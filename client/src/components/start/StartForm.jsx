import axios from 'axios'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import values from '../../values'

export default function StartForm({ isForm, setIsForm, data, setData }) {
  const [reg, setReg] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState(false)

  const searchHandler = () => {
    if (data) {
      navigate('start')
      setIsForm(false)
      setReg('')
    } else {
      if (reg) {
        setLoading(true)
        axios
          .get(`${values.base_url}/vihicle?reg=${reg}`, {
            headers: {
              'x-api-key': 'LTNvq67BYV17Aq6A4UYzs1nQB6L4hsDeKtUw6Uw5',
              'Access-Control-Allow-Origin': '*',
            },
          })
          .then(d => {
            setData(d.data)
            setLoading(false)
          })
          .catch(e => {
            setLoading(false)
            setData(null)
            setError(true)
            setErrMsg(true)
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
                  setErrMsg(false)
                }}
                type='text'
                placeholder='Enter a reg'
                name='reg'
                id='reg'
                className={(error && 'error') || ''}
              />
              {errMsg && <span>Vehicle not found! </span>}
            </div>
          )) ||
            (data && (
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
            ))}
          <div className='start-form-body-group'>
            <button onClick={searchHandler}>
              {(data && 'Continue') ||
                (loading && 'searching...') ||
                'Search for vehicle'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
