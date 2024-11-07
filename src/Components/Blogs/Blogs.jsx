import React from 'react'
import { blog_list } from '../Assets/Assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCalendar } from '@fortawesome/free-solid-svg-icons'
import './Blogs.css'

const Blogs = () => {
  return (
   <section className='blogs' id='blogs'>
     <h1 class="heading">Our <span>blogs</span></h1>
     <div className='box-blogs'>
        {blog_list.map((item,id)=>{
            return (
                <div className='box'>
                    <div className="image">
                        <img src={item.menu_image} alt="" />
                    </div>
                    <div className="content">
                        <h3>{item.menu_name}</h3>
                        <a href="/" className='btn'>Read More</a>
                        <div className="icons">
                            <a href="/"><FontAwesomeIcon color='#ffb700' icon={faCalendar} /> {item.date}</a>
                            <a href="/"><FontAwesomeIcon color='#ffb700' className='i' icon={faUser}/> {item.create}</a>
                        </div>
                    </div>
                </div>
            )
        })}
     </div>

   </section>
  )
}

export default Blogs
