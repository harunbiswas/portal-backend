import Title from '../Title'

export default function InfoForm() {
  return (
    <div className='start-info'>
      <Title title='Vehicle information' />

      <div className='start-info-form'>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Registration</label>
            <input type='text' />
          </div>
        </div>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Make</label>
            <input type='text' />
          </div>
        </div>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Model</label>
            <input type='text' />
          </div>
        </div>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>VIN</label>
            <input type='text' />
          </div>
        </div>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Colour</label>
            <input type='text' />
          </div>{' '}
          <div className='form-group'>
            <label htmlFor=''>MPG</label>
            <input type='text' />
          </div>
        </div>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Weight (Kg)</label>
            <input type='text' />
          </div>{' '}
          <div className='form-group'>
            <label htmlFor=''>Wheelbase</label>
            <input type='text' />
          </div>
        </div>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Fuel Type</label>
            <input type='text' />
          </div>{' '}
        </div>{' '}
      </div>
    </div>
  )
}
