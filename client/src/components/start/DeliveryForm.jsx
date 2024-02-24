import Title from '../Title'

export default function DeliveryForm() {
  return (
    <div className='start-delivery'>
      <Title title='Collection and Delivery' />

      <div className='start-delivery-form'>
        <div className='start-delivery-form-left'>
          <h4>Collection</h4>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Contact's Name</label>
              <input type='text' placeholder='Full Name' />
            </div>
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Contact's Phone</label>
              <input type='text' placeholder='Number' />
            </div>
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Contact's Email Address</label>
              <input type='text' placeholder='Email Address' />
            </div>{' '}
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Postcode Lookup</label>
              <input type='text' placeholder='E.G. LL3 4EF' />
            </div>{' '}
            <div className='form-group lookup-btn'>
              <button>Lookup</button>
            </div>{' '}
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Select address from list</label>
              <input type='text' placeholder='Business Name' />
            </div>{' '}
          </div>
          {<button>Enter Address Manually</button> || (
            <>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Business Name</label>
                  <input type='text' placeholder='Business Name' />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Street</label>
                  <input type='text' placeholder='Street' />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Town</label>
                  <input type='text' placeholder='Town' />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>County</label>
                  <input type='text' placeholder='Email Address' />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Postcode</label>
                  <input type='text' placeholder='Email Address' />
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
              <input type='text' placeholder='Full Name' />
            </div>
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Contact's Phone</label>
              <input type='text' placeholder='Number' />
            </div>
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Contact's Email Address</label>
              <input type='text' placeholder='Email Address' />
            </div>{' '}
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Postcode Lookup</label>
              <input type='text' placeholder='E.G. LL3 4EF' />
            </div>{' '}
            <div className='form-group lookup-btn'>
              <button>Lookup</button>
            </div>{' '}
          </div>
          <div className='form-group-wrp'>
            <div className='form-group'>
              <label htmlFor=''>Select address from list</label>
              <input type='text' placeholder='Business Name' />
            </div>{' '}
          </div>

          {<button>Enter Address Manually</button> || (
            <>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Business Name</label>
                  <input type='text' placeholder='Business Name' />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Street</label>
                  <input type='text' placeholder='Street' />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Town</label>
                  <input type='text' placeholder='Town' />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>County</label>
                  <input type='text' placeholder='Email Address' />
                </div>{' '}
              </div>
              <div className='form-group-wrp'>
                <div className='form-group'>
                  <label htmlFor=''>Postcode</label>
                  <input type='text' placeholder='Email Address' />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
