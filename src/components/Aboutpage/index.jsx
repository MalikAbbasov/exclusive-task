import React from 'react'
import "./about.scss"


function Aboutpage() {
    return (
        <div>
            <div id="about">
                <section id='our_story'>
                    <div className="our_story_text">
                        <h2>Our Story</h2>
                        <p>Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <div className="our_story_image">
                        <img src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1704067200&Signature=n-oha2AnFe24Xlahn9mfXnUsQ7NJ~Rxhd6LyYnB~5E~WaplxN6KvsDmjT-NNu~aWyLW--KyycE5B9h0jvfIOCVrxLIu5gkIPQYx2kH08COI4wIp2q1veGYfsX0T3gZ8K0aq0hpQVnB7qMqXuP3JuA3EArl~q4K~3GljTCOoWp7~DLLFCxAh9YNmpn9CA~hWzhVgnllp3sjihsZV0eQ-2~lKcPZ9hgvjUEwvmTdaZtnQbnCtC3~-mKoDBJgoGPD0QjJkAI7yxCQQTwmDlzwiY0KKqw46E4mvR0m9pI4dOOdMMOkZ49hy6ovl1mbCmAeivhDtxvG~xCS3gNNFVfL2AbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                </section>
            </div>

            <div id="about_cards">
                <div className="card_container">
                    <div className="cards">
                        <div className="image">
                            <i className="fa-solid fa-mobile-screen-button"></i>
                            <h3>Phones</h3>
                        </div>
                        <div className="image">
                            <i className="fa-solid fa-desktop"></i>
                            <h3>Computers</h3>
                        </div>
                        <div className="image">
                            <i className="fa-solid fa-clock"></i>
                            <h3>Smart Watches</h3>
                        </div>
                        <div className="image">
                            <i className="fa-solid fa-camera"></i>
                            <h3>Cameras</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about_slider">
                <div className="slider_container">
                    <div className="images">
                    <div className="person">
                            <div className="photo">
                            <img src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1704067200&Signature=ZPnn85lInyajHK4XAJ-ipxqBhe4aG9XI1buM2cII6aTY64W69elIbTafffNbJZf-CurC6wfd0w0-j-cIj0SGBR55sKTG54GP6hBhrl3R0AKOXaY8NsdnIaQa-ax1GhIZLeqYMds46rknUU9Ljkh~u4eDMWDAggon0Yn1GXyocJ3w8QvAkvpqVRBnk9IAL7JwVE8Q8yE6ohlH9VbOyavaIJ9zl9bY1iIPptaeXLJoEK~Jf9CLejPWr1TtudLETol3w1mJaKj2vPN3l2k7HrSpP3YjCznkn124zcpuxdRQxAi972RZzrLXhyzLU0nRtkdSB337HfFlHNq1wRgJKHfOlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            </div>
                            <h3>Tom Cruise</h3>
                            <p>Founder & Chairman</p>
                            <div className="icons">
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-square-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="person">
                            <div className="photo">
                            <img src="https://s3-alpha-sig.figma.com/img/ede4/8f2b/5df8103b281240ce5bafe5dd7d215ab8?Expires=1704067200&Signature=msJF1-pczg51YY9Xa~xdgiR6RTSmXIISE47H4CCUOfJGwWJmz8iRLQH6ek4FdS6EekBFp-d3qyUnTB-aOPhmczik8nOtjp805b9cXf4jkDS-1WiViG6WNL80WVkY3r3dNPX0-iIVeWHPSY8gQkVJKRNywuazNcdHsXLhVTOY8xBAuFqJ~0p-cyg6rhY0Gf1sUQqSGjFLsvg94JRL0vYjBFN3xyEmQ~B2lk4~5jZ6VcVI1MqA5OY9TCi0OpM9XA4ajSqDmQlbZSw8mvgIV7P57oBd7ksU~Ze5uEwMZuNvvRT4u7DG2A9191usL~T8nZ8IKsHB3OGngF8VYjPHOUvlkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            </div>
                            <h3>Will Smith</h3>
                            <p>Product Designer</p>
                            <div className="icons">
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-square-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="person">
                            <div className="photo">
                            <img src="https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1704067200&Signature=E5MccMjv72XeK8ijLXaN5XI5tmcI~04ZhEL1EaAbck9HSms00ISO8~fr329CZfaydefkfbSvgeqln5pDBpWSLUHjGM6nIOofAwIjJDVDnuFOdUkhkyYepyYHg1oz~wcema0uSajOXKZmV0bIaLLMQjxqTDL3g4EzGnYbcy5jXll5~CV5MSRH09KC4o04qaoxARiEkrNl7GWgxA2SgVT1lF8ZXLoLAfqwip~7hzZGqG9w6j601J-VEP6ZtLv6wAn18gXSlbvhCTS2mNQ5GEfN3L86M0VsGh-haZ7hXF29ew6gEyxQypFOBf-YN~2W~C1q3YPlv0OrTyFRjS4u6BnLfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            </div>
                            <h3>Emma Watson</h3>
                            <p>Managing Director</p>
                            <div className="icons">
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-square-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                    <div className="noqteler">
                        <div className="noqte"></div>
                        <div className="noqte"></div>
                        <div className="noqte"></div>
                        <div className="noqte"></div>
                        <div className="noqte"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutpage