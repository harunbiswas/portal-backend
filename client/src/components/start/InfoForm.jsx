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

        {/* <div className='form-group-wrp'>
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
        </div> */}
      </div>
    </div>
  )
}
