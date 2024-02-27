import { useState } from 'react'
import Title from '../components/Title.jsx'
import MoveTable from '../components/moves/MoveTable.jsx'
import MovesNav from '../components/moves/MovesNav.jsx'
import MovesSearch from '../components/moves/MovesSearch.jsx'

const Moves = () => {
  const [search, setSearch] = useState('')
  return (
    <>
      <main className='moves'>
        <div className='container'>
          <Title title={'Moves'} />
          <MovesNav />
          <MovesSearch search={search} setSearch={setSearch} />
          <MoveTable search={search} />
        </div>
      </main>
    </>
  )
}

export default Moves
