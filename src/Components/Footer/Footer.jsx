import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faChevronRight,faPhone,faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTwitter,faSquareInstagram,faPinterest } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <section className='footer'>
        <div className="box-container">
        <div class="box-footer">
                <h3>Our Branches</h3>
                <a href="/"><FontAwesomeIcon className='i' color='#ffb700' icon={faLocationDot} /> India</a>
                <a href="/"><FontAwesomeIcon className='i' color='#ffb700' icon={faLocationDot} /> Russia</a>
                <a href="/"><FontAwesomeIcon className='i' color='#ffb700' icon={faLocationDot} /> Japan</a>
                <a href="/"><FontAwesomeIcon className='i' color='#ffb700' icon={faLocationDot} /> France</a>
                <a href="/"><FontAwesomeIcon className='i' color='#ffb700' icon={faLocationDot} /> Canada</a>
            </div>
            <div class="box-footer">
                <h3>Our Quick Links</h3>
                
                <a href="#home"><FontAwesomeIcon className='i' color='#ffb700' icon={faChevronRight} /> Home</a>
                <a href="#packages"><FontAwesomeIcon className='i' color='#ffb700' icon={faChevronRight} /> packages</a>
                <a href="#services"><FontAwesomeIcon className='i' color='#ffb700' icon={faChevronRight} /> Services</a>
                <a href="#pricing"><FontAwesomeIcon className='i' color='#ffb700' icon={faChevronRight} /> pricing</a>
                <a href="#blogs"><FontAwesomeIcon className='i' color='#ffb700' icon={faChevronRight} /> Blogs</a>
            </div>
            <div class="box-footer">
                <h3>Concat Us</h3>
                <a href="/"> <FontAwesomeIcon className='i' color='#ffb700' icon={faPhone} /> +91 89677685</a>
                <a href="/"> <FontAwesomeIcon className='i' color='#ffb700' icon={faPhone} /> +123-421-3234</a>
                <a href="/"> <FontAwesomeIcon className='i' color='#ffb700' icon={faEnvelope} /> shan@gmail.com</a>
                <a href="/"> <FontAwesomeIcon className='i' color='#ffb700' icon={faLocationDot} /> kolkata, wb, 700054</a>
            </div>
            <div class="box-footer">
                <h3>Follow Us</h3>
                <a href="/"><FontAwesomeIcon className='i' color='#ffb700' icon={faFacebook} /> Facebook</a>
                <a href="/"><FontAwesomeIcon className='i' color='#ffb700' icon={faTwitter} />  Twitter</a>
                <a href="/"><FontAwesomeIcon className='i' color='#ffb700' icon={faSquareInstagram} /> Instagram</a>
                <a href="/"><FontAwesomeIcon className='i' color='#ffb700' icon={faPinterest} /> Pinterest</a>
            </div>
        </div>
    </section>
  )
}

export default Footer 
