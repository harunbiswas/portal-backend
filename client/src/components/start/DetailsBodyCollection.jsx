import moment from 'moment'
import { useState } from 'react'
import { FaCarSide, FaCaretDown } from 'react-icons/fa6'
import { GoTriangleRight } from 'react-icons/go'

export default function DetailsBodyCollection({ data, isBody }) {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className='details-body'>
      {isBody && (
        <div className='details-body-top'>
          <div className='details-body-top-left'>
            <h2>
              <span onClick={() => setIsShow(!isShow)}>
                {(!isShow && <GoTriangleRight />) || <FaCaretDown />}
              </span>
              <span
                className='collapes-title'
                onClick={() => setIsShow(!isShow)}
              >
                {data?.cTwon + ',' + data?.cPostCode}
              </span>
              <strong>
                <FaCarSide /> {data?.motStatus}, {data?.registrationNumber}
              </strong>
            </h2>
          </div>
          <div className='details-body-top-right'>
            <button disabled={(!data?.poc && true) || false} className='btn'>
              View POC
            </button>
            <button disabled={(!data?.pod && true) || false}>View POD</button>
          </div>
        </div>
      )}
      <div
        className={`details-body-bottom ${
          ((isShow || !isBody) && 'show') || ''
        }`}
      >
        <h5>Collection information</h5>
        <div className='info-wrp'>
          <div className='info'>
            <strong className='left'>Contact's Name</strong>
            <span>{data?.cName}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Contact's number</strong>
            <span>{data?.cPhone}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Contact's email address</strong>
            <span>{data?.cEmail}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Address</strong>
            <span>{data?.cBusinessName}</span>
            <span>{data?.cStreet}</span>
            <span>{data?.cTwon}</span>
            <span>{data?.cPostCode}</span>
            <span>{data?.cCountry}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Earliest collection</strong>
            <span>
              {moment(data?.cDate).format('MMMM Do YYYY')} {data?.cTime}
            </span>
          </div>
        </div>
        <h5>Vehicle information</h5>
        <div className='info-wrp'>
          <div className='info'>
            <strong className='left'>Registration</strong>
            <span>{data?.registrationNumber}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Make</strong>
            <span>{data?.make}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Model</strong>
            <span>{data?.euroStatus}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Colour</strong>
            <span>{data?.colour}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Fuel type</strong>
            <span>{data?.fuelType}</span>
          </div>
          <div className='info'>
            <strong className='left'>Vehicle weight</strong>
            <span>{data?.revenueWeight}KG</span>
          </div>
          <div className='info'>
            <strong className='left'>Wheelbase</strong>
            <span>{data?.wheelbase}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
