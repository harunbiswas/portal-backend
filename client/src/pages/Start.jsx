import DeliveryForm from '../components/start/DeliveryForm'
import Details from '../components/start/Details'
import Identifire from '../components/start/Identifire'
import InfoForm from '../components/start/InfoForm'
import Refarance from '../components/start/Refarance'
import TimeScale from '../components/start/TimeScale'
import Transport from '../components/start/Transport'

export default function Start() {
  return (
    <main className='start'>
      <div className='container'>
        <Identifire active={0} num={6} />
        {(false && <InfoForm />) ||
          (false && <DeliveryForm />) ||
          (false && <TimeScale />) ||
          (false && <Transport />) ||
          (false && <Refarance />) || <Details />}

        <div className='start-btns'>
          <button disabled>Back</button>
          <button className='next'>Next</button>
        </div>
      </div>
    </main>
  )
}
