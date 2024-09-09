import React from "react";
import DashBars from "./dash-bar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../styles/dashboard.css'

function InvestPage ({username, email}) {
  const navigate = useNavigate();

  return(
    <div>
    {/* for side bar  */}
    <div className="navigate-bars"> 
      <DashBars username={username} email={email}/>     
      <div className="main">
        <div className="dashbord-ccontainer">
          <h2 className="welcome-heading">Investment Plan</h2>

          <div className="investment-container">
            <div className="choose-payment-div">
            <h3>Choose your investment plan and start earning.</h3>

              <div className="balance-card invest-card">
                <div className="balance-acc-div invest-acc-div">
                  <h2 id="invest-start">Starter Plan</h2>
                  <p className="acc-bal-p invest-paragraph">Enjoy entry level of invest & earn</p>
                  {/* <h2>$25,500.00</h2> */}
                  <div className="invest-percent-div">
                    <div>
                      <h2 id="invest-start">1.67%</h2>
                      <p className="acc-bal-p iinvest-paragraph">Daily Interest</p>
                    </div>
                    <div>
                      <h2 id="invest-start">30</h2>
                      <p className="acc-bal-p iinvest-paragraph">Term Days</p>
                    </div>

                  </div>

                  <div className="available-funds">
                    <p>Min Deposits</p>
                    <strong>$200.00</strong>
                  </div>
                  <div className="investment-funds invest-max-funds">
                    <p>Max Deposits</p>
                    <strong>$999.00</strong>
                  </div>
                  <div className="deposits-return">
                    <p>Deposits Return</p>
                    <strong>Yes</strong>
                  </div>
                  <div className="total-funds">
                    <p><strong>Total Return</strong></p>
                    <strong>125%</strong>
                  </div>
                  <div className="funds-button">
                    <input type="number" placeholder="Enter amount" className="invest-amt"/>
                    <button className="invest-btn">Invest</button>
                    {/* <p to='/dashboard/deposit' className="deposit-funds">Deposit Funds</p> */}
                  </div>
                </div>

                <div className="balance-acc-div invest-acc-div">
                  <h2 id="invest-start">Sliver</h2>
                  <p className="acc-bal-p invest-paragraph">Best plan for user to investers</p>
                  {/* <h2>$25,500.00</h2> */}
                  <div className="invest-percent-div">
                    <div>
                      <h2 id="invest-start">4.76%</h2>
                      <p className="acc-bal-p iinvest-paragraph">Daily Interest</p>
                    </div>
                    <div>
                      <h2 id="invest-start">21</h2>
                      <p className="acc-bal-p iinvest-paragraph">Term Days</p>
                    </div>

                  </div>

                  <div className="available-funds">
                    <p>Min Deposits</p>
                    <strong>$1000.00</strong>
                  </div>
                  <div className="investment-funds invest-max-funds">
                    <p>Max Deposits</p>
                    <strong>$4999.00</strong>
                  </div>
                  <div className="deposits-return">
                    <p>Deposits Return</p>
                    <strong>Yes</strong>
                  </div>
                  <div className="total-funds">
                    <p><strong>Total Return</strong></p>
                    <strong>200%</strong>
                  </div>
                  <div className="funds-button">
                    <input type="number" placeholder="Enter amount" className="invest-amt"/>
                    <button className="invest-btn">Invest</button>
                    {/* <p to='/dashboard/deposit' className="deposit-funds">Deposit Funds</p> */}
                  </div>
                </div>

                <div className="balance-acc-div invest-acc-div">
                  <h2 id="invest-start">Gold</h2>
                  <p className="acc-bal-p invest-paragraph">Advance level of invest & earn</p>
                  {/* <h2>$25,500.00</h2> */}
                  <div className="invest-percent-div">
                    <div>
                      <h2 id="invest-start">14.29%</h2>
                      <p className="acc-bal-p iinvest-paragraph">Daily Interest</p>
                    </div>
                    <div>
                      <h2 id="invest-start">14</h2>
                      <p className="acc-bal-p iinvest-paragraph">Term Days</p>
                    </div>

                  </div>

                  <div className="available-funds">
                    <p>Min Deposits</p>
                    <strong>$5000.00</strong>
                  </div>
                  <div className="investment-funds invest-max-funds">
                    <p>Max Deposits</p>
                    <strong>$9000.00</strong>
                  </div>
                  <div className="deposits-return">
                    <p>Deposits Return</p>
                    <strong>Yes</strong>
                  </div>
                  <div className="total-funds">
                    <p><strong>Total Return</strong></p>
                    <strong>125%</strong>
                  </div>
                  <div className="funds-button">
                    <input type="number" placeholder="Enter amount" className="invest-amt"/>
                    <button className="invest-btn">Invest</button>
                    {/* <p to='/dashboard/deposit' className="deposit-funds">Deposit Funds</p> */}
                  </div>
                </div>
              </div>
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
export default InvestPage;