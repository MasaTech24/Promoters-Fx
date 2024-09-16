import React from "react";
import { useState, useEffect } from "react";
import DashBars from "./dash-bar";
import { ref, set, push, getDatabase, onValue, runTransaction, update, } from 'firebase/database'; 
import { getAuth } from "firebase/auth";

function MakeWithdrawalPayment ({username, email}) {
  const [totalDeposit, setTotalDeposit] = useState(0);  
  const [withdrawAmount, setWithdrawAmount] = useState('');  
  const [btcInput, setBtcInput] = useState('');  
  const [message, setMessage] = useState('');
  const auth = getAuth();
  const [errors, setErrors] = useState({ withdrawAmount: '', btcInput: ''});  
  // const [transactionHistory, setTransactionHistory] = useState([]); 

  // const fetchTransactionHistory = () => {
  //   const auth = getAuth();
  //   const database = getDatabase()
  //   const userId = auth.currentUser.uid;
  //   const transactionRef = ref(database, `users/${userId}/transactions`);

  //   onValue(transactionRef, (snaphot) =>{
  //     const transactions = [];
  //     snaphot.forEach(childSnapshot => {
  //       transactions.push({id: childSnapshot.key, ...childSnapshot.val()})
  //     });
  //     setTransactionHistory(transactions)
  //   }, (error) => {
  //     console.error('Error fetching transaction history:', error)
  //   })
  // }
  
  useEffect(() => { 
    const user = auth.currentUser;  
    if (user) {  
      const database = getDatabase()
      const balanceRef = ref(database, `users/${user.uid}/totalDeposit`);   

      // runTransaction(balanceRef, (totalDeposit)=>{
      //   if(totalDeposit === null){
      //     return 0;
      //   }
      //   const newBalance = totalDeposit - amount;  
      //   return newBalance >=0 ? newBalance : totalDeposit;
      // })  
      // .then((result) => {  
      //   if(result.snapshot.exists()) {
      //     setMessage('Withdrawal successful!');  
      //   }else{
      //     setMessage('Error processing withdrawal.')
      //   }
      //   // setAccountBalance(newBalance);  
      // })  
      // .catch((error) => {  
      //   console.error('Transacation failed:', error);  
      //   setMessage('Error processing withdrawal.');
      // });
      // get(balanceRef).then((snapshot) => {  
      
        const unsubscribe = onValue(balanceRef, (snapshot) => {
        if (snapshot.exists()) {  
          setTotalDeposit(snapshot.val());  
        } else {  
          console.log('No data available');  
        }  
      }, (error) => {
        console.error('Error fetching balance:', error); 
      })  
      // Cleanup listener on unmount  
      return () => unsubscribe();   
    }  
    fetchTransactionHistory()
  }, [auth.currentUser]);   

  const handleWithdraw = () => {
    const newErrors = { withdrawAmount: '', btcInput: ''};
    let isValid = true;
  
    // validate number input
    if(!withdrawAmount){
      newErrors.withdrawAmount = 'Enter amount to withdraw.';  
      isValid = false;
    }else if(isNaN(withdrawAmount) || withdrawAmount < 50){
      newErrors.withdrawAmount = 'Minimum withdraw should be atleast $50.'; 
      isValid = false; 
    }
    if (!btcInput) {  
      newErrors.btcInput = 'Please Enter your Bitcoin wallet';  
      isValid = false;  
    } 
    setErrors(newErrors)

    if(isValid){
      const amount = parseFloat(withdrawAmount);
      
      if (isNaN(amount) || amount <= 0) {  
        setMessage('Please enter a valid amount.');  
        return;  
      }  
      
      if (amount > totalDeposit) {  
        setMessage('Insufficient balance.');  
        return;
      }
      // else{
        const userId = auth.currentUser.uid; 
        const database = getDatabase()
        const balanceRef = ref(database, `users/${userId}/totalDeposit`); 
  
        runTransaction(balanceRef, (currentTotalDeposit)=>{
          if(currentTotalDeposit === null){
            // Handle it in case the balance does not exist  
            return null;
          }
          const newBalance = currentTotalDeposit - amount;  
          return newBalance >=0 ? newBalance : currentTotalDeposit;
        })  
        .then((result) => {  
          if(result !== null) {
            const transactionBaseRef = ref(database, `users/${userId}/transactions`);
            const transactionRef = push(transactionBaseRef);

            const transactionData = {
              amount: amount,
              paymentMethod: 'Bitcoin',
              status: "Pending",
              transaction: 'withdraw',
              date: new Date().toISOString()

            }
            if(transactionRef){
              set(transactionRef, transactionData)
              // .then(() => {
              //   return transactionRef.update({ status: 'Completed' });
              // })
              .then(() => {
                setMessage('Withdrawal successful!');  
                setWithdrawAmount('');  
                setBtcInput('');  
                // fetchTransactionHistory();
              })
              .catch(error => {
                console.error('Error saving transaction:', error);  
                setMessage('Withdrawal successful, but error saving transaction.');  
              })
            }            

            // const transactionId = push(transactionRef).key;

            // const transactionData = {
            //   amount: amount,
            //   paymentMethod: 'Bitcoin',
            //   status: "Pending",
            //   transaction: 'withdraw',
            //   date: new Date().toISOString
            // };
            
            // set(transactionRef, transactionId, transactionData).then(() => {
            //   setMessage('Withdrawal successful!');  
            //   setWithdrawAmount('');  
            //   setBtcInput('');  
            //   fetchTransactionHistory();
            // }).catch(error => {
            //   console.error('Error saving transaction:', error);  
            //   setMessage('Withdrawal successful, but error saving transaction.');  
            // })
          }else{
            setMessage('Error processing withdrawal.')
          }
          // setAccountBalance(newBalance);  
        })  
        .catch((error) => {  
          console.error('Transacation failed:', error);  
          setMessage('Error processing withdrawal.');  
        });  
      // }
    }

  }

  return(
    <div>
    {/* for side bar  */}
    <div className="navigate-bars"> 
      <DashBars username={username} email={email}/>     
      <div className="main">
        <div className="dashbord-ccontainer mk-pymt-container">
          <h2 className="welcome-heading mk-pm-h2">Happy Withdraw!</h2>

          <div className="make-payment-container witdrw-pymt-div">
            <h4>
            Your Payment Method is Bitcoin.
            </h4>
            <div className="selected-pm">
              <img src="/icons/btc.png" alt="" width='25px'/>
              <p>BITCOIN</p>
            </div>

            <div className="wallet-address-and-proof">
              {/* <h3>Bitcoin Wallet Address:</h3> */}

              <div className="wallet-address witdrw-div">
                <label>Enter Amount to withdraw</label>
                <input 
                  type="number" 
                  placeholder="Enter Amount" className="wallet-input"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
                {errors.withdrawAmount && (  
                <span style={{ color: 'red', fontSize: '13px', marginTop: '-10px', marginBottom: '10px'}}>{errors.withdrawAmount}</span>  // Display error for number input  
                )}

                <label>Enter Bitcoin Address</label>
                <input 
                  type="text" 
                  placeholder="wallet address" className="wallet-input"
                  value={btcInput}
                  onChange={(e) => setBtcInput(e.target.value)}
                />
                {errors.btcInput && (  
                <span style={{ color: 'red', fontSize: '13px', marginTop: '-10px', marginBottom: '10px'}}>{errors.btcInput}</span>  // Display error for number input  
                )}
              </div>
              <button className="make-payment" onClick={handleWithdraw}>Withdraw</button>
              {message && <p style={{color: 'yellowgreen', fontSize: '13px', marginTop:'20px'}}>{message}</p>}  
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
export default MakeWithdrawalPayment;