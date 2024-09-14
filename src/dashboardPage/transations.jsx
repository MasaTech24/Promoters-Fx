import React from "react";
import DashBars from "./dash-bar";
import { useNavigate } from "react-router-dom";
import '../styles/dashboard.css'

function TransactionPage ({username, email}) {
  const navigate = useNavigate();

  const handleProccedWithdraw= () => {  
    navigate('/dashboard/withdraw/payment'); // Navigate to the deposits page  
  };

  return(
    <div>
    {/* for side bar  */}
    <div className="navigate-bars"> 
      <DashBars username={username} email={email}/>     
      <div className="main">
        <div className="dashbord-ccontainer">
          <h2 className="welcome-heading">Transactions on your account
          </h2>

          <div className="account-container">
            <div className="trans-table">
              <div className="trans-table-head">
                <h3>S/N</h3>
                <h3>Amount</h3>
                <h3>Payment</h3>
                <h3>Status</h3>
                <h3>Transation</h3>
                <h3>Date</h3>
              </div>
              <div className="trans-table-body">
                <h4>1</h4>
                <h4>$ 500</h4>
                <h4>Eth</h4>
                <h4 className="pending">Pending</h4>
                <h4 className="depo-signs">Deposits</h4>
                <h4>20/03/2023</h4>
              </div>
              <div className="trans-table-body">
                <h4>2</h4>
                <h4>$ 1500</h4>
                <h4>Bitcoin</h4>
                <h4 className="pending">Pending</h4>
                <h4 className="withdraw-signs">Withdraw</h4>
                <h4>20/03/2023</h4>
              </div>
              <div className="trans-table-body">
                <h4>3</h4>
                <h4>$ 3000</h4>
                <h4>Bitcoin</h4>
                <h4 className="success">Success</h4>
                <h4 className="depo-signs">Deposit</h4>
                <h4>20/03/2023</h4>
              </div>
            </div>
            
            {/* <table>
              <tr className="table-header">
                <th></th>
                <th>S/N</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
              <tr className="table-body">
                <td>1</td>
                <td>$500</td>
                <td>Bitcoin</td>
                <td className="success">Success</td>
                <td>12:10:2024</td>
              </tr>
            </table> */}
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
export default TransactionPage;