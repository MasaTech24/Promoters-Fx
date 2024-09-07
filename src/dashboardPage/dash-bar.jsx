import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import '../styles/dashboard.css'

function DashBars({username, email}) {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();


  const handleClick = () =>{
    setToggle(!toggle)
    console.log('clicked')
  }

  const handleSignOut = () => {  
    const auth = getAuth();  
    signOut(auth).then(() => {  
      navigate('/')
      console.log("User signed out successfully");  
    }).catch((error) => {  
      console.error("Sign out error:", error);  
    });  
  };
  
  const handleDepositClick = () => {  
    navigate('/dashboard/deposits'); // Navigate to the deposits page  
  }; 

  return(
    <>
      <nav className="sidebar">
        <div className="Logo-div">
          <h2>Promoter <span> FX</span></h2>
        </div>
        <ul className="sidebar-nav">

          <li className="nav-item">
            <NavLink  to='/dashboard'   
            className={({ isActive }) => isActive ? 'link active-nav' : 'link'} end>  

              <img src="/vite.svg" alt="" width='20px' />  
              Dashboard  
            </NavLink>  
          </li>

          <li className="nav-item">
            <NavLink to='/dashboard/deposits'   
              className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  

              <img src="/vite.svg" alt="" width='20px' />  
              Deposits 
            </NavLink>  
          </li>

          <li className="nav-item">
            <NavLink to='/dashboard/withdraw'   
              className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  

              <img src="/vite.svg" alt="" width='20px' />  
              Withdraw  
            </NavLink>  
          </li>

          <li className="nav-item">
            <NavLink to='/dashboard/invest'   
              className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  

              <img src="/vite.svg" alt="" width='20px' />  
              Invest  
            </NavLink>  
          </li>

          <li className="nav-item">
            <NavLink to='/dashboard/transations'   
              className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  

              <img src="/vite.svg" alt="" width='20px' />  
              Transations  
            </NavLink>  
          </li>
          <li className="nav-item">
            <NavLink to='/dashboard/help%support'   
              className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  

              <img src="/vite.svg" alt="" width='20px' />  
              Help & Support 
            </NavLink>  
          </li>
          
        </ul>
      </nav>

      <div className="nave-bar">

        <div className="btn-div">
          <button onClick={handleDepositClick}>Deposit</button>

          <button>Withdraw</button>
        </div>
      
        <div className="nav-profile">
          <img src="/vite.svg" alt="profile" className="toggle-btn"width='25px' onClick={handleClick}/>

          {toggle ? 
            <div className="dropdown toggled">
              <h4>{username}</h4>
              <p>{email}</p>
              <button onClick={handleSignOut}>Sign out</button>
            </div>
          : <></>}
        </div>
        
        {/* <main>
          {/* <Outlet/> 
        </main> */}
      </div>
    </>
  )
}
export default DashBars;