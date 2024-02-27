import Title from '../Title'
import DetailsBody from './DetailsBody'
import DetailsBodyCollection from './DetailsBodyCollection'
import DetailsBodyDelivery from './DetailsBodyDelevery'

export default function Details({ data, isStart, login }) {
  return (
    <div className='details'>
      {isStart && <Title title='Confirm your listing' />}
      <DetailsBodyCollection login={login} data={data} isBody={true} />
      <DetailsBodyDelivery data={data} isBody={true} />

      <DetailsBody data={data} />
    </div>
  )
}
