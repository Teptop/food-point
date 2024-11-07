import React, { useContext } from 'react'
import './FoodItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUtensils } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../Assets/Assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,new_price,old_price,description,image}) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div>
      <div className="box">
        <div className="image">
            <img src={image} alt=""/>
            {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
            :<div className='food-item-counter'>
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
          }
            <h3><FontAwesomeIcon className='i' color='#ffb700' icon={faUtensils} />Burger</h3>
            
        </div>

        <div className="content">
            <div className="price">
                ${new_price} <span>{old_price}</span>
            </div>
            <p>{description}</p>
            <a href="/" className='btn'>Order Now</a>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
