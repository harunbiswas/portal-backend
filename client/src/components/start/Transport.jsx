import { useContext, useEffect } from 'react'
import Title from '../Title'
import StartContext from '../context/StartContext'

export default function Transport() {
  const { data, setData, changeHandler } = useContext(StartContext)

  useEffect(() => {
    setData(prev => {
      return {
        ...prev,
        transportMethod: 'Transported',
      }
    })
  }, [])

  return (
    <div className='start-transport'>
      <Title title='Transport method' />
      <div className='start-transport-form'>
        <strong>Condition of {data?.registrationNumber || ''}</strong>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <input
              onChange={e => {
                setData(prev => {
                  return {
                    ...prev,
                    hosValidMot: e.target.checked,
                  }
                })
              }}
              checked={data?.hosValidMot}
              type='checkbox'
            />
            <label htmlFor=''>Hos Valid MOT</label>
          </div>
          <div className='form-group'>
            <input
              onChange={e => {
                setData(prev => {
                  return {
                    ...prev,
                    Roadworthy: e.target.checked,
                  }
                })
              }}
              checked={data?.Roadworthy}
              type='checkbox'
            />
            <label htmlFor=''>Roadworthy</label>
          </div>
        </div>
        <strong>Preferred transport method</strong>
        <div className='form-group-wrp'>
          <div className='form-group'>
            <input
              onChange={e => {
                setData(prev => {
                  return {
                    ...prev,
                    transportMethod: e.target.value,
                  }
                })
              }}
              value='Transported'
              checked={data?.transportMethod === 'Transported'}
              name='method'
              type='radio'
            />
            <label htmlFor=''>Transported</label>
          </div>
          <div className='form-group'>
            <input
              checked={data?.transportMethod === 'Driven'}
              value='Driven'
              name='method'
              type='radio'
              onChange={e => {
                setData(prev => {
                  return {
                    ...prev,
                    transportMethod: e.target.value,
                  }
                })
              }}
            />
            <label htmlFor=''>Driven</label>
          </div>
          <div className='form-group'>
            <input
              checked={data?.transportMethod === 'Either'}
              value='Either'
              name='method'
              type='radio'
              onChange={e => {
                setData(prev => {
                  return {
                    ...prev,
                    transportMethod: e.target.value,
                  }
                })
              }}
            />
            <label htmlFor=''>Either</label>
          </div>
        </div>
      </div>
    </div>
  )
}
