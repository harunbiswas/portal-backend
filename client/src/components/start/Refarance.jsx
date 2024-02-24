import Title from '../Title'

export default function Refarance() {
  return (
    <div className='start-refarance'>
      <Title title='Transport method' />
      <div className='start-refarance-form'>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Customer reference</label>
            <input type='text' />
          </div>
        </div>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Delivery notes</label>
            <textarea placeholder='Enter your notes here'></textarea>
          </div>
        </div>{' '}
        <div className='form-group-wrp'>
          <div className='form-group'>
            <label htmlFor=''>Delivery notes</label>
            <textarea placeholder='Enter your special notes here'></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}
