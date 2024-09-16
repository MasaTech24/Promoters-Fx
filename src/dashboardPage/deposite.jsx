import React from "react";
import { useState } from "react";
import DashBars from "./dash-bar";
import { useNavigate } from "react-router-dom";
import '../styles/dashboard.css'

function DepositPage ({username, email}) {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");  
  const [numberInput, setNumberInput] = useState('');
  const [paymentMethod, setpaymentMethod] = useState('');
  const [errors, setErrors] = useState({ numberInput: '', paymentMethod: '' });  

  const handleProccedPayment= (e) => { 
    e.preventDefault
    const newErrors = { numberInput: '', paymentMethod: '' };
    let isValid = true;

    // validate number input
    if(!numberInput){
      newErrors.numberInput = 'Enter amount to deposits.';  
      isValid = false;
    }else if(isNaN(numberInput) || numberInput < 50){
      newErrors.numberInput = 'Minimum deposits should be atleast $50.'; 
      isValid = false;  
    }
    if (!paymentMethod) {  
      newErrors.paymentMethod = 'Please select a payment method.';  
      isValid = false;  
    }  

    setErrors(newErrors);  

    if (isValid) {  
      navigate('/dashboard/deposits/payment', { state: { selectedPaymentMethod } }); //  Pass the selected payment method to the next page
    } 
  };

  // Handler function to update state when a radio button is selected  
  const handleChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
    setpaymentMethod(e.target.value);
  }

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
              <input type="number"  
                placeholder="Enter Amount to deposits" 
                value={numberInput}   
                onChange={(e) => setNumberInput(e.target.value)}
                required
                minLength='10'
                />
                {errors.numberInput && (  
                  <span style={{ color: 'red', fontSize: '14px'}}>{errors.numberInput}</span>  // Display error for number input  
                )}  
            </div>

            <div className="choose-payment-div">
              <h3>Choose Payment Method from the list below</h3>

              <div className="payment-metthods">
                <div className="btc-div">
                  <input 
                    type="radio" 
                    name="currencies" 
                    value="Bitcoin"
                    checked = {selectedPaymentMethod === 'Bitcoin'}
                    onChange={(handleChange)}
                    min='10'
                  />
                  <img src="/icons/btc.png" alt="" width='25px'/>
                  <p>Bitcoin</p>
                </div>
                <div className="usdt-div">
                  <input 
                    type="radio" 
                    name="currencies" 
                    value='USDT (Trc20)'
                    checked = {selectedPaymentMethod === 'USDT (Trc20)'}
                    onChange={handleChange}
                    />
                  <img src="/icons/usdt.png" alt="" width='25px'/>
                  <p>USDT TRC20</p>
                </div>
                <div className="usdt-div">
                  <input 
                  type="radio" 
                  name="currencies" 
                  value='USDT (Erc20)'
                  checked = {selectedPaymentMethod === 'USDT (Erc20)'}
                  onChange={handleChange}
                  />
                  <img src="/icons/usdt.png" alt="" width='25px'/>
                  <p>USDT ERC20</p>
                </div>
                <div className="usdt-div">
                  <input 
                    type="radio" 
                    name="currencies" 
                    value='USDT (Bep20)'
                    checked = {selectedPaymentMethod === 'USDT (Bep20)'}
                    onChange={handleChange}
                    />
                  <img src="/icons/usdt.png" alt="" width='25px'/>
                  <p>USDT BEP20</p>
                </div>
                <div className="eth-div">
                  <input  
                    type="radio" 
                    name="currencies"
                    value='eth (Erc20)'
                    checked = {selectedPaymentMethod == 'eth (Erc20)'}
                    onChange={handleChange}
                    />
                  <img src="/icons/ethrum.png" alt="" width='25px'/>
                  <p>Etherum</p>
                </div> <br/>
              </div>
                <div style={{marginBottom: '20px'}}>
                  {errors.paymentMethod && (  
                    <span style={{ color: 'red', fontSize: '14px'}}>{errors.paymentMethod}</span>  
                  )} 
                </div>
              <button className="proceed-btn" onClick={handleProccedPayment}>Proceed Payment</button>
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
