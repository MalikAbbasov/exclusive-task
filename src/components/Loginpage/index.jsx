import React from "react";
import "./login.scss";

function Loginpage() {
  return (
    <div>
      <div id="login_page">
        <div className="container">
          <div className="photo">
            <img
              src="https://johnlewis.scene7.com/is/image/JohnLewis/237078993alt2?$rsp-pdp-port-640-82$"
              alt=""
            />
          </div>
          <div className="login">
            <h2>Log in to Exclusive</h2>
            <p>Enter your details below</p>
            <input
              className="inpt"
              type="text"
              placeholder="Email or Phone number"
            />
            <input className="inpt" type="password" placeholder="Password" />
            <div className="butons">
              <button className="Login">Login</button>
              <p className="forget">Forget Password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
