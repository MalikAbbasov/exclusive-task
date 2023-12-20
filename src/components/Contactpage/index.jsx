import React from 'react'
import "./contact.scss"

function Contactpage() {
  return (
    <div>
        <div id="contact">
            <div className="container">
                <div className="left">
                    <div className="left_up">
                        <div className="tel">
                        <i className="fa-solid fa-phone"></i>
                        <h4>Call To Us</h4>
                        </div>
                        <p className='work_time'>We are available 24/7, 7 days a week.</p>
                        <p className='phone'>Phone: +8801611112222</p>
                    </div>
                    <div className="line"></div>
                    <div className="left_down">
                        <div className="letter">
                        <i className="fa-solid fa-envelope"></i>
                        <h4>Write To US</h4>
                        </div>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: malik.abbasov03@gmail.com</p>
                        <p>Emails: mi7un9jeg@code.edu.az</p>
                    </div>
                </div>
                <div className="right">
                    <div className="inputs">
                        <input type="text" placeholder='Your Name'/>
                        <input type="text" placeholder='Your Email'/>
                        <input type="text" placeholder='Your phone'/>
                    </div>
                    <textarea placeholder='Enter Your Message' name="" id="" cols="30" rows="10"></textarea>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactpage