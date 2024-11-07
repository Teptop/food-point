import React from 'react'
import './FormContainer.css'

const FormContainer = () => {
  return (
    <section className='form-container'>
        <form action="">
        <div class="inputBox">
            <span>where</span>
            <input type="text" placeholder="Search Places"/>
        </div>

        <div class="inputBox">
            <span>When</span>
            <input type="date"/>
        </div>

        <div class="inputBox">
            <span>Time</span>
            <input type="time"/>
        </div>
        <input type="submit" value="Order Now" class="btn"/>
    </form>
    </section>
  )
}

export default FormContainer
