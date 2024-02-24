import Title from '../Title'

const currentDate = new Date().toISOString().split('T')[0]
export default function TimeScale() {
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
              <input type='date' min={currentDate} />
            </div>
          </div>{' '}
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Time</label>
              <input type='time' step='3600' />
            </div>
          </div>
          <p>NOTE: The car must be prepped and ready by this time</p>
        </div>
        <div className='start-timescale-form-left'>
          <h4>Collection time</h4>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Date</label>
              <input type='date' min={currentDate} />
            </div>
          </div>{' '}
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Time</label>
              <input type='time' step='3600' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
