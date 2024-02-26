import { useContext } from 'react'
import Title from '../Title'
import StartContext from '../context/StartContext'

export default function InfoForm() {
  const { data, setData, changeHandler } = useContext(StartContext)

  return (
    <div className='start-info'>
      <Title title='Vehicle information' />

      <div className='start-info-form'>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Registration</label>
            <input disabled value={data?.registrationNumber} type='text' />
          </div>
        </div>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Make</label>
            <input
              onChange={changeHandler}
              type='text'
              name='make'
              value={data?.make}
              className={!data.make && 'error'}
            />
          </div>
        </div>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Model</label>
            <input
              onChange={changeHandler}
              type='text'
              name='euroStatus'
              value={data?.euroStatus}
              className={!data.euroStatus && 'error'}
            />
          </div>
        </div>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Colour</label>
            <input
              onChange={changeHandler}
              type='text'
              name='colour'
              value={data?.colour}
              className={!data.colour && 'error'}
            />
          </div>{' '}
        </div>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Weight (Kg)</label>
            <input
              onChange={e => {
                const inputValue = e.target.value
                // Check if the entered value is a valid number
                if (!isNaN(inputValue)) {
                  setData(prevData => {
                    return {
                      ...prevData,
                      revenueWeight: Number(inputValue),
                    }
                  })
                }
              }}
              type='text'
              name='revenueWeight'
              value={data?.revenueWeight}
              className={!data.revenueWeight && 'error'}
            />
          </div>{' '}
          <div className='form-group'>
            <label htmlFor=''>Wheelbase</label>
            <select onChange={changeHandler} name='wheelbase'>
              <option value=''>--Please select--</option>
              <option value='Sort'>Sort</option>
              <option value='Medium'>Medium</option>
              <option value='long'>long</option>
              <option value='Unknown'>Unknown</option>
            </select>
          </div>
        </div>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Fuel Type</label>
            <select
              onChange={changeHandler}
              name='fuelType'
              value={data?.fuelType}
              className={!data.fuelType && 'error'}
            >
              <option value=''>--Please select--</option>
              <option value='PETROL'>Petrol</option>
              <option value='DIESEL'>Diesel</option>
              <option value='ELECTRIC'>Electric</option>
              <option value='OTHER'>Other</option>
            </select>
          </div>{' '}
        </div>{' '}
      </div>
    </div>
  )
}
