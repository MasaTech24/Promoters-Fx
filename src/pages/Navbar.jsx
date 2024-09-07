import React from 'react';
// import SignInUser from './Sign in.jsx'
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
// import {animateScroll} from 'react-scroll'
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function NavigationBar () {
  // toggled navbar menu
  // const useToggle = (initialState) => {
  //   // useToggle variable which holds the logic for the useToggle hook
  //   const [toggleValue, setToggleValue] = useState(initialState)

  //   const toggler = () => {setToggleValue(!toggleValue)};

  //   return[toggleValue, toggler]
  // }

  const [toggle, setToggle] = useState(true);
  // const [signUpSubmit, setSignUpSubmit] = useState()
  const navigate = useNavigate()

  const handleClick = () =>{
    setToggle(!toggle)
  }

  const handleSignUp = () => {
    navigate('/sign-up');
  } 
  return(
    <header>
      <div className='logo-container'>
        <strong className='logo'>Promoters <i>FX</i></strong>
      </div>
      
      <nav className='navigation-bar'>
        <ul>
          <li>
            <NavLink to="/"  className='Link'
            style={({isActive}) => ({color: isActive ? 'yellowgreen' : 'white Link'})}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className='Link'
            style={({isActive}) => ({color: isActive ? 'yellowgreen' : 'white Link'})}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to='/plan'  className='Link'
            style={({isActive}) => ({color: isActive ? 'yellowgreen' : 'white Link'})}>
              Plan
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact-us' className='Link'
            style={({isActive}) => ({color: isActive ? 'yellowgreen' : 'white Link'})}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className='button-container'>
        <Link to='/sign-in'>
          <button> 
            Sign In
          </button>
        </Link>

          <button onClick={handleSignUp}>Sign up</button>
      </div>

      <div className="toggle-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" onClick={handleClick}>
          <path fill="#f6f7f9" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
        </svg>

        {toggle ? 
        
          <div className="dropdown-menu open">
            <li><a href="#" className='Active'>Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Plans</a></li>
            <li><a href="#">Contact Us</a></li>
            <li>
              <button>
                Sign In 
                <span>
                </span>
              </button>
              <button>Sign Up</button>
            </li>
          </div>
        : <></>}
      </div>

    </header>
  )
}
export default NavigationBar;