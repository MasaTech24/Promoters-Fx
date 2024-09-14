import React from "react";
import DashBars from "./dash-bar";
import { useNavigate } from "react-router-dom";
import '../styles/dashboard.css'

function SupportPage ({username, email}) {
  const navigate = useNavigate();

  return(
    <div>
    {/* for side bar  */}
    <div className="navigate-bars"> 
      <DashBars username={username} email={email}/>     
      <div className="main">
        <div className="dashbord-ccontainer">
          <div className="support-div">
          <h2 className="support-heading">
            Promoters Trading FX Support
          </h2> 
          <p>For inquiries, suggestions or complains. Mail us</p>
          <span>support@Promoters-tradingfx.com
          </span>

          <form className="support-form">
            <label>Message <span>*</span></label>
            <textarea rows='8' placeholder="Type your message"></textarea>
            <button>Send</button>
          </form>
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
export default SupportPage;