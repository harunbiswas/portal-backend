export default function Identifire({ num, active }) {
  console.log(active)
  return (
    <ul className='identifire'>
      {[...Array(num)].map((item, i) => (
        <li className={(active >= i && 'active') || ''} key={item}></li>
      ))}
    </ul>
  )
}
