import Identifire from '../components/start/Identifire'

export default function Start() {
  return (
    <main className='start'>
      <div className='container'>
        <Identifire active={0} num={5} />
      </div>
    </main>
  )
}
