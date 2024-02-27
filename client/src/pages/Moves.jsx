import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import Title from '../components/Title.jsx'
import MoveTable from '../components/moves/MoveTable.jsx'
import MovesNav from '../components/moves/MovesNav.jsx'
import MovesSearch from '../components/moves/MovesSearch.jsx'

const Moves = () => {
  const [search, setSearch] = useState('')
  const [login, setLogin] = useState('')
  const [active, setActive] = useState('')

  useEffect(() => {
    setLogin(JSON.parse(Cookies.get('login')))
  }, [])

  return (
    <>
      <main className='moves'>
        <div className='container'>
          <Title title={'Moves'} />
          <MovesNav login={login} active={active} setActive={setActive} />
          <MovesSearch search={search} setSearch={setSearch} />
          <MoveTable active={active} search={search} />
        </div>
      </main>
    </>
  )
}

export default Moves
