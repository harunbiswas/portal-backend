import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginSignup from './pages/LoginSIgnup.jsx'
import Moves from './pages/Moves.jsx'
import Error from './pages/error.jsx'
import HomePage from './pages/home-page.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<HomePage />}>
          <Route index element={<Moves />} />
        </Route>
        <Route path='loginsigup' element={<LoginSignup />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
