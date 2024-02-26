import Cookies from 'js-cookie'
import { useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { GrSupport } from 'react-icons/gr'
import { IoMdLogOut } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import StartContext from './context/StartContext'

export default function Header({ setIsForm }) {
  const { setData } = useContext(StartContext)
  const navigate = useNavigate()
  return (
    <header className='header' id='header'>
      <div className='container-full'>
        <div className='header-wrp'>
          <div className='brand'>
            <img
              src='https://automanagement.co.uk/wp-content/uploads/2022/03/AUTO-MANAGEMENT-2-1.png'
              alt=''
            />
            <Link to='/'> moves</Link>
          </div>
          <nav className='header-nav'>
            <ul className='header-nav-menu'>
              <li>
                <Link to='/'>
                  <GrSupport />

                  <span>Support</span>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <FaUser /> <span>account</span>
                </Link>
              </li>
              <li>
                <Link
                  className='logout'
                  onClick={() => {
                    Cookies.remove('login')
                    window.location.reload()
                  }}
                >
                  <IoMdLogOut />
                  <span>Sign Out</span>
                </Link>
              </li>
            </ul>
            <button
              onClick={() => {
                setIsForm(true)
                setData(null)
              }}
              className='start-btn'
            >
              <svg
                width='36'
                height='34'
                viewBox='0 0 27 25'
                xmlns='http://www.w3.org/2000/svg'
                className='svg-abs'
              >
                <title>Vrm lookup icon</title>
                <g id='Page-1'>
                  <g id='Artboard' fillRule='nonzero'>
                    <path
                      d='M22.4610325 17.0114483V21.95c0 .57-.47 1.04-1.04 1.04h-2.88c-.57 0-1.04-.47-1.04-1.04V21H7.50103247v.96c0 .57-.47 1.04-1.04 1.04h-2.88c-.57 0-1.04-.47-1.04-1.04v-6.12c0-.67.2-1.3.58-1.83-.55-.14-.95-.4-1.07-.8-.3-.96.76-1.85 2.2-2.13.4-.08.98-.04 1.48.1l.3-1.7c.44-1.58 1.21-2.48 2.55-2.48H11v1H8.57103247c-.78 0-1.25.55-1.56 1.7l-.58 3.25-.68-.74c-.1-.08-.97-.2-1.3-.15-.5.1-.94.3-1.2.52-.2.16-.25.28-.24.33.02.04.57.23 1.17.25l1.4.07-1.12.84c-.57.42-.9 1.07-.9 1.78v6.12c0 .02 0 .04.03.04h2.88c.02 0 .04-.02.04-.04V20H18.5110325v1.96c0 .02.02.04.04.04h2.88c.02 0 .04-.02.04-.04v-5.9199648l.99.9714131zm-.9691841-6.4338134l3.3365787 3.3365787c.1952622.1952621.1952622.5118446 0 .7071067-.1952621.1952622-.5118446.1952622-.7071068 0l-3.4162767-3.4162767C19.9250986 11.7080352 18.996438 12 18 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.4018025-.5778346 2.66946485-1.5081516 3.5776349zM7.50103247 17c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H17.5010325c.28 0 .5.22.5.5s-.22.5-.5.5H7.50103247zM18 11c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z'
                      id='Shape'
                    ></path>
                  </g>
                </g>
              </svg>
              start
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
