import axios from 'axios'
import { useContext, useState } from 'react'
import values from '../../values'
import Title from '../Title'
import StartContext from '../context/StartContext'

export default function DeliveryForm() {
  const { data, setData, changeHandler } = useContext(StartContext)
  const [dPost, setDPost] = useState('')
  const [dAdds, setDAdds] = useState([])
  const [error, setError] = useState({})
  const [dIsfull, setDIsFull] = useState(false)

  const [cPost, setCPost] = useState('')
  const [cAdds, setCAdds] = useState([])

  const [cIsfull, setCIsFull] = useState(false)

  const lookupHandler = (e, post) => {
    if (post && values.isValidUKPostcode(post)) {
      axios
        .get(`${values.base_url}/address?post=${post}`)
        .then(d => {
          if (e === 'd') {
            setDAdds(d.data?.results)
            setDIsFull(false)
          } else {
            setCAdds(d.data?.results)
            setCIsFull(false)
          }
        })
        .catch(e => console.log(e))
    } else {
      if (e === 'd') {
        setError(prev => {
          return {
            ...prev,
            dPost: true,
          }
        })
      } else {
        setError(prev => {
          return {
            ...prev,
            cPost: true,
          }
        })
      }
    }
  }

  return (
    <div className='start-delivery'>
      <Title title='Collection and Delivery' />

      <div className='start-delivery-form'>
        <div className='start-delivery-form-left'>
          <h4>Collection</h4>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Contact's Name</label>
              <input
                name='cName'
                value={data?.cName}
                onChange={changeHandler}
                type='text'
                placeholder='Full Name'
                className={
                  (data.hasOwnProperty('cName') && !data?.cName && 'error') ||
                  ''
                }
              />
            </div>
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Contact's Phone</label>
              <input
                name='cPhone'
                value={data?.cPhone}
                onChange={changeHandler}
                type='text'
                placeholder='Number'
                className={
                  (data.hasOwnProperty('cPhone') && !data?.cPhone && 'error') ||
                  ''
                }
              />
            </div>
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Contact's Email Address</label>
              <input
                name='cEmail'
                value={data?.cEmail}
                onChange={changeHandler}
                type='email'
                placeholder='Email Address'
                className={
                  (data.hasOwnProperty('cEmail') && !data?.cEmail && 'error') ||
                  ''
                }
              />
            </div>{' '}
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Postcode Lookup</label>
              <input
                type='text'
                value={cPost}
                onChange={e => {
                  setCPost(e.target.value)
                  setError(prev => {
                    return {
                      ...prev,
                      cPost: false,
                    }
                  })
                }}
                placeholder='E.G. LL3 4EF'
                className={error?.cPost && 'error'}
              />
              {error?.cPost && (
                <span>
                  Enter a valid UK postcode only using letters & numbers or
                  enter your address manually{' '}
                </span>
              )}
            </div>{' '}
            <div className='form-group lookup-btn'>
              <button onClick={() => lookupHandler('c', cPost)}>Lookup</button>
            </div>{' '}
          </div>
          {(cAdds && cAdds.length && (
            <div className='form-group-wrp'>
              <div className='form-group'>
                <label htmlFor=''>Select address from list</label>
                <select
                  onChange={e => {
                    const { street, town, postcode, country } =
                      values.separateAddressComponents(e.target.value)

                    setData(prev => {
                      return {
                        ...prev,
                        cStreet: street,
                        cTwon: town,
                        cPostCode: postcode,
                        cCountry: country,
                      }
                    })
                  }}
                  name='dAdds'
                  id=''
                >
                  <option value=''>--please select--</option>
                  {cAdds.map((add, i) => (
                    <option value={add.formatted_address}>
                      {add.formatted_address}
                    </option>
                  ))}
                </select>
              </div>{' '}
            </div>
          )) ||
            ''}
          {(!cIsfull && (
            <button onClick={() => setCIsFull(true)}>
              Enter Address Manually
            </button>
          )) || (
            <>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Business Name</label>
                  <input
                    type='text'
                    value={data?.cBusinessName}
                    onChange={changeHandler}
                    name='cBusinessName'
                    placeholder='Business Name'
                    className={
                      (data.hasOwnProperty('cBusinessName') &&
                        !data?.cBusinessName &&
                        'error') ||
                      ''
                    }
                  />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Street</label>
                  <input
                    value={data?.cStreet}
                    onChange={changeHandler}
                    name='cStreet'
                    type='text'
                    placeholder='Street'
                    className={
                      (data.hasOwnProperty('cStreet') &&
                        !data?.cStreet &&
                        'error') ||
                      ''
                    }
                  />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Town</label>
                  <input
                    value={data?.cTwon}
                    onChange={changeHandler}
                    name='cTwon'
                    type='text'
                    placeholder='Town'
                    className={
                      (data.hasOwnProperty('cTwon') &&
                        !data?.cTwon &&
                        'error') ||
                      ''
                    }
                  />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>country</label>
                  <input
                    value={data?.cCountry}
                    onChange={changeHandler}
                    name='cCountry'
                    type='text'
                    placeholder='country'
                    className={
                      (data.hasOwnProperty('cCountry') &&
                        !data?.cCountry &&
                        'error') ||
                      ''
                    }
                  />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Postcode</label>
                  <input
                    value={data?.cPostCode}
                    onChange={changeHandler}
                    name='cPostCode'
                    type='text'
                    placeholder='postcode'
                    className={
                      (data.hasOwnProperty('cPostCode') &&
                        !data?.cPostCode &&
                        'error') ||
                      ''
                    }
                  />
                </div>
              </div>
            </>
          )}
        </div>{' '}
        <div className='start-delivery-form-right'>
          <h4>Delivery</h4>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Contact's Name</label>
              <input
                name='dName'
                value={data?.dName}
                onChange={changeHandler}
                type='text'
                placeholder='Full Name'
                className={
                  (data.hasOwnProperty('dName') && !data?.dName && 'error') ||
                  ''
                }
              />
            </div>
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Contact's Phone</label>
              <input
                name='dPhone'
                value={data?.dPhone}
                onChange={changeHandler}
                type='text'
                placeholder='Number'
                className={
                  (data.hasOwnProperty('dPhone') && !data?.dPhone && 'error') ||
                  ''
                }
              />
            </div>
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Contact's Email Address</label>
              <input
                name='dEmail'
                value={data?.dEmail}
                onChange={changeHandler}
                type='email'
                placeholder='Email Address'
                className={
                  (data.hasOwnProperty('dEmail') && !data?.dEmail && 'error') ||
                  ''
                }
              />
            </div>{' '}
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Postcode Lookup</label>
              <input
                type='text'
                value={dPost}
                onChange={e => {
                  setDPost(e.target.value)
                  setError(prev => {
                    return {
                      ...prev,
                      dPost: false,
                    }
                  })
                }}
                placeholder='E.G. LL3 4EF'
                className={error?.dPost && 'error'}
              />
              {error?.dPost && (
                <span>
                  Enter a valid UK postcode only using letters & numbers or
                  enter your address manually{' '}
                </span>
              )}
            </div>{' '}
            <div className='form-group lookup-btn'>
              <button onClick={() => lookupHandler('d', dPost)}>Lookup</button>
            </div>{' '}
          </div>
          {(dAdds && dAdds.length && (
            <div className='form-group-wrp'>
              <div className='form-group'>
                <label htmlFor=''>Select address from list</label>
                <select
                  onChange={e => {
                    const { street, town, postcode, country } =
                      values.separateAddressComponents(e.target.value)

                    setData(prev => {
                      return {
                        ...prev,
                        dStreet: street,
                        dTwon: town,
                        dPostCode: postcode,
                        dCountry: country,
                      }
                    })
                  }}
                  name='dAdds'
                  id=''
                >
                  <option value=''>--please select--</option>
                  {dAdds.map((add, i) => (
                    <option value={add.formatted_address}>
                      {add.formatted_address}
                    </option>
                  ))}
                </select>
              </div>{' '}
            </div>
          )) ||
            ''}
          {(!dIsfull && (
            <button onClick={() => setDIsFull(true)}>
              Enter Address Manually
            </button>
          )) || (
            <>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Business Name</label>
                  <input
                    type='text'
                    value={data?.dBusinessName}
                    onChange={changeHandler}
                    name='dBusinessName'
                    placeholder='Business Name'
                    className={
                      (data.hasOwnProperty('dBusinessName') &&
                        !data?.dBusinessName &&
                        'error') ||
                      ''
                    }
                  />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Street</label>
                  <input
                    value={data?.dStreet}
                    onChange={changeHandler}
                    name='dStreet'
                    type='text'
                    placeholder='Street'
                    className={
                      (data.hasOwnProperty('dStreet') &&
                        !data?.dStreet &&
                        'error') ||
                      ''
                    }
                  />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Town</label>
                  <input
                    value={data?.dTwon}
                    onChange={changeHandler}
                    name='dTwon'
                    type='text'
                    placeholder='Town'
                    className={
                      (data.hasOwnProperty('dTwon') &&
                        !data?.dTwon &&
                        'error') ||
                      ''
                    }
                  />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>country</label>
                  <input
                    value={data?.dCountry}
                    onChange={changeHandler}
                    name='dCountry'
                    type='text'
                    placeholder='country'
                    className={
                      (data.hasOwnProperty('dCountry') &&
                        !data?.dCountry &&
                        'error') ||
                      ''
                    }
                  />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Postcode</label>
                  <input
                    value={data?.dPostCode}
                    onChange={changeHandler}
                    name='dPostCode'
                    type='text'
                    placeholder='postcode'
                    className={
                      (data.hasOwnProperty('dPostCode') &&
                        !data?.dPostCode &&
                        'error') ||
                      ''
                    }
                  />
                </div>
              </div>
            </>
          )}
        </div>{' '}
      </div>
    </div>
  )
}
