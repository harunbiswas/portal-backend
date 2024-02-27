import { useEffect } from 'react'

export default function MovesNav({ login, setActive, active }) {
  const items =
    login?.role === 'admin'
      ? ['Request Moves', 'Active Moves', 'Completed Moves', 'Cancelled Moves']
      : ['Active Moves', 'Completed Moves', 'Cancelled Moves']

  useEffect(() => {
    setActive('Active Moves')
  }, [])

  return (
    <ul className='moves-nav'>
      {items.map((item, i) => (
        <li className={(active === item && 'active') || ''} key={i}>
          <button onClick={() => setActive(item)}>{item}</button>
        </li>
      ))}
    </ul>
  )
}
