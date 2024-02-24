import Title from '../Title'

export default function Transport() {
  return (
    <div className='start-transport'>
      <Title title='Transport method' />
      <div className='start-transport-form'>
        <strong>Condition of KU17GMY</strong>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <input type='checkbox' />
            <label htmlFor=''>Hos Valid MOT</label>
          </div>
          <div className='form-group'>
            <input type='checkbox' />
            <label htmlFor=''>Roadworthy</label>
          </div>
        </div>
        <strong>Preferred transport method</strong>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <input name='method' type='radio' />
            <label htmlFor=''>Transported</label>
          </div>
          <div className='form-group'>
            <input name='method' type='radio' />
            <label htmlFor=''>Driven</label>
          </div>
          <div className='form-group'>
            <input name='method' type='radio' />
            <label htmlFor=''>Either</label>
          </div>
        </div>
      </div>
    </div>
  )
}
