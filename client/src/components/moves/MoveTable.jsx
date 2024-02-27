import axios from 'axios'
import Cookies from 'js-cookie'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import values from '../../values'

export default function MoveTable({ search }) {
  const ths = [
    'Vehicle Indentifier',
    'Vehicle description',
    'Proof documents',
    'Collected Phone',
    'Delivery Phone',
    'Collected Date',
    'Collected Time',
    'Delivery Date',
    'Delivery Time',
    'Collected Posecode',
    'Collected Postcode',
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
    setDataU(data)
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
                <Link to={d?._id}>{d?.euroStatus}</Link>
              </td>
              <td>
                {' '}
                <Link to={d?._id}>
                  {d?.poc && 'POC'} {(d?.pod && ', POD') || '-'}
                </Link>
              </td>
              <td>
                {' '}
                <Link to={d?._id}>{d?.cPhone}</Link>
              </td>
              <td>
                {' '}
                <Link to={d?._id}>{d?.dPhone}</Link>
              </td>
              <td>
                {' '}
                <Link to={d?._id}>{moment(d?.cDate).format('YYYY/MM/DD')}</Link>
              </td>{' '}
              <td>
                {' '}
                <Link to={d?._id}>{moment(d?.dDate).format('YYYY/MM/DD')}</Link>
              </td>
              <td>
                {' '}
                <Link to={d?._id}>{d?.cTime}</Link>
              </td>
              <td>
                {' '}
                <Link to={d?._id}>{d?.dTime}</Link>
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
