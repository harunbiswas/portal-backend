import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import StartForm from '../components/start/StartForm'

const HomePage = () => {
  const [isForm, setIsForm] = useState(false)

  return (
    <>
      <Header isForm={isForm} setIsForm={setIsForm} />
      <Outlet />
      <StartForm isForm={isForm} setIsForm={setIsForm} />
    </>
  )
}

export default HomePage
