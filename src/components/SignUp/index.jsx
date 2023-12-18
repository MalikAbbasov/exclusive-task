import React from 'react'
import "./sign.scss"
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
        <div id="signup">
            <div className="container">
                <div className="photo">
                    <img src="https://johnlewis.scene7.com/is/image/JohnLewis/237078993alt2?$rsp-pdp-port-640-82$" alt="" />
                </div>
                <div className="create_acount">
                    <h2>Create an account</h2>
                    <p>Enter your details below</p>
                    <input className='inpt' type="text" placeholder='Name' />
                    <input className='inpt' type="text" placeholder='Email or Phone number' />
                    <input className='inpt' type="password" placeholder='Password'/>
                    <button className='create'>Create Account</button>
                    <div className="google">
                        <img src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702771200&semt=ais" alt="" />
                        <p>Sign Up with Google</p>
                    </div>
                    <div className="login">
                    <h4>Already have account?</h4>
                    <Link to={"/login"}> Login</Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp