import moment from 'moment'
import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa6'
import { GoTriangleRight } from 'react-icons/go'

export default function DetailsBodyDelivery({ data, isBody }) {
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
                {data?.dTwon + ',' + data?.dPostCode}
              </span>
            </h2>
          </div>
        </div>
      )}
      <div
        className={`details-body-bottom ${
          ((isShow || !isBody) && 'show') || ''
        }`}
      >
        <h5>Delivery information</h5>
        <div className='info-wrp'>
          <div className='info'>
            <strong className='left'>Contact's Name</strong>
            <span>{data?.dName}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Contact's number</strong>
            <span>{data?.dPhone}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Contact's email address</strong>
            <span>{data?.dEmail}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Address</strong>
            <span>{data?.dBusinessName}</span>
            <span>{data?.dStreet}</span>
            <span>{data?.dTwon}</span>
            <span>{data?.dPostCode}</span>
            <span>{data?.dCountry}</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>Earliest collection</strong>
            <span>
              {moment(data?.dDate).format('MMMM Do YYYY')} {data?.dTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
