export default function Identifire({ num, active }) {
  return (
    <ul className='identifire'>
      {[...Array(num)].map((item, i) => (
        <li className={(active >= i && 'active') || ''} key={i}></li>
      ))}
    </ul>
  )
}
