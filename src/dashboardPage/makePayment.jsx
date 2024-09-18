import React from "react";
import { useState, useEffect } from "react";
import DashBars from "./dash-bar";
import { useLocation } from "react-router-dom";

// Font Awesome icon imported function 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faCopy  } from '@fortawesome/free-solid-svg-icons';

// firebase database imports
import { ref, set, getDatabase} from 'firebase/database';  
import { getAuth } from "firebase/auth";
// css imports
import '../styles/dashboard.css';

const walletAddresses = { 
  "Bitcoin": '1PJuc8Ve2mhjavDnhAn6ANtrLL7u4GorEq',
  'USDT (Trc20)': 'TTMFxrsD57TLhtRvXm9yFDtXGFRUDt3sqW',
  'USDT (Erc20)' :'0x8d940424813a4658c727c530b0c85e8d916b6558',
  'USDT (Bep20)': '0x8d940424813a4658c727c530b0c85e8d916b6558',
  'ETH (Erc20)': '0x8d940424813a4658c727c530b0c85e8d916b6558'
}
const paymentImages = {  
  'Bitcoin': '/icons/btc.png',  
  'USDT (Trc20)': '/icons/usdt.png',  
  'USDT (Erc20)': '/icons/usdt.png',  
  'USDT (Bep20)': '/icons/usdt.png',  
  'eth (Erc20)': '/icons/ethrum.png'  
}; 

function MakePayment ({username, email}) {
  const location = useLocation(); // Use location to access passed state  
  const { selectedPaymentMethod } = location.state || {}; // Retrieve the selected payment method  
  const [walletAddress, setWalletAddress] = useState('');  
  const [paymentImage, setPaymentImages] = useState('');  
  const [fileInput, setFileInput] = useState(null);
  const [message, setMessage] = useState(''); 
  const [fileValidation, setFileValidation] = useState();
  const [errors, setErrors]  = useState({fileValidation: null})

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

  const handleFileChange = (e) => {  
    setFileInput(e.target.files[0]); 
    setFileValidation(e.target.files[0]); 
  }; 

  const sanitizeFileName = (fileName) => {  
    return fileName.replace(/[.#$[\]]/g, '_').replace(/\s+/g, '_');  
  }; 

  const handlePayment = async() => {
    if (!fileInput) {  
      setMessage('Please select a file to upload.');  
      return;  
    }  
    const sanitizedFileName = sanitizeFileName(fileInput.name); // Sanitize the file name  
    const auth = getAuth()
    const userId = auth.currentUser.uid;
    const database = getDatabase()

    const fileRef = ref(database, `users/${userId}/${sanitizedFileName}`);
    const newErrors = {fileValidation: null} 
    let isValid = true

    try{
      await set(fileRef, {
        name: sanitizedFileName,
        file: fileInput,
        uploadedAt: new Date().toISOString()
      })
      setMessage('file uploaded successfully')
    }catch (error) {  
      console.error( error);  
      setMessage(error.message);  
    }  

    if(!fileValidation){
      setErrors.fileValidation = 'Please Upload your payment proof.';
      isValid =false;
    }
    setErrors(newErrors)

    if(isValid){
      alert('Deposits in progress...Wait for confirmation')
    }
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
                <h3>{selectedPaymentMethod}  wallet Address:</h3>

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
                  <input 
                    type="file" className="proof-input"
                    onChange={handleFileChange}
                    required
                  />
                  {errors.fileValidation && (  
                  <span style={{ color: 'red', fontSize: '14px'}}>{errors.fileValidation}</span>  // Display error for number input  
                )}
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