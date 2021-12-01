import React from 'react';
import '../components/Navbar.css'
function Reports() {
  return (
  <div className="main-div">
        <div className="title">
            <p>Contact Us</p>
        </div>
        <section className="contact-us">
        <div className="row">
            <div className="contact-col">
                <form action="javascript:sendmail()" method="post">
                    <input type="text" id="Name" name="Name" placeholder="Enter your name" required/>
                    <input type="email" id="Sender" name="Sender" placeholder="Enter email address" required/>
                    <input type="text" id="Subject" name="Subject" placeholder="Enter your subject" required/>
                    <textarea rows="8" placeholder="message" id="Message" name="Message"></textarea>
                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>
  </div>
  );
}

export default Reports;
