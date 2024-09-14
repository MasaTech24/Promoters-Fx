import React from 'react'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import NavigationBar from './pages/Navbar'
import LandingPage from './pages/home';
import AboutUs from './pages/about';
import SignInUser from './pages/Sign in';
import SignUpUser from './pages/sign-up';
import Dashboard from './dashboardPage/dashboard';
import DepositPage from './dashboardPage/deposite';
import ProtectedRoute from './component/protectedRoute';
import MakePayment from './dashboardPage/makePayment';
import WithdrawalPage from './dashboardPage/withdraw';
import MakeWithdrawalPayment from './dashboardPage/withdrawalPayment';
import InvestPage from './dashboardPage/invest';
import TransactionPage from './dashboardPage/transations';
import SupportPage from './dashboardPage/support';
// import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [totalBouns, setTotalBouns] = useState(0)
  const [totalInvestment, setTotalInvestment] = useState(0)
  const [totalWithdrawal, setTotalWithdrawal] = useState(0)
  const [email, setEmail] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const auth = getAuth();  

  useEffect(() => {  
    const unsubscribe = onAuthStateChanged(auth, (user) => {  
      if (user) {  
        // User is signed in, set the logged-in state  
        setIsLoggedIn(true);  
        setUsername(user.username);
        setTotalProfit(user.totalProfit);
        setTotalDeposit(user.totalDeposit);
        setTotalBouns(user.totalBouns);
        setTotalInvestment(user.totalInvestment);
        setTotalWithdrawal(user.totalWithdrawal);
        setEmail(user.email)
      } else {  
        // User is signed out  
        setIsLoggedIn(false);  
      }  
    });  

    // Cleanup subscription on unmount  
    return () => unsubscribe();  
  }, [auth]);  
  
  
  const handleLoggedIn = (username, totalProfit, totalDeposit, totalBouns, totalInvestment, totalWithdrawal) => {
    setUsername(username);
    setTotalProfit(totalProfit);
    setTotalDeposit(totalDeposit);
    setTotalBouns(totalBouns);
    setTotalInvestment(totalInvestment);
    setTotalWithdrawal(totalWithdrawal);
    setIsLoggedIn(true);
  }

  const handleSignOut = () => {  
    setIsLoggedIn(false);  
    setUsername(''); 
    setTotalProfit(0);
    setTotalDeposit(0);
    setTotalBouns(0);
    setTotalInvestment(0);
    setTotalWithdrawal(0); 
    setEmail('')
  };


  return (
    // <div>
    //   {!isLoggedIn ? (
    //   <>
    //     {/* <NavigationBar/> */}
    //     {/* <LandingPage/> */}
    //     <Routes>
    //       <Route path='/' element={<LandingPage/>}/>
    //       <Route path="/about" element={<AboutUs/>}/>
    //       <Route path='/sign-in' element={<SignInUser onLogin={handleLoggedIn} />}/>
    //       <Route path='/sign-up' element={<SignUpUser/>}/>
    //     </Routes>
    //   </>
    //   ) : (
    //     <Routes>
    //       <Route path='/dashboard' element={<Dashboard 
    //         username={username} 
    //         totalProfit={totalProfit} totalDeposit={totalDeposit} totalBouns={totalBouns} totalInvestment={totalInvestment} totalWithdrawal={totalWithdrawal}
    //       />}/>
    //     </Routes>
    //   )}
    // </div>


    <div>  
      <Routes>  
        <Route path='/' element={<LandingPage />} />  
        <Route path="/about" element={<AboutUs />} />  
        <Route path='/sign-in' element={<SignInUser onLogin={handleLoggedIn} />} />  
        <Route path='/sign-up' element={<SignUpUser />} />  
        <Route   
          path='/dashboard'   
          element={  
            <ProtectedRoute isLoggedIn={isLoggedIn}>  
              <Dashboard   
                username={username}   
                totalProfit={totalProfit}   
                totalDeposit={totalDeposit}   
                totalBouns={totalBouns}   
                totalInvestment={totalInvestment}   
                totalWithdrawal={totalWithdrawal} 
                email={email}  
                onSignOut={handleSignOut}
              />  
            </ProtectedRoute>  
          }   
        /> 
        <Route   
          path='/dashboard/deposits'   
          element={  
            <ProtectedRoute isLoggedIn={isLoggedIn}>  
              <DepositPage   
                username={username}   
                email={email}   
                onSignOut={handleSignOut}   
              />  
            </ProtectedRoute>  
          }  
        /> 
        <Route   
          path='/dashboard/deposits/payment'   
          element={  
            <ProtectedRoute isLoggedIn={isLoggedIn}>  
              <MakePayment   
                username={username}   
                email={email}
                onSignOut={handleSignOut}   
              />  
            </ProtectedRoute>  
          }  
        /> 
        <Route   
          path='/dashboard/withdraw'   
          element={  
            <ProtectedRoute isLoggedIn={isLoggedIn}>  
              <WithdrawalPage   
                username={username}   
                email={email}   
                onSignOut={handleSignOut}   
              />  
            </ProtectedRoute>  
          }  
        /> 
        <Route   
          path='/dashboard/withdraw/payment'   
          element={  
            <ProtectedRoute isLoggedIn={isLoggedIn}>  
              <MakeWithdrawalPayment   
                username={username}   
                email={email}   
                onSignOut={handleSignOut}   
              />  
            </ProtectedRoute>  
          }  
        />
        <Route   
          path='/dashboard/invest'   
          element={  
            <ProtectedRoute isLoggedIn={isLoggedIn}>  
              <InvestPage   
                username={username}   
                email={email}   
                onSignOut={handleSignOut}   
              />  
            </ProtectedRoute>  
          }  
        />
        <Route   
          path='/dashboard/transations'   
          element={  
            <ProtectedRoute isLoggedIn={isLoggedIn}>  
              <TransactionPage   
                username={username}   
                email={email}   
                onSignOut={handleSignOut}   
              />  
            </ProtectedRoute>  
          }  
        />
        <Route   
          path='/dashboard/support'   
          element={  
            <ProtectedRoute isLoggedIn={isLoggedIn}>  
              <SupportPage   
                username={username}   
                email={email}   
                onSignOut={handleSignOut}   
              />  
            </ProtectedRoute>  
          }  
        />
      </Routes>  
  </div>  
  )
}

export default App
