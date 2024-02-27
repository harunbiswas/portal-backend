import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/start/Details'
import values from '../values'

export default function SingleMove() {
  const { id } = useParams()

  const [login, setLogin] = useState({})
  const [data, setData] = useState({})

  useEffect(() => {
    setLogin(JSON.parse(Cookies.get('login')))
  }, [])

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

  const updateMove = status => {
    axios
      .put(
        `${values.base_url}/move/${id}`,
        { status },
        {
          headers: {
            token: login?.token,
          },
        }
      )
      .then(d => setData(d.data))
      .catch(e => console.log(e))
  }

  return (
    <div className='moves-single'>
      <div className='container'>
        <Details setData={setData} data={data} login={login} />
        {login?.role === 'admin' && data?.status === 'request' && (
          <div className='moves-single-btns'>
            <button onClick={() => updateMove('cancel')} className='cancel'>
              Cancel
            </button>
            <button onClick={() => updateMove('active')}>Aprove</button>
          </div>
        )}
      </div>
    </div>
  )
}
