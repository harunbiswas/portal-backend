import moment from 'moment'
import { useState } from 'react'
import { FaCarSide, FaCaretDown } from 'react-icons/fa6'
import { GoTriangleRight } from 'react-icons/go'
import UploadPdf from '../moves/UploadPdf'

export default function DetailsBodyCollection({
  data,
  isBody,
  login,
  setData,
}) {
  const [isShow, setIsShow] = useState(false)
  const [pdf, setPdf] = useState(null)

  return (
    <div className='details-body'>
      {pdf && (
        <UploadPdf setData={setData} login={login} setPdf={setPdf} pdf={pdf} />
      )}
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
          {(login?.role === 'admin' && (
            <div className='details-body-top-right'>
              <button
                onClick={() => {
                  if (data?.poc) {
                    window.open(data?.poc, '_blank')
                  } else {
                    setPdf('POC')
                  }
                }}
                className='btn'
              >
                {(data?.poc && 'View') || 'Upload'} POC
              </button>
              <button
                onClick={() => {
                  if (data?.pod) {
                    window.open(data?.pod, '_blank')
                  } else {
                    setPdf('POD')
                  }
                }}
              >
                {(data?.pod && 'View') || 'Upload'} POD
              </button>
            </div>
          )) || (
            <div className='details-body-top-right'>
              <button
                onClick={() => {
                  window.open(data?.poc, '_blank')
                }}
                disabled={(!data?.poc && true) || false}
                className='btn'
              >
                View POC
              </button>
              <button
                onClick={() => {
                  window.open(data?.pod, '_blank')
                }}
                disabled={(!data?.pod && true) || false}
              >
                View POD
              </button>
            </div>
          )}
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
