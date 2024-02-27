import axios from 'axios'
import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StartContext from '../components/context/StartContext'
import DeliveryForm from '../components/start/DeliveryForm'
import Details from '../components/start/Details'
import Identifire from '../components/start/Identifire'
import InfoForm from '../components/start/InfoForm'
import Refarance from '../components/start/Refarance'
import TimeScale from '../components/start/TimeScale'
import Transport from '../components/start/Transport'
import values from '../values'

export default function Start() {
  const { data, setData, changeHandler } = useContext(StartContext)
  const [active, setActive] = useState(0)
  const [login, setLogin] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLogin(JSON.parse(Cookies.get('login')))
  }, [])

  const submitHandler = () => {
    setLoading(true)
    axios
      .post(`${values.base_url}/start`, data, {
        headers: {
          token: login.token,
        },
      })
      .then(d => {
        setLoading(false)
        navigate('/')
      })
      .catch(e => {
        setLoading(false)
        console.log(e.response)
      })
  }

  return (
    <main className='start'>
      <div className='container'>
        <Identifire active={active} num={6} />
        {(active === 0 && <InfoForm />) ||
          (active === 1 && <DeliveryForm />) ||
          (active === 2 && <TimeScale />) ||
          (active === 3 && <Transport />) ||
          (active === 4 && <Refarance />) || (
            <Details data={data} isStart={true} />
          )}

        <div className='start-btns'>
          <button
            disabled={(active < 1 && true) || false}
            onClick={() => {
              if (active > 0) {
                setActive(active - 1)
              }
            }}
          >
            Back
          </button>
          <button
            disabled={
              (active === 1 &&
                (!data?.cName ||
                  !data?.cPhone ||
                  !data?.cEmail ||
                  !data?.cStreet ||
                  !data?.cTwon ||
                  !data?.cPostCode ||
                  !data?.cCountry ||
                  !data?.dName ||
                  !data?.dPhone ||
                  !data?.dEmail ||
                  !data?.dStreet ||
                  !data?.dTwon ||
                  !data?.dPostCode ||
                  !data?.dCountry) &&
                true) ||
              (active === 2 &&
                (!data?.cTime ||
                  !data?.cDate ||
                  !data?.dTime ||
                  !data?.dDate) &&
                true) ||
              false
            }
            className='next'
            onClick={() => {
              if (active === 0) {
                if (
                  data?.make &&
                  data?.euroStatus &&
                  data?.colour &&
                  data?.revenueWeight &&
                  data?.fuelType
                ) {
                  console.log(active)
                  setActive(active + 1)
                }
              } else if (active < 5) {
                setActive(active + 1)
              } else {
                submitHandler()
              }
            }}
          >
            {(loading && 'Submiting...') ||
              (active === 5 && 'Submit') ||
              ' Next'}
          </button>
        </div>
      </div>
    </main>
  )
}
