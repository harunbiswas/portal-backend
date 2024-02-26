import { useContext } from 'react'
import Title from '../Title'
import StartContext from '../context/StartContext'
import DetailsBody from './DetailsBody'
import DetailsBodyCollection from './DetailsBodyCollection'
import DetailsBodyDelivery from './DetailsBodyDelevery'

export default function Details() {
  const { data, setData, changeHandler } = useContext(StartContext)

  return (
    <div className='details'>
      <Title title='Confirm your listing' />
      <DetailsBodyCollection data={data} isBody={true} />
      <DetailsBodyDelivery data={data} isBody={true} />

      <DetailsBody data={data} />
    </div>
  )
}
