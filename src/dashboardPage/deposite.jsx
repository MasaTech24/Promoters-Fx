import React from "react";
import DashBars from "./dash-bar";
import { useNavigate } from "react-router-dom";
import '../styles/dashboard.css'

function DepositPage ({username, email}) {
  const navigate = useNavigate();

  const handleProccedPayment= () => {  
    navigate('/dashboard/deposits/payment'); // Navigate to the deposits page  
  };

  return(
    <div>
    {/* for side bar  */}
    <div className="navigate-bars"> 
      <DashBars username={username} email={email}/>     
      <div className="main">
        <div className="dashbord-ccontainer">
          <h2 className="welcome-heading">Fund Your Account</h2>

          <div className="account-container">
            <div className="amount-input-div">
              <h3>Amount</h3>
              <input type="number"  placeholder="Enter Amount to deposits" required/>
            </div>

            <div className="choose-payment-div">
              <h3>Choose Payment Method from the list below</h3>

              <div className="payment-metthods">
                <div className="btc-div">
                  <input type="radio" name="currencies" id="" />
                  <img src="/icons/btc.png" alt="" width='25px'/>
                  <p>Bitcoin</p>
                </div>
                <div className="usdt-div">
                  <input type="radio" name="currencies" id="" />
                  <img src="/icons/usdt.png" alt="" width='25px'/>
                  <p>USDT TRC20</p>
                </div>
                <div className="usdt-div">
                  <input type="radio" name="currencies" id="" />
                  <img src="/icons/usdt.png" alt="" width='25px'/>
                  <p>USDT ERC20</p>
                </div>
                <div className="usdt-div">
                  <input type="radio" name="currencies" id="" />
                  <img src="/icons/usdt.png" alt="" width='25px'/>
                  <p>USDT BEP20</p>
                </div>
                <div className="eth-div">
                  <input type="radio" name="currencies" id="" />
                  <img src="/icons/ethrum.png" alt="" width='25px'/>
                  <p>Etherum</p>
                </div>
              </div>

              <button className="proceed-btn" onClick={handleProccedPayment}>Procced Payment</button>
            </div>
          </div>

          {/* copyright seciton  */}
          <div className="dashboard-copyright-div">
            <p>All Rights Reserved © Promoters FX 2024</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
export default DepositPage;