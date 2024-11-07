import React from 'react'
import './Header.css'
import { assets } from '../Assets/Assets'

const Header = () => {
  return (
    <section className='home'>
        <div className="image">
            <img src={assets.header_img} alt="" />
        </div>
        <div class="content">
        <h3>most tasty burger for you </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus recusandae tempore est sunt expedita libero.</p>
            <a href="/" class="btn">Explore Now</a>
       </div>
    </section>
  )
}

export default Header
