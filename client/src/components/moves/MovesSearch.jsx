import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'

export default function MovesSearch() {
  const [value, setValue] = useState('')
  return (
    <div className='moves-search'>
      <button>
        <RiSearchLine />
      </button>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type='text'
        placeholder='Search by Vehicle indentifier'
      />
      {value && (
        <button onClick={() => setValue('')}>
          <IoMdClose />
        </button>
      )}
    </div>
  )
}
