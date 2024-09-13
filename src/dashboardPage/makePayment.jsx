import React from "react";
import { useState, useEffect } from "react";
import DashBars from "./dash-bar";
import { useLocation } from "react-router-dom";
// Font Awesome icon imported function 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faCopy  } from '@fortawesome/free-solid-svg-icons';
import '../styles/dashboard.css';

const walletAddresses = { 
  "Bitcoin": '1PJuc8Ve2mhjavDnhAn6ANtrLL7u4GorEq',
  'USDT (Trc20)': 'TTMFxrsD57TLhtRvXm9yFDtXGFRUDt3sqW',
  'USDT (Erc20)' :'0x8d940424813a4658c727c530b0c85e8d916b6558',
  'USDT (Bep20)': '0x8d940424813a4658c727c530b0c85e8d916b6558',
  'eth (Erc20)': '0x8d940424813a4658c727c530b0c85e8d916b6558'
}
const paymentImages = {  
  'Bitcoin': '/icons/btc.png',  
  'USDT (Trc20)': '/icons/usdt.png',  
  'USDT (Erc20)': '/icons/usdt.png',  
  'USDT (Bep20)': '/icons/usdt.png',  
  'eth (Erc20)': '/icons/ethrum.png'  
}; 
const handlePayment = () => {
  alert('Deposits in progress...Wait for confirmation')
}
function MakePayment ({username, email}) {
  const location = useLocation(); // Use location to access passed state  
  const { selectedPaymentMethod } = location.state || {}; // Retrieve the selected payment method  
  const [walletAddress, setWalletAddress] = useState('');  
  const [paymentImage, setPaymentImages] = useState('');  

  // Set the wallet address based on the selected payment method  
  useEffect(() => {  
    if (selectedPaymentMethod)  {  
      setWalletAddress(walletAddresses[selectedPaymentMethod]);
      setPaymentImages(paymentImages[selectedPaymentMethod]);    
    }  
  }, [selectedPaymentMethod]);  

  // Function to copy the input value to clipboard  
  const handleCopy = () => {  
    const inputField = document.querySelector('.wallet-input'); // Get the input element using its ID  
    inputField.select(); // Select the input text  
    document.execCommand('copy'); // Copy the selected text  
    alert('Wallet address copied to clipboard!'); // Optional: provide feedback to the user  
  }

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
                {paymentImage && (  
                  <img src={paymentImage} alt={selectedPaymentMethod} width='25px'/>  
                )}  
                <p>{selectedPaymentMethod}</p>
              </div>

              <div className="wallet-address-and-proof">
                <h3>{selectedPaymentMethod} Wallet Address:</h3>

                <div className="wallet-address">
                  <input 
                    type="text" 
                    className="wallet-input"
                    value={walletAddresses[selectedPaymentMethod]}
                    readOnly={true}
                    required
                    />
                  <button onClick={handleCopy}>
                    <FontAwesomeIcon icon={faCopy } size="lg"/>
                    {/* <img src="/vite.svg" alt="" width='25px'/> */}
                  </button>
                </div>
                <p className="network-type">
                  <strong>Network Type: </strong> 
                  {selectedPaymentMethod}
                </p>

                <div className="proof-of-payment">
                  <p>Upload Payment proof after payment.
                  </p>
                  <input type="file" className="proof-input"/>
                </div>

                <button className="make-payment" onClick={handlePayment}>Make Payment</button>
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