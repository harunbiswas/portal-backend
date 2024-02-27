import { IoMdClose } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'

export default function MovesSearch({ search, setSearch }) {
  return (
    <div className='moves-search'>
      <button>
        <RiSearchLine />
      </button>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        type='text'
        placeholder='Search by Vehicle indentifier'
      />
      {search && (
        <button onClick={() => setSearch('')}>
          <IoMdClose />
        </button>
      )}
    </div>
  )
}
