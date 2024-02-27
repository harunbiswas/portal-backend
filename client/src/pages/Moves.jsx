import Title from '../components/Title.jsx'
import MoveTable from '../components/moves/MoveTable.jsx'
import MovesNav from '../components/moves/MovesNav.jsx'
import MovesSearch from '../components/moves/MovesSearch.jsx'

const Moves = () => {
  return (
    <>
      <main className='moves'>
        <div className='container'>
          <Title title={'Moves'} />
          <MovesNav />
          <MovesSearch />
          <MoveTable />
        </div>
      </main>
    </>
  )
}

export default Moves
