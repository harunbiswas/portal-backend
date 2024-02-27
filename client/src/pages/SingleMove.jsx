import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/start/Details'
import values from '../values'

export default function SingleMove() {
  const { id } = useParams()

  const [data, setData] = useState({})

  useEffect(() => {
    axios
      .get(`${values.base_url}/move/${id}`, {
        headers: {
          token: JSON.parse(Cookies.get('login')).token,
        },
      })
      .then(d => {
        setData(d.data)
      })
      .catch(e => {
        console.log(e.response)
      })
  }, [])
  return (
    <div className='moves-single'>
      <div className='container'>
        <Details data={data} />
      </div>
    </div>
  )
}
