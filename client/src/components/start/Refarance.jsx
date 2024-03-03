import { useContext } from 'react'
import Title from '../Title'
import StartContext from '../context/StartContext'

export default function Refarance() {
  const { data, setData, changeHandler } = useContext(StartContext)
  return (
    <div className='start-refarance'>
      <Title title='Transport method' />
      <div className='start-refarance-form'>
        {/* <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Customer reference</label>
            <input
              name='customarReference'
              value={data?.customarReference}
              onChange={changeHandler}
              type='text'
            />
          </div>
        </div> */}
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Delivery notes</label>
            <textarea
              name='deliveryNote'
              value={data?.deliveryNote}
              onChange={changeHandler}
              placeholder='Enter your notes here'
            ></textarea>
          </div>
        </div>{' '}
        {/* <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Special notes</label>
            <textarea
              name='specialNote'
              value={data?.specialNote}
              onChange={changeHandler}
              placeholder='Enter your special notes here'
            ></textarea>
          </div>
        </div> */}
      </div>
    </div>
  )
}
