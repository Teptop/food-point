import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = () => {

    const {food_list} = useContext(StoreContext)

  return (
    <section className='packages' id='packages'>
        <h1 class="heading">Our <span>Food</span></h1>
        <div className="box-container">
            {food_list.map((item,index)=>{
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} new_price={item.new_price} old_price={item.old_price} image={item.image}/>
            })}
        </div>
    </section>
  )
}

export default FoodDisplay
