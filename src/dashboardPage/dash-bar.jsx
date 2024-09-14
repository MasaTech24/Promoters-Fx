import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import '../styles/dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { 
  faHome, faUser, 
  faSignOutAlt, faChartLine,
  faBars, faMoneyCheckAlt, 
  faMoneyBillWaveAlt, faPlusCircle, 
  faMinusCircle, faExchangeAlt,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';


function DashBars({username, email}) {
  const [toggle, setToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const navigate = useNavigate();


  const handleClick = () =>{
    setToggle(!toggle)
    console.log('clicked')
  }
  const handleMenuClick = () =>{
    setMenuToggle(!menuToggle);
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
  const handleWithdrawClick = () => {  
    navigate('/dashboard/withdraw'); // Navigate to the deposits page  
  }; 

  return(
    <>
      <nav className="sidebar resp-cls">
        <div className="Logo-div">
          <h2>Promoter <span> FX</span></h2>
        </div>
        <ul className="sidebar-nav">

          <li className="nav-item">
            <NavLink  to='/dashboard'   
            className={({ isActive }) => isActive ? 'link active-nav' : 'link'} end>  

              <FontAwesomeIcon icon={faHome} />
              Dashboard  
            </NavLink>  
          </li>

          <li className="nav-item">
            <NavLink to='/dashboard/deposits'   
              className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  

              <FontAwesomeIcon icon={faPlusCircle} size="lg"/> 
              Deposits 
            </NavLink>  
          </li>

          <li className="nav-item">
            <NavLink to='/dashboard/withdraw'   
              className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  

              <FontAwesomeIcon icon={faMinusCircle} size="lg"/> 
              Withdraw  
            </NavLink>  
          </li>

          <li className="nav-item">
            <NavLink to='/dashboard/invest'   
              className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  

              <FontAwesomeIcon icon={faChartLine} size="lg"/>
              Investment 
            </NavLink>  
          </li>

          <li className="nav-item">
            <NavLink to='/dashboard/transations'   
            className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  

              <FontAwesomeIcon icon={faExchangeAlt } size="lg"/> 
              Transations  
            </NavLink>  
          </li>
          <li className="nav-item">
            <NavLink to='/dashboard/support'    
              className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  

              <FontAwesomeIcon icon={faHeadset} size="lg"/>  
              Help & Support 
            </NavLink>  
          </li>
          
        </ul>
      </nav>

      <div className="nave-bar">

        <FontAwesomeIcon icon={faBars} className="navbar-menu" size="lg" onClick={handleMenuClick}/>
        {menuToggle ? 
          <nav className="sidebar resp-open">
            <div className="Logo-div">
              <h2>Promoter <span> FX</span></h2>
            </div>
            <ul className="sidebar-nav">
    
              <li className="nav-item">
                <NavLink  to='/dashboard'   
                className={({ isActive }) => isActive ? 'link active-nav' : 'link'} end>  
    
                  <FontAwesomeIcon icon={faHome} />
                  Dashboard  
                </NavLink>  
              </li>
    
              <li className="nav-item">
                <NavLink to='/dashboard/deposits'   
                  className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  
    
                  <FontAwesomeIcon icon={faPlusCircle} size="lg"/> 
                  Deposits 
                </NavLink>  
              </li>
    
              <li className="nav-item">
                <NavLink to='/dashboard/withdraw'   
                  className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  
    
                  <FontAwesomeIcon icon={faMinusCircle} size="lg"/> 
                  Withdraw  
                </NavLink>  
              </li>
    
              <li className="nav-item">
                <NavLink to='/dashboard/invest'   
                  className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  
    
                  <FontAwesomeIcon icon={faChartLine} size="lg"/>
                  Investment 
                </NavLink>  
              </li>
    
              <li className="nav-item">
                <NavLink to='/dashboard/transations'   
                className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  
    
                  <FontAwesomeIcon icon={faExchangeAlt } size="lg"/> 
                  Transations  
                </NavLink>  
              </li>
              <li className="nav-item">
                <NavLink to='/dashboard/support'    
                  className={({ isActive }) => isActive ? 'link active-nav' : 'link'}>  
    
                  <FontAwesomeIcon icon={faHeadset}/>  
                  Help & Support 
                </NavLink>  
              </li>
              
            </ul>
          </nav> : <></>
        }

        <div className="nav-content-2">
          <div className="btn-div">

            <button onClick={handleDepositClick}>
              <div className="deposits-cnet-dv">
                <p>Deposit</p>
                <FontAwesomeIcon icon={faMoneyBillWaveAlt} size="9px"/>
              </div>
            </button>

            <button onClick={handleWithdrawClick}>
            <div className="deposits-cnet-dv">
              <p>Withdraw</p>
              <FontAwesomeIcon icon={faMoneyCheckAlt} size="9px"/>
            </div>
            </button>
          </div>
        
          <div className="nav-profile">
            {/* <img src="/vite.svg" alt="profile" className="toggle-btn"width='25px' onClick={handleClick}/> */}

            <div className="profile-div">
              <FontAwesomeIcon icon={faUser} onClick={handleClick} className="toggle-btn" size="9px"/>
            </div>

            {toggle ? 
              <div className="dropdown toggled">
                <h4>{username}</h4>
                <p>{email}</p>
                <button onClick={handleSignOut}>Sign out</button>
              </div>
            : <></>}
          </div>
        </div>
        
        {/* <main>
          {/* <Outlet/> 
        </main> */}
      </div>
    </>
  )
}
export default DashBars;