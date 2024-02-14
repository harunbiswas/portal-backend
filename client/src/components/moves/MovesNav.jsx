import { useState } from 'react'

export default function MovesNav() {
  const items = ['Active Moves', 'Completed Moves', 'Cancelled Moves']

  const [active, setActive] = useState(0)

  return (
    <ul className='moves-nav'>
      {items.map((item, i) => (
        <li className={(active === i && 'active') || ''} key={i}>
          <button onClick={() => setActive(i)}>{item}</button>
        </li>
      ))}
    </ul>
  )
}
