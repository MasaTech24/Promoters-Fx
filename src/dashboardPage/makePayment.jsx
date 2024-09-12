import React from "react";
import DashBars from "./dash-bar";
// Font Awesome icon imported function 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faCopy  } from '@fortawesome/free-solid-svg-icons';
import '../styles/dashboard.css'

function MakePayment ({username, email}) {

  return(
    <div>
    {/* for side bar  */}
    <div className="navigate-bars"> 
      <DashBars username={username} email={email}/>     
      <div className="main">
        <div className="dashbord-ccontainer mk-pymt-container">
          <h2 className="welcome-heading mk-pm-h2">Make Payment</h2>

          <div className="make-payment-container">
            <h4>
              You are to make payment of $100 using your selected payment method. Screenshot and upload the proof of payment
            </h4>
            <div className="selected-pm">
              <img src="/icons/btc.png" alt="" width='25px'/>
              <p>BITCOIN</p>
            </div>

            <div className="wallet-address-and-proof">
              <h3>Bitcoin Wallet Address:</h3>

              <div className="wallet-address">
                <input type="text" placeholder="wallet address" className="wallet-input"/>
                <button>
                  <FontAwesomeIcon icon={faCopy }/>
                  {/* <img src="/vite.svg" alt="" width='25px'/> */}
                </button>
              </div>
              <p className="network-type">
                <strong>Network Type: </strong> 
                BTC
              </p>

              <div className="proof-of-payment">
                <p>Upload Payment proof after payment.
                </p>
                <input type="file" name="" id=""  className="proof-input"/>
              </div>

              <button className="make-payment">Make Payment</button>
            </div>

          </div>
            {/* copyright seciton  */}
            <div className="dashboard-copyright-div mk-pm-cpr">
              <p>All Rights Reserved © Promoters FX 2024</p>
            </div>
        </div>
      </div>
    </div>

    </div>
  )
}
export default MakePayment;