import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <section className="concat" id="services">
         <h1 class="heading" id="heading">Contact <span>Us</span></h1>

<form action="">
    <div class="inputBox">
        <input type="text" placeholder="name"/>
        <input type="email" placeholder="email"/>
    </div>

    <div class="inputBox">
        <input type="number" placeholder="Number"/>
        <input type="text" placeholder="subject"/>
    </div>
    
    <textarea name="" id="" cols="30" rows="10" placeholder="Your Massage"></textarea>
    <input type="submit" value="Send Massage" class="btn"/>

</form>
    </section>
  )
}

export default ContactUs
