import Title from '../Title'
import DetailsBody from './DetailsBody'

export default function Details() {
  return (
    <div className='details'>
      <Title title='Confirm your listing' />
      <DetailsBody isBody={true} />
      <DetailsBody isBody={true} />
      <DetailsBody />
    </div>
  )
}
