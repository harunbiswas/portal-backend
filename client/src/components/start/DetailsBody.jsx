import { useState } from 'react'
import { FaCarSide, FaCaretDown } from 'react-icons/fa6'
import { GoTriangleRight } from 'react-icons/go'

export default function DetailsBody({ isBody }) {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className='details-body'>
      {isBody && (
        <div className='details-body-top'>
          <div className='details-body-top-left'>
            <h2>
              <span>{<GoTriangleRight /> || <FaCaretDown />}</span>
              <span
                className='collapes-title'
                onClick={() => setIsShow(!isShow)}
              >
                UXBRIDGE, UB11 1FW
              </span>
              <strong>
                <FaCarSide /> SEAT Leon, KU17GMY
              </strong>
            </h2>
          </div>
          <div className='details-body-top-right'>
            <button disabled className='btn'>
              View POC
            </button>
            <button>View POD</button>
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
            <strong className='left'>contact's Name</strong>
            <span>Harun</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>contact's Name</strong>
            <span>Harun</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>contact's Name</strong>
            <span>Harun</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>contact's Name</strong>
            <span>Harun</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>contact's Name</strong>
            <span>Harun</span>
          </div>
        </div>
        <h5>Vehicle information</h5>
        <div className='info-wrp'>
          <div className='info'>
            <strong className='left'>contact's Name</strong>
            <span>Harun</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>contact's Name</strong>
            <span>Harun</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>contact's Name</strong>
            <span>Harun</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>contact's Name</strong>
            <span>Harun</span>
          </div>{' '}
          <div className='info'>
            <strong className='left'>contact's Name</strong>
            <span>Harun</span>
          </div>
        </div>
      </div>
    </div>
  )
}
