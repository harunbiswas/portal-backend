import { useContext } from 'react'
import Title from '../Title'
import StartContext from '../context/StartContext'

const currentDate = new Date().toISOString().split('T')[0]
export default function TimeScale() {
  const { data, setData, changeHandler } = useContext(StartContext)

  return (
    <div className='start-timescale'>
      <Title title='Timescales' />
      <div className='start-timescale-form'>
        {' '}
        <div className='start-timescale-form-left'>
          <h4>Collection time</h4>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Date</label>
              <input
                name='cDate'
                value={data?.cDate}
                onChange={changeHandler}
                type='date'
                min={currentDate}
              />
            </div>
          </div>{' '}
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Time</label>
              <input
                name='cTime'
                value={data?.cTime}
                onChange={changeHandler}
                type='time'
                step='3600'
              />
            </div>
          </div>
          <p>NOTE: The car must be prepped and ready by this time</p>
        </div>
        <div className='start-timescale-form-left'>
          <h4>Delivery time</h4>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Date</label>
              <input
                name='dDate'
                value={data?.dDate}
                onChange={changeHandler}
                type='date'
                min={currentDate}
              />
            </div>
          </div>{' '}
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Time</label>
              <input
                name='dTime'
                value={data?.dTime}
                onChange={changeHandler}
                type='time'
                step='3600'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
