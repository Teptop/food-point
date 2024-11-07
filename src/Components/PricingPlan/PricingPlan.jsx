import React from 'react'
import './PricingPlan.css'

const PricingPlan = () => {
  return (
    <section className='pricing'>
        <h1 class="heading">Our <span>Pricing</span></h1>
         
         <div class="box-container">
 
             <div class="box">
                 <h3>Basic Plan</h3>
                 <div class="price">
                     <span>$</span>
                     <span class="amount">30</span>
                     <span>/mo</span>
                 </div>
                 <ul>
                     <li>10 Days</li>
                     <li>Food and Drink</li>
                     <li>Saft Guide</li>
                     <li>Insurance</li>
                     <li>Free Delivery</li>
                 </ul>
                 <a href="/" className="btn">Choose Plan</a>
             </div>
 
 
             <div class="box">
                 <h3>Basic Plan</h3>
                 <div class="price">
                     <span>$</span>
                     <span className="amount">50</span>
                     <span>/mo</span>
                 </div>
                 <ul>
                     <li>10 Days</li>
                     <li>Food and Drink</li>
                     <li>Saft Guide</li>
                     <li>Insurance</li>
                     <li>Free Delivery</li>
                 </ul>
                 <a href="/" className="btn">Choose Plan</a>
             </div>
 
 
             <div class="box">
                 <h3>Basic Plan</h3>
                 <div class="price">
                     <span>$</span>
                     <span className="amount">100</span>
                     <span>/mo</span>
                 </div>
                 <ul>
                     <li>10 Days</li>
                     <li>Food and Drink</li>
                     <li>Saft Guide</li>
                     <li>Insurance</li>
                     <li>Free Delivery</li>
                 </ul>
                 <a href="/" className="btn">Choose Plan</a>
             </div>
 
         </div>
    </section>
  )
}

export default PricingPlan
