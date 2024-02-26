import { useState } from 'react'

export default function DetailsBody({ e, data, isBody }) {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className='details-body '>
      <div className={`details-body-bottom show`}>
        <h5>Transport method</h5>
        <div className='info-wrp'>
          <div className='info'>
            <strong className='left'>Condition of outbound vehicle</strong>
            <span>
              {(data?.hosValidMot && 'Hos valid MOT') || 'Does not have MOT'}
              {(data?.Roadworthy && 'and is Roadworthy') ||
                'and is not roadworthy'}
            </span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Preferred transport method</strong>
            <span>{data?.transportMethod}</span>
          </div>{' '}
        </div>
        <h5>Customer reference and notes</h5>
        <div className='info-wrpd'>
          <div className='info'>
            <strong className='left'>Customer reference</strong>
            <span>{data?.customarReference || '-'}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Delivery notes</strong>
            <span>{data?.deliveryNote || '-'}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Special notes</strong>
            <span>{data?.specialNote || '-'}</span>
          </div>{' '}
        </div>
      </div>
    </div>
  )
}
