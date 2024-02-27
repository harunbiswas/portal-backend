import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginSignup from './pages/LoginSIgnup.jsx'
import Moves from './pages/Moves.jsx'
import SingleMove from './pages/SingleMove.jsx'
import Start from './pages/Start.jsx'
import Error from './pages/error.jsx'
import HomePage from './pages/home-page.jsx'
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    setIsAuthenticated(Cookies.get('login'))
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/*'
          element={
            isAuthenticated ? <HomePage /> : <Navigate to='/loginsigup' />
          }
        >
          <Route index element={<Moves />} />
          <Route path='start' element={<Start />} />
          <Route path=':id' element={<SingleMove />} />
        </Route>
        <Route
          path='loginsigup'
          element={!isAuthenticated ? <LoginSignup /> : <Navigate to='/' />}
        />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
