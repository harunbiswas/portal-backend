import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import values from '../../values'

export default function MoveTable({ search, active }) {
  const ths = [
    'Vehicle Indentifier',
    'Vehicle Make',
    'Proof documents',
    'Collected Posecode',
    'Delivery Postcode',
  ]

  const [data, setData] = useState([])
  const [dataU, setDataU] = useState([])

  useEffect(() => {
    axios
      .get(`${values.base_url}/moves`, {
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

  useEffect(() => {
    const filteredArray = data.filter(
      obj => obj?.status.toLowerCase() === 'active'
    )
    setDataU(filteredArray)
  }, [data])

  useEffect(() => {
    const filteredArray = data.filter(
      obj =>
        typeof obj?.registrationNumber === 'string' &&
        obj?.registrationNumber.toLowerCase().includes(search.toLowerCase())
    )

    if (search) {
      setDataU(filteredArray)
    } else {
      setDataU(data)
    }
  }, [search])

  useEffect(() => {
    if (active === 'Active Moves') {
      const filteredArray = data.filter(
        obj => obj?.status.toLowerCase() === 'active'
      )
      const filteredArray2 = filteredArray.filter(
        obj =>
          typeof obj?.registrationNumber === 'string' &&
          obj?.registrationNumber.toLowerCase().includes(search.toLowerCase())
      )

      if (search) {
        setDataU(filteredArray)
      } else {
        setDataU(filteredArray)
      }
      setDataU(filteredArray2)
    } else if (active === 'Completed Moves') {
      const filteredArray = data.filter(
        obj => obj?.status.toLowerCase() === 'complete'
      )
      const filteredArray2 = filteredArray.filter(
        obj =>
          typeof obj?.registrationNumber === 'string' &&
          obj?.registrationNumber.toLowerCase().includes(search.toLowerCase())
      )

      if (search) {
        setDataU(filteredArray)
      } else {
        setDataU(filteredArray)
      }
      setDataU(filteredArray2)
    } else if (active === 'Cancelled Moves') {
      const filteredArray = data.filter(
        obj => obj?.status.toLowerCase() === 'cancel'
      )
      const filteredArray2 = filteredArray.filter(
        obj =>
          typeof obj?.registrationNumber === 'string' &&
          obj?.registrationNumber.toLowerCase().includes(search.toLowerCase())
      )

      if (search) {
        setDataU(filteredArray)
      } else {
        setDataU(filteredArray)
      }
      setDataU(filteredArray2)
    } else {
      const filteredArray = data.filter(
        obj => obj?.status.toLowerCase() === 'request'
      )

      const filteredArray2 = filteredArray.filter(
        obj =>
          typeof obj?.registrationNumber === 'string' &&
          obj?.registrationNumber.toLowerCase().includes(search.toLowerCase())
      )

      if (search) {
        setDataU(filteredArray)
      } else {
        setDataU(filteredArray)
      }
      setDataU(filteredArray2)
    }
  }, [active, search])

  return (
    <div className='moves-table'>
      <table>
        <thead>
          <tr>
            {ths.map((th, i) => (
              <th key={i}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataU?.map((d, i) => (
            <tr key={i}>
              <td>
                {' '}
                <Link to={d?._id}>{d?.registrationNumber} </Link>
              </td>
              <td>
                {' '}
                <Link to={d?._id}>{d?.make}</Link>
              </td>
              <td>
                {' '}
                <Link to={d?._id}>
                  {d?.poc && 'POC'} {(d?.pod && ', POD') || '-'}
                </Link>
              </td>

              <td>
                {' '}
                <Link to={d?._id}>{d?.cPostCode}</Link>
              </td>
              <td>
                {' '}
                <Link to={d?._id}>{d?.dPostCode}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
