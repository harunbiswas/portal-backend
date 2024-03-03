import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import StartContext from '../components/context/StartContext'
import StartForm from '../components/start/StartForm'

const HomePage = () => {
  const [isForm, setIsForm] = useState(false)
  const [data, setData] = useState(null)
  const changeHandler = e => {
    setData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  return (
    <>
      <StartContext.Provider value={{ data, setData, changeHandler }}>
        <Header isForm={isForm} setIsForm={setIsForm} />

        <Outlet />
      </StartContext.Provider>
      <StartForm
        data={data}
        setData={setData}
        isForm={isForm}
        setIsForm={setIsForm}
      />
    </>
  )
}

export default HomePage
